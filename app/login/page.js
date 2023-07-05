"use client";
import React, { useCallback, useContext } from "react";
import { Button, Grid, Paper } from "@mui/material";
import MyForm from "@/components/FormBuilder/FormBuilder";
import useAPI from "@/components/GeneralAPICaller";
import { useRouter } from "next/navigation";
import { General } from "../store/GeneralContext";
import { saveCookies, setItemSession } from "../utils/AppUtils";

const FormFieldArray = [
  {
    control: "TextField2",
    name: "email",
    type: "email",
    label: "Email",
    size: { sm: 6, md: 4 },
  },
  {
    control: "TextField2",
    name: "password",
    type: "password",
    label: "Password",
    size: { sm: 6, md: 4 },
  },
];

let initialVal = {
  email: "",
  password: "",
};
const typeValidation = [
  { name: "password", type: "password" },
  { name: "email", type: "email" },
];

const LoginPage = () => {
  const { post } = useAPI();
  const router = useRouter();
  let { setAlert, setIsLoading } = useContext(General);

  //*after login handling response here --------
  function handleResponse(response) {
    if (response.status !== 200) {
      setAlert((prev) => ({
        ...prev,
        open: true,
        message: response?.data?.message || "",
        severity: "error",
      }));
      setIsLoading(false);
      return;
    }
    if (!response.data?.user?.isEmailVerifiedToken) {
      setAlert({
        open: true,
        message: "Please verify your email address",
        severity: "error",
      });
      setIsLoading(false);
      return;
    }
    //* to save userDetails = in session
    let user = response.data?.user;
    setItemSession("userDetails", user);

    //* to save accessToken= in cookies
    let token = response.data?.token;
    saveCookies("access_Token", token);
    setAlert((prev) => ({
      ...prev,
      open: true,
      message: response.data.message,
      severity: "success",
    }));
    setIsLoading(false);
    router.push("/");
  }
  //*after login handling response here ++++++++

  function onSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    setIsLoading(true);
    post("login", values, handleResponse);
  }
  const handleSignUP = useCallback(() => {
    router.push("/sign_up");
  }, []);

  return (
    <Grid>
      <Paper sx={{ maxWidth: 600, margin: "auto", p: 4 }}>
        <MyForm
          title="Login Page"
          fieldsArray={FormFieldArray}
          initialVal={initialVal}
          onSubmitFun={onSubmit}
          cancelBtn="SignUp"
          SubmitBtn="Login"
          formSize="sm"
          SpecialBtn={true}
          handleCancel={handleSignUP}
          typeValidation={typeValidation}
        />
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <span style={{ color: "red" }}>Welcome! </span>
            We're glad to have you here. Please log in to start your session.
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="text"
              sx={{ width: "100%" }}
              onClick={() => router.push("/")}>
              skip Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
