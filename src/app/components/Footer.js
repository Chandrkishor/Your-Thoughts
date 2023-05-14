"use client";

import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      textAlign="center"
      sx={{
        border: "1px solid black",
        position: "fixed",
        bottom: "0",
        width: "100%",
        p: 1,
        backgroundColor: "#b4b4b4",
      }}>
      <Typography> Our Footer </Typography>
    </Grid>
  );
};

export default Footer;
