"use client";

import { Grid, Typography } from "@mui/material";
import React from "react";

const Headers = () => {
  return (
    <Grid
      container
      justifyContent="center"
      textAlign="center"
      sx={{
        border: "1px solid black",
        backgroundColor: "teal",
        color: "white",
        p: 1,
      }}>
      <Typography> Our Headers </Typography>
    </Grid>
  );
};

export default Headers;
