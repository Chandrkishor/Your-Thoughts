"use client";
import React from "react";
// import useAPI from "../GeneralAPICaller";
import MyForm from "../components/FormBuilder/InputManager";

const LoginPage = () => {
  // const { get, post } = useAPI();

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

  const FormFieldArray = [
    {
      control: "TextField",
      componentType: false, // for fast Fields
      name: "email",
      type: "text",
      label: "Email",
      placeholder: "Enter your email",
      helperText: "Please enter proper email address",
      // size: "large",
      size: { sm: 6, md: 4 },
    },
    {
      control: "TextField",
      componentType: true, // for fast Fields
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your Password",
      helperText: "Password should be at least 8 characters",
      size: { sm: 6, md: 4 },
      // Options: [],
    },
    // {
    //   control: "selector",
    //   name: "loginSelectText",
    //   type: "autocomplete",
    //   label: "My first select",
    //   placeholder: "Choose an option",
    //   helperText: "Choose a correct option",
    //   defaultValue: { _id: "someId", label: "TestLabel" },
    //   Options: [
    //     { _id: "someId1", label: "TestLabel" },
    //     { _id: "someId2", label: "TestLabel2" },
    //     { _id: "someId3", label: "TestLabel3" },
    //   ],
    //   OptionUrl: "http://localhost:3000/api/v1/autocompleteOptions",
    // },
    {
      control: "button",
      label: "Cancel",
      variant: "outlined", //contained
      // place: "true", //default nextLine
    },
    {
      control: "button",
      type: "Submit",
      label: "Submit",
      // place: "true", //default nextLine
    },
  ];
  const initialValues = {
    email: "ck",
    password: "12",
  };
  const validationObj = {};

  function onSubmitFun1(values, { setSubmitting }) {
    console.log("onSubmitFun1 ~ values: >>", values);
    setTimeout(function () {
      setSubmitting(false);
    }, 500);
  }

  return (
    <MyForm
      title="Login Page"
      fieldsArray={FormFieldArray}
      validationObj={validationObj}
      initialValues={initialValues}
      onSubmitFun={onSubmitFun1}
    />
  );
};

export default LoginPage;
