import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function () {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-9">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
}
