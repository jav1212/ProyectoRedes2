import React, { useState, useEffect } from "react";
import slide1 from "../../images/bg.jpg";
import slide2 from "../../images/bg2.jpeg";
import slide3 from "../../images/bg3.jpeg";

const Section = () => {
  const slides = [
    {
      slide: slide1,
      alt: "cars auctions",
    },
    {
      slide: slide2,
      alt: "offer now",
    },
    {
      slide: slide3,
      alt: "high quality",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const isLast = currentIndex === slides.length - 1;
      const newIndex = isLast ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 4000);
  }, [currentIndex, setCurrentIndex, slides.length]);

  return (
    <div className=" w-full h-screen">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].slide})` }}
        className="w-full h-full flex items-center bg-cover bg-center duration-200 px-4"
      >
        <div className="uppercase text-center text-black font-extrabold">
          <h1 className=" text-8xl">{slides[currentIndex].alt}</h1>
          <h2 className=" text-2xl">Bid now</h2>
        </div>
      </div>
    </div>
  );
};

export default Section;
