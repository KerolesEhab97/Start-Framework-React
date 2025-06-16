import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" bg-gray-700">
        <div className="container py-20 text-center text-white">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p className="mt-3"> Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h2>AROUND THE WEB</h2>
                <div className="icons d-flex justify-center mt-4 gap-2">
                  <div className="border-2 rounded-4xl w-10 h-10 d-flex justify-center align-items-center">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className="border-2 rounded-4xl w-10 h-10 d-flex justify-center align-items-center">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="border-2 rounded-4xl w-10 h-10 d-flex justify-center align-items-center">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="border-2 rounded-4xl w-10 h-10 d-flex justify-center align-items-center">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h2>ABOUT FREELANCER</h2>
                <p className="mt-4">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className=" bg-gray-800 p-4 mb-0 text-center text-white">
          Copyright © Your Website 2021
        </p>
      </div>
    </>
  );
}
