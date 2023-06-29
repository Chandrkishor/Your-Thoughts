import React from "react";
import Style from "./signStyle.module.css";

const LoadingComponent = () => {
  return (
    <div className={Style["loader-container"]}>
      <div className={Style.loader}></div>
    </div>
  );
};

export default LoadingComponent;
