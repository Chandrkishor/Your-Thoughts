"use client";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Grid,
} from "@mui/material";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const redirectToLogin = () => {
    alert("redirect to login");
  };
  const handleChange = (value, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Grid sx={{ maxWidth: 400, margin: "auto" }}>
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
            Sign Up page
          </Typography>
          <TextField
            size="small"
            type="text"
            label="User Name"
            variant="outlined"
            fullWidth
            margin="normal"
            inputProps={{
              autoComplete: "off",
            }}
            value={formData.userName}
            onChange={(e) => handleChange(e.target.value, "userName")}
          />
          <TextField
            size="small"
            label="Email"
            type="email"
            variant="outlined"
            inputProps={{
              autoComplete: "off",
            }}
            margin="normal"
            value={formData.email}
            onChange={(e) => handleChange(e.target.value, "email")}
            fullWidth
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
            value={formData.password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={handleSubmit}>
            sign-up
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            size="large"
            onClick={redirectToLogin}>
            login
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default SignUp;
