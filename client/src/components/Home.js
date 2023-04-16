import React, { useEffect, useState } from "react";
import Header from "./Utils/Header";
import { socket } from "../settings/Socket";
import Pages from "../components/Utils/Pages";
import LoadPage from "./Utils/LoadPage";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataArrived, setDataArrived] = useState(false);

  useEffect(() => {
    if (!dataArrived) {
      socket.emit("getHomeData", dataArrived);

      socket.on("homeData", (data) => {
        setCars(data);
        setDataArrived(true);
      });

      return () => {
        socket.off("homeData", (data) => {
          setCars(data);
        });
      };
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [cars, dataArrived]);

  return (
    <>
      <Header />
      <div
        className=" bg-gray-200"
        style={{ maxWidth: "screen", maxHeight: "screen" }}
      >
        {isLoading ? <LoadPage /> : <Pages cars={cars} />}
      </div>
    </>
  );
};

export default Home;
