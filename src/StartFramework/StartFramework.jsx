import React from "react";
import myimg from "../assets/images/avataaars.svg";
export default function StartFramework() {
  return (
    <>
      <div className="bg-teal-500 min-h-[80vh] flex flex-col items-center justify-center pt-8">
        <div className="w-25 text-white">
          <img className="w-100" src={myimg} alt="" />
        </div>
        <div className="content text-white mt-10">
          <p className="font-extrabold text-4xl text-center">START FRAMEWORK</p>
          <div className="d-flex align-items-center justify-content-center pb-16">
            <div className="bg-white me-3 w-24 h-0.5"></div>
            <i className="fa-solid fa-star"></i>
            <div className="bg-white ms-3 w-24 h-0.5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
