import React from "react";
import Card from "./Card";

const Page = ({ cars, active }) => {
  const carsPerPage = cars.slice((active - 1) * 6, (active - 1) * 6 + 6);

  return (
    <div
      className=" flex-wrap flex justify-between mr-10 ml-10"
      style={{ maxWidth: "screen" }}
    >
      {carsPerPage.map((car, index) => {
        return <Card key={index} car={car} />;
      })}
    </div>
  );
};

export default Page;
