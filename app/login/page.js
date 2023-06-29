"use client";
import React from "react";
// import useAPI from "../GeneralAPICaller";
// import MyForm from "../components/FormBuilder/FormBuilder";
import { Button, Grid, Paper } from "@mui/material";
import Link from "next/link";
import MyForm from "@/components/FormBuilder/FormBuilder";
import useAPI from "@/components/GeneralAPICaller";

const FormFieldArray = [
  {
    control: "TextField2",
    componentType: false,
    name: "email",
    type: "text",
    label: "Email",
    size: { sm: 6, md: 4 },
  },
  {
    control: "TextField2",
    componentType: true,
    name: "password",
    type: "password",
    label: "Password",
    size: { sm: 6, md: 4 },
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
  //   control: "autocomplete",
  //   name: "loginSelectText",
  //   label: "My first select",
  //   options: [
  //     { _id: "someId1", label: "TestLabel" },
  //     { _id: "someId2", label: "TestLabel2" },
  //     { _id: "someId3", label: "TestLabel3" },
  //   ],
  //   OptionUrl: "http://localhost:3000/api/v1/autocompleteOptions",
  // },
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

const LoginPage = () => {
  const { get, post } = useAPI();

  //* localhost:5000/api/v1/register
  //     {
  //   "name": "Ck",
  //   "email": "Ck2@mail.com",
  //   "password": "1234",
  //   "age": 26,
  //   "gender": "male",
  //   "contact": "9953565656"
  // }

  function handleResponse(response) {
    console.log("handleResponse ~ response: >>", response);
  }
  function onSubmitFun1(values, { setSubmitting }) {
    console.log("onSubmitFun1 ~ values: >>", values);
    //* Perform API call here
    post("login", values, handleResponse);
    // setTimeout(function () {
    //   setSubmitting(false);
    // }, 500);
  }

  return (
    <Grid>
      <Paper sx={{ maxWidth: 600, margin: "auto", p: 4 }}>
        <MyForm
          title="Login Page"
          fieldsArray={FormFieldArray}
          // validationObj={validationObj}
          // initialValues={initialValues}
          onSubmitFun={onSubmitFun1}
          // handleCancel={handleCancel}
          cancelBtn="Cancel"
          SubmitBtn="Submit"
          formSize="sm"
        />
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <span style={{ color: "red" }}>Welcome! </span>
            We're glad to have you here. Please log in to start your session.
          </Grid>
          <Grid item xs={6}>
            <Link href="/sign_up">
              <Button variant="contained" sx={{ width: "100%" }}>
                Sign Up
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="/">
              <Button variant="outlined" sx={{ width: "100%" }}>
                skip Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
