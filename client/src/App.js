import React, { useEffect, useState } from "react";
import "./App.css";
import { socket } from "./settings/Socket";
import Header from "./components/Utils/Header";
import Sections from "./components/Utils/Sections";

function App() {
  //TODO:This is connected is for a notification IMPORTANT
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    function onConnect() {
      console.log("Client connected");
      setIsConnected(true);
    }
    function onDisconnect() {
      console.log("Client disconnected");
      setIsConnected(false);
    }
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  });

  return (
    <>
      <Header />
      <Sections />
    </>
  );
}

export default App;
