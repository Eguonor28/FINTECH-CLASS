import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-2 p-2">
      <div className=" p-20">
        <div className="flex items-center">
          {" "}
          <img className="w-16" src="/Masco_logo.png" alt="" />
          <h1 className="text-[20px] text-blue-600 font-bold">MascoTech</h1>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold">
            Hello,
            <br />
            Welcome Back
          </h1>
          <p className="mt-3">Hey, welcome back to your special place</p>
        </div>
        <div className="mt-10">
          <form action="">
            <div className="flex flex-col space-y-2">
              <input
                className="border py-3 px-2 w-[500px] rounded"
                type="text"
                placeholder="Enter your email"
              />
              <input
                className="border py-3 px-2 w-[500px] rounded"
                type="text"
                placeholder="password"
              />
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className=" space-x-1">
                <input type="checkbox" />
                <a href="">Remember me</a>
              </div>
              <a href="">Forgot Password</a>
            </div>
            <button className="bg-blue-600 text-white py-2 px-8 rounded mt-10">
              Singin
            </button>
          </form>
          <p className="mt-20">
            Don't have an account ?{" "}
            <a className="text-blue-500" href="">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div className="rounded ">
        <img
          className="rounded-2xl h-full  object-cover "
          src="/loginpic2.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
