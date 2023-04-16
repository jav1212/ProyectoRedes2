import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className=" w-4/12 h-3/4 bg-black/60 fixed flex justify-center items-center right-8 top-10 flex-col">
      <h1 className=" text-3xl mb-10 font-semibold text-white">Sing up</h1>
      <div className=" mb-6 w-4/5">
        <label
          for="email"
          className="block mb-2 text-xl font-extralight text-gray-900 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
        />
      </div>
      <div className=" mb-6 w-4/5">
        <label
          for="password"
          className="block mb-2 text-xl font-extralight text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
        />
      </div>
      <Button
        as={Link}
        to="/Home"
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </Button>
    </div>
  );
};

export default Login;
