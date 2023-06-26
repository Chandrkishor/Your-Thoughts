"use client";

import { Button } from "@mui/material";
import React from "react";
import Style from "./lignStyle.module.css";

const Error = () => {
  const reset = () => {
    // Do something here.
  };
  return (
    <div className={Style["loader-container"]}>
      <h1>Something went wrong(Login form)</h1>
      <Button variant="contained" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
};

export default Error;
