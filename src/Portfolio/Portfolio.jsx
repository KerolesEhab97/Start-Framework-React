import React from "react";
import myimg1 from "../assets/images/poert1.png";
import myimg2 from "../assets/images/port2.png";
import myimg3 from "../assets/images/port3.png";

export default function Portfolio() {
  return (
    <>
      <div>
        <section className="container min-h-100 my-8">
          <div className="header">
            <p className="font-bold text-4xl text-center text-gray-800">
              PORTFOLIO COMPONENT
            </p>
            <div className="d-flex align-items-center justify-content-center pb-4">
              <div className="bg-black me-3 w-28 h-1"></div>
              <i className="fa-solid fa-star"></i>
              <div className="bg-black ms-3 w-28 h-1"></div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4 ">
                <div className="img position-relative">
                  <img src={myimg1} className="w-100 rounded-[7px]" alt="" />
                  <div className="layer top-0 start-0 end-0 bottom-0 position-absolute flex justify-center items-center rounded-[7px] hover:bg-teal-600 transition-colors duration-700">
                    <i className="text-white fa-solid fa-plus fa-6x" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="img position-relative">
                  <img src={myimg2} className="w-100 rounded-[7px]" alt="" />
                  <div className="layer top-0 start-0 end-0 bottom-0 position-absolute flex justify-center items-center rounded-[7px] hover:bg-teal-600 transition-colors duration-700">
                    <i className="text-white fa-solid fa-plus fa-6x" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="img position-relative">
                  <img src={myimg3} className="w-100 rounded-[7px]" alt="" />
                  <div className="layer top-0 start-0 end-0 bottom-0 position-absolute flex justify-center items-center rounded-[7px] hover:bg-teal-600 transition-colors duration-700">
                    <i className="text-white fa-solid fa-plus fa-6x" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="img position-relative">
                  <img src={myimg1} className="w-100 rounded-[7px]" alt="" />
                  <div className="layer top-0 start-0 end-0 bottom-0 position-absolute flex justify-center items-center rounded-[7px] hover:bg-teal-600 transition-colors duration-700">
                    <i className="text-white fa-solid fa-plus fa-6x" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="img position-relative">
                  <img src={myimg2} className="w-100 rounded-[7px]" alt="" />
                  <div className="layer top-0 start-0 end-0 bottom-0 position-absolute flex justify-center items-center rounded-[7px] hover:bg-teal-600 transition-colors duration-700">
                    <i className="text-white fa-solid fa-plus fa-6x" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="img position-relative">
                  <img src={myimg3} className="w-100 rounded-[7px]" alt="" />
                  <div className="layer top-0 start-0 end-0 bottom-0 position-absolute flex justify-center items-center rounded-[7px] hover:bg-teal-600 transition-colors duration-700">
                    <i className="text-white fa-solid fa-plus fa-6x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
