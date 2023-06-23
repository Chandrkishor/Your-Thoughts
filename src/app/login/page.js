"use client";

import React from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import useAPI from "../GeneralAPICaller";

const LoginPage = () => {
  const { get, post } = useAPI();

  const handleSkipLogin = () => {
    alert("skip login clicked");
  };

  //* localhost:5000/api/v1/register
  //     {
  //   "name": "Ck",
  //   "email": "Ck2@mail.com",
  //   "password": "1234",
  //   "age": 26,
  //   "gender": "male",
  //   "contact": "9953565656"
  // }

  const handleLogin = (data) => {
    console.log("handleLogin ~ data: >>", data);

    //* localhost: 5000 / api / v1 / login;
    //     {
    //   "email": "Ck_Verify_@test.com",
    //   "password": "1234"
    // }
    // Perform API call here
    // post("login", body, handleResponse);
    alert("Hook done , form builder pending");
  };
  function handleResponse(data) {
    console.log("handleResponse ~ data: >>", data);
  }

  return (
    <Grid style={{ maxWidth: 400, margin: "auto" }}>
      <Paper sx={{ padding: 2 }}>
        <Stack spacing={2}>
          <Typography
            variant="h1"
            sx={{
              color: "#3F51B5",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
              mb: 3,
            }}>
            Login page
          </Typography>

          <TextField
            size="small"
            label="User Name"
            variant="outlined"
            fullWidth
            margin="normal"
            inputProps={{
              autoComplete: "off",
            }}
          />
          <TextField
            size="small"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            inputProps={{
              autoComplete: "off",
            }}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={handleLogin}>
            Login
          </Button>

          <Button
            variant="outlined"
            color="primary"
            fullWidth
            size="large"
            onClick={handleSkipLogin}>
            sign-up
          </Button>
          <Button
            variant="text"
            color="primary"
            fullWidth
            size="large"
            onClick={handleSkipLogin}>
            Skip Login
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
