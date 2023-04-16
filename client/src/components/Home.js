import React, { useEffect, useState } from "react";
import Header from "./Utils/Header";
import { socket } from "../settings/Socket";
import Pages from "../components/Utils/Pages";

const Home = () => {
  const [cars, setCars] = useState([{}]);

  useEffect(() => {
    socket.emit("getHomeData");

    socket.on("homeData", (data) => {
      setCars(data);
    });

    return () => {
      socket.off("homeData", (data) => {
        setCars(data);
      });
    };
  }, [setCars]);

  return (
    <>
      <Header />
      <div
        className=" bg-gray-200"
        style={{ maxWidth: "screen", maxHeight: "screen" }}
      >
        <Pages cars={cars} />
      </div>
    </>
  );
};

export default Home;
