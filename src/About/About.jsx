import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-teal-500 h-[80vh] flex flex-col items-center justify-center text-white">
        <p className="font-bold text-4xl">ABOUT COMPONENT</p>
        <div className="d-flex align-items-center justify-content-center pb-16">
          <div className="bg-white me-3 w-32 h-1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-white ms-3 w-32 h-1"></div>
        </div>
        <div className="container">
          <div className="row gy-5 ">
            <div className="col-md-6">
              <p className="text-xl text-center">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-xl text-center">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
