import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className=" fixed w-full text-white flex justify-end p-4 items-center ">
      <nav>
        <div className=" absolute right-8 top-10 md:hidden scale-150">
          <FaBars onClick={showMenu} className=" scale-150 cursor-pointer" />
        </div>
        <ul className=" hidden md:flex gap-8 p-6 uppercase bg-black/60">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/myauctions">My Auctions</Link>
          </li>
          <li>
            <Link to="/">Log Out</Link>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Header;
