# Imports for Firebase
import firebase_admin
from firebase_admin import db
from firebase_admin import credentials

# Utils imports
import datetime

# Multithread imports
import threading
from threading import Thread, Semaphore

# Imports for Flask
from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit

# Credentials for firebase connections
cred = credentials.Certificate({
    "type": "service_account",
    "project_id": "carsales-28935",
    "private_key_id": "cbef86998c7b70e89243db8dd7dabed1e3882e09",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDXO0fbwZOtgBSy\n/3FLx6bvvJi/qLde/NdiEaJ7Px+1uywR7M44N4nUEWIa8kaHjE1VWf19Kd4tJEno\nCVwAp/IYQGr5Pgx2NxZugBdFZPx7BezNnpIiuEBzSJzQzcWkAzeQ/AwEA7zl/ygf\nbcM0m2oBP5iMxQXVeobl9KKZ3ykFrZeeFqqqTnSCzDU6dCaiZTHIOUVnXdcrVTd5\nofc6V+YvV+lOcAcc9rdLu/5cSbEfaG08XBDUn/uxL/qZeW/H3/MeQLZKQ/Omyn9S\nOh5cF7t6X0qtQMUNe70baJr9R0XXi73psjdvKoec/XJzTg47QDTAjUAjAuVI2MWm\nTmJ/U8QhAgMBAAECggEADkijiYoHQEnHwI6t+NbUgASG0/FhJK9S+/HU/qjpydMU\n0aZi6TLbtXSR4N1DS6ucAOtqpJaAEC7gWMMw6o+QGYaXkthIq2/B0AOK3SgejsDj\nPkzPwKN0Y4eQy1Vcpc3bhNu1UG7kZ78kl9wI9cIlVCqMTTX7dSIfNxOigY5ggpKA\n1XkfdaYF8MYsndO+/MLhFYnrqlgjtE3bEUryOepudbyC5yE8CSawKVWQJPBvnfsz\n7MSd1TCd1eijfNIez5yO+R38b0Xj8nkquJjrfLks3ytmd+KI7+FcwNVVbM1kGruY\nbrXUJc4FjrHu62VxaUEOVas8zYwKQxxNVjzll3tXgQKBgQD1b+uzP72gFws9LVYg\nHDkwY+MMr2REwCHGsACm/Vhkb5amtinjvuTMp0oTsnmtJln355CkvfUxEJX+2odJ\nHmN+9xp64BjFerT8plWUCJyo5qr4CNHsuTZkCrGY7/HpqX8+reKW88d3u1Q0zTvw\nz+aYvzp16JnjTiAgxecnQvjL3QKBgQDgfpKVO3giB4dclVYXIcPpWkWDVkeJ1qBA\nBgTuozfVPcZm87HIWQs/Pe2DZN+Zpdv2WmnMMrJ2HQC1k+xJZ63SdxA+txlBJJAa\ngPxQjAaD4Yo9apzxTOpaWUOWuTHVgHhMZnMChj8T130eagM8Gl74Xz/PNGVorjW2\nxwBa1zgHFQKBgEXogh9FWZK+3ZGoVy7AOz3gRay4THwUqco5GYZ3BPVen2+O1XGs\nTulIAR6JKIU8NkYZbCawgKVgDwlPX1dhU3+3jJBRQl0FbYXFLv0CUvT89te9U2X0\n/1wRe7KPLb2bbMYCq1bJyxf8gKiliJw363u4hENPZH3NI/ORyxxwxAL1AoGAeLoY\nwkBU/pfl55g30ADMhrWRJGxF1I6jZ0rVZDBKWlb6V2s+dGvObJg1HrAkv1A+1mEQ\n/EtXRcWbGAsQyvkCtWhqSA/XePzcsiQjjH2BE3M7EIRBGlMuxJ+0hV3auuJ3zz5Z\nI0ZmrZj5JF4Gl0/nOtKeUiPvVTg6kqy6OB/9dXECgYB9HoKvJ+D6fVgYxMs1YGr0\nCcD3esYtzOji6Dw7n+z+nWD+J3X5P5pmWTYza6S2oNQhkJaPPskOpdweYSjjun+r\nvfKANcJLzvvo1UVCHxd8B7IZFiXbBPoAfIRw8mwH/uSug/XSVd7dXrADYDqX1Rqs\naVsbl4jjx7zTqflRLXULTg==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-3wiq7@carsales-28935.iam.gserviceaccount.com",
    "client_id": "104984914398587736911",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3wiq7%40carsales-28935.iam.gserviceaccount.com"
})

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://carsales-28935-default-rtdb.firebaseio.com'
})

# Flask server creation
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = "secret! "

# Socket creation
socket_io = SocketIO(app, cors_allowed_origins="*")

# Socket handle


@socket_io.on('connect')
def connected():
    print("client has connected with the request", request.sid)
    emit('connect', request.sid)


@socket_io.on('disconnect')
def test_disconnect():
    print('Client disconnected')
    emit('disconnect', request.sid)

# Socket custom handle


def threadHomeHandle():
    print("Thread started task HOMEDATA", threading.current_thread().name)
    emit('homeData', db.reference('/cars').get())


@socket_io.on('getHomeData')
def handleRequestHomeData(data):
    if data:
        print('llego verificar si cambio en la bdd')
    else:
        threading.Thread(target=threadHomeHandle()).start()


def threadOfferHandle(data):
    print("Thread started task OFFER", threading.current_thread().name)
    user_ref = db.reference('/users/'+data["user"]+'/offers').push()
    user_ref.set({
        "carId": data['carId'],
        "offerTime": str(datetime.datetime.now().time())
    })


@socket_io.on('offer')
def handleOffer(data):
    threading.Thread(target=threadOfferHandle(data)).start()


if __name__ == "__main__":
    socket_io.run(app, host='127.0.0.1', port=4000)
