"use client";

import { Button } from "@mui/material";
import React from "react";
// import Style from "./signStyle.module.css";

const Error = () => {
  const reset = () => {
    // Do something here.
  };
  return (
    <div>
      <h1>Something went wrong</h1>
      <Button variant="contained" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
};

export default Error;
