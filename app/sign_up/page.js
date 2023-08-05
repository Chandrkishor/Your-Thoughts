"use client";

import React, { useCallback, useContext } from "react";
import { Button, Paper, Grid } from "@mui/material";
import useAPI from "@/components/common/GeneralAPICaller";
import { useRouter } from "next/navigation";
import MyForm from "@/components/FormBuilder/FormBuilder";
import { General } from "../store/GeneralContext";

const FormFieldArray = [
  {
    control: "TextField2",
    name: "name",
    type: "text",
    label: "Full Name",
    size: { sm: 12, md: 12, lg: 12 },
  },
  {
    control: "TextField2",
    name: "email",
    type: "text",
    label: "Email",
    size: { sm: 12, md: 12, lg: 12 },
  },
  {
    control: "TextField",
    name: "password",
    type: "password",
    label: "Password",
    size: { sm: 12, md: 12, lg: 12 },
  },

  {
    control: "TextField2",
    name: "dob",
    type: "date",
    label: "DOB",
    size: { sm: 12, md: 12, lg: 12 },
  },
  // {
  //   control: "checkbox",
  //   name: "checkboxTest",
  //   label: "My checkbox",
  // },
  // {
  //   control: "switch",
  //   name: "switchTest",
  //   label: "My switch",
  // },
  // {
  // {
  // {
  //   control: "radioGroup",
  //   name: "radioGroup",
  //   row: true,
  //   label: "My first Radio Group",
  //   options: [
  //     { _id: "someId1", label: "radioGroup 1" },
  //     { _id: "someId2", label: "radioGroup 2" },
  //     { _id: "someId3", label: "radioGroup 3" },
  //   ],
  // },
];
const initialVal = {
  name: "",
  email: "",
  password: "",
  dob: "",
};

const typeValidation = [
  { name: "password", type: "password" },
  { name: "name", type: "name" },
  { name: "email", type: "email" },
  { name: "dob", type: "dob" },
];
const SignUp = () => {
  const { post } = useAPI();
  const router = useRouter();
  let { setIsLoading, setAlert } = useContext(General);

  const handleResponse = (response) => {
    if (response.status !== 201) {
      setAlert((prev) => ({
        ...prev,
        open: true,
        message: response?.data?.message || "",
        severity: "error",
      }));
      setIsLoading(false);
      return;
    }
    setAlert((prev) => ({
      ...prev,
      open: true,
      message: response?.data?.message || "",
      severity: "success",
    }));
    setIsLoading(false);
    router.push("/login");
  };

  const handleSubmit = (data) => {
    setIsLoading(true);
    post("register", data, handleResponse);
  };

  const handleLogin = useCallback(() => {
    router.push("/login");
  }, []);

  return (
    <Grid>
      <Paper sx={{ maxWidth: 600, margin: "auto", p: 4 }}>
        <MyForm
          title="Sign-Up"
          fieldsArray={FormFieldArray}
          onSubmitFun={handleSubmit}
          cancelBtn="Login"
          SubmitBtn="Sign-Up"
          formSize="sm"
          SpecialBtn={true}
          handleCancel={handleLogin}
          initialVal={initialVal}
          typeValidation={typeValidation}
        />
        <Grid container sx={{ mt: 1 }}>
          <Button
            variant="text"
            sx={{ width: "100%" }}
            onClick={() => router.push("/")}>
            Go to Home
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUp;
