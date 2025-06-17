import React from "react";

const Hero = () => {
  return (
    <div className="mb-10">
      <div className="text-center max-w-3xl m-auto mt-10 ">
        <h1 className="text-5xl ">
          The Future of Manufacturing with the{" "}
          <span className="text-blue-600">lastest technology</span>
        </h1>
        <p className="max-w-2xl m-auto mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt fugiat
          rerum, amet provident, tempora obcaecati vero harum commodi corrupti
          eius consequuntur.
        </p>
        <button className="bg-blue-600  px-10 py-4 text-[20px] text-white rounded mt-5">
          Get Sterted
        </button>
      </div>
      <div className="bg-gradient-to-br from-red-400  to-blue-400 mt-5 max-w-5xl mx-auto rounded">
        <video className="p-10 w-4xl m-auto" src="/agentvid.mp4"></video>
      </div>
    </div>
  );
};

export default Hero;
