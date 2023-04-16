import React from "react";
import { socket } from "../../settings/socket";

const Card = ({ car }) => {
  const handleOffer = () => {
    socket.emit("offer", {
      user: "0",
      carId: car.id,
    });
  };
  return (
    <div
      style={{ height: "300px", width: "450px" }}
      className="m-lg-2 rounded overflow-hidden flex flex-col shadow-lg"
    >
      <img className="w-auto h-56" src={car.src} alt="" />
      <div className="">
        <div className="text-left ml-5  font-extrabold text-3xl uppercase">
          {car.brand}
        </div>
      </div>
      <div className=" flex flex-row justify-between mr-5 ml-5">
        <h1 className=" text-left font-sans text-2xl uppercase">{car.model}</h1>
        <button
          onClick={handleOffer}
          className="bg-white/5 hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Offer
        </button>
      </div>
    </div>
  );
};

export default Card;
