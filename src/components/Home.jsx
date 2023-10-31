import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to <span className="text-princetonOrange">Asmodeus</span>
      </h1>
      <p className="text-gray-500 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
        quaerat quidem quod, quod, quod.
      </p>
      <Link to="/about" className="text-princetonOrange hover:text-gray-900">
        Learn more
      </Link>
    </div>
  );
};

export default Home;
