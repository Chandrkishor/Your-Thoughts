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

const LoginPage = () => {
  const handleSkipLogin = () => {
    alert("skip login clicked");
  };

  const handleLogin = () => {
    // Perform API call here
    alert("Login button clicked");
  };

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
