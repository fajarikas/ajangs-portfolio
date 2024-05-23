import React from "react";
import Load from "../../../public/assets/images/loading.gif";

const Loading = () => {
  return (
    <>
      <div className="items-center w-full flex h-screen justify-center">
        <img src={Load} alt="loading" className="" />
      </div>
    </>
  );
};

export default Loading;
