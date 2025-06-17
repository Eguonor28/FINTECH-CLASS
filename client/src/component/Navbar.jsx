import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center  justify-around">
        <div className="flex items-center">
          <img className="w-16" src="/Masco_logo.png" alt="" />
          <h1 className="text-[20px] text-blue-600 font-bold">MascoTech</h1>
        </div>
        <div className="hidden md:flex space-x-3">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contacts</a>
        </div>
        <div className="space-x-3">
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Login
          </button>
          <button className="border py-2 px-4 rounded">Signup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
