import React from "react";
import { Link } from "react-router-dom";
import { FaMixer } from "react-icons/fa";

const MenuItems = ({ showMenu, active }) => {
  return (
    <div>
      <ul
        className={
          active
            ? " hidden "
            : "md:hidden flex-col flex items-center fixed inset-0 justify-center uppercase gap-8 left-1/4 backdrop-blur-lg bg-black/40 p-8"
        }
      >
        <FaMixer onClick={showMenu} className=" cursor-pointer" />
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
