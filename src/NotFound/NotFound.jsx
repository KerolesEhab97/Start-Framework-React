import React from "react";

export default function NotFound() {
  return (
    <>
      <section className="h-[60vh] pt-8 bg-red-300 flex flex-col items-center justify-center">
        <p className="font-bold text-4xl text-center text-gray-800">NotFound</p>
        <div className="d-flex align-items-center justify-content-center pb-16">
          <div className="bg-black me-3 w-16 h-1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-black ms-3 w-16 h-1"></div>
        </div>
      </section>
    </>
  );
}
