"use client";

import React, { useCallback, useContext } from "react";
import { Button, Paper, Grid } from "@mui/material";
import useAPI from "@/components/GeneralAPICaller";
import { useRouter } from "next/navigation";
import MyForm from "@/components/FormBuilder/FormBuilder";
import { General } from "../store/GeneralContext";

const FormFieldArray = [
  {
    control: "TextField2",
    name: "name",
    type: "text",
    label: "Full Name",
    size: { sm: 6, md: 4 },
  },
  {
    control: "TextField2",
    name: "email",
    type: "text",
    label: "Email",
    size: { sm: 3, md: 2 },
  },
  {
    control: "TextField2",
    name: "age",
    type: "number",
    label: "Age",
    size: { sm: 6, md: 4 },
  },
  {
    control: "autocomplete",
    name: "gender",
    label: "Gender",
    options: [
      { _id: "male", label: "Male" },
      { _id: "female", label: "Female" },
      { _id: "other", label: "Other" },
    ],
  },
  {
    control: "TextField2",
    name: "contact",
    type: "text",
    label: "Contact No",
    size: { sm: 6, md: 4 },
  },
];
const initialVal = {
  name: "",
  email: "",
  password: "",
  age: "",
  contact: "",
  image: "",
  imageType: "",
  imageSize: "",
};

const typeValidation = [
  { name: "password", type: "password" },
  { name: "name", type: "name" },
  { name: "email", type: "email" },
  { name: "age", type: "age" },
  { name: "image", type: "age" },
  { name: "contact", type: "phoneNumber" },
];
const UserProfile = () => {
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

export default UserProfile;
