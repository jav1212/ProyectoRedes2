import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import Page from "./Page";

const Pages = ({ cars }) => {
  const [active, setActive] = useState(1);
  const handleNext = () => {
    if (active < items.length) {
      setActive(active + 1);
    }
  };
  const handlePrev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };
  const handleClick = (e) => {
    setActive(parseInt(e.target.id));
  };

  let items = [];
  for (let index = 1; index <= Math.ceil(cars.length / 6); index++) {
    items.push(index);
  }

  return (
    <>
      <div
        className=" flex items-center justify-center align-content-center flex-col gap-5 h-screen"
        style={{ maxWidth: "screen", maxHeight: "screen" }}
      >
        <Page cars={cars} active={active} />
        <Pagination className=" absolute bottom-3">
          <Pagination.Prev onClick={handlePrev} />
          {items.map((item) => {
            return (
              <Pagination.Item
                onClick={handleClick}
                id={item}
                key={item}
                active={item === active}
              >
                {item}
              </Pagination.Item>
            );
          })}
          <Pagination.Next onClick={handleNext} />
        </Pagination>
      </div>
    </>
  );
};

export default Pages;
