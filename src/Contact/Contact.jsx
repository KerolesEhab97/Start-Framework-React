import React from "react";

export default function Contact() {
  return (
    <>
      <section className="container min-h-[80vh] pb-8 mt-20">
        <p className="font-bold text-4xl text-center text-gray-800">
          CONTACT STCTION
        </p>

        <div className="d-flex align-items-center justify-content-center pb-16">
          <div className="bg-black me-3 w-28 h-1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-black ms-3 w-28 h-1"></div>
        </div>

        <div className="form w-50 m-auto">
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control border-top-0 rounded-0 border-gray-300 border-start-0 border-end-0"
              id="productName"
              placeholder="productName"
              oninput="inputsValidations(this ,'nameErrorMsg')"
            />
            <label htmlFor="productName">userName</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="number"
              className="form-control border-top-0 rounded-0 border-gray-300 border-start-0 border-end-0"
              id="productPrice"
              placeholder="productPrice"
              oninput="inputsValidations(this ,'priceErrorMsg')"
            />
            <label htmlFor="productPrice">userAge</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="text"
              list="category"
              className="form-control border-top-0 rounded-0 border-gray-300 border-start-0 border-end-0"
              id="productCategory"
              placeholder="productCategory"
              oninput="inputsValidations(this ,'categoryErrorMsg')"
            />
            <label htmlFor="productCategory">userEmail</label>
          </div>
          <div className="form-floating mb-4">
            <textarea
              className="form-control border-top-0 rounded-0 border-gray-300 border-start-0 border-end-0"
              id="productDescription"
              placeholder="productDescription"
              oninput="inputsValidations(this ,'descriptionErrorMsg')"
              defaultValue={""}
            />
            <label htmlFor="productDescription">userPassword</label>
          </div>

          <button className="bg-teal-500 text-white font-medium rounded px-4 py-[9px] mt-4 hover:bg-teal-600 transition-colors">
            Send Message
          </button>
        </div>
      </section>
    </>
  );
}
