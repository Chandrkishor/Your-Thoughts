"use client";

import React, { useCallback } from "react";
import { Button, Paper, Grid } from "@mui/material";
import useAPI from "@/components/GeneralAPICaller";
import { useRouter } from "next/navigation";
import MyForm from "@/components/FormBuilder/FormBuilder";

const FormFieldArray = [
  {
    control: "TextField2",
    name: "email",
    type: "text",
    label: "Email",
    size: { sm: 3, md: 2 },
  },
  {
    control: "TextField2",
    name: "password",
    type: "password",
    label: "Password",
    size: { sm: 6, md: 4 },
  },
  {
    control: "TextField2",
    name: "fullName",
    type: "text",
    label: "Full Name",
    size: { sm: 6, md: 4 },
  },
  {
    control: "TextField2",
    name: "age",
    type: "number",
    label: "Age",
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
  {
    control: "autocomplete",
    name: "gender",
    label: "Gender",
    options: [
      { _id: "male", label: "Male" },
      { _id: "female", label: "Female" },
      { _id: "other", label: "Other" },
    ],
    // OptionUrl: "http://localhost:3000/api/v1/autocompleteOptions",
  },
  {
    control: "TextField2",
    name: "contact",
    type: "text",
    label: "Contact No",
    size: { sm: 6, md: 4 },
  },
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

const SignUp = () => {
  const { post } = useAPI();
  const router = useRouter();

  const handleSubmit = (data) => {
    console.log(data);
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
