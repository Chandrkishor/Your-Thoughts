"use client";
import { General } from "@/app/store/GeneralContext";
import React, { useCallback, useContext } from "react";
import MyForm from "../FormBuilder/FormBuilder";

const FormFieldArray = [
  {
    control: "TextField2",
    name: "title",
    type: "text",
    label: "Post Title",
    required: true,
    size: { sm: 12, md: 12, lg: 12 },
  },
  {
    control: "TextField2",
    name: "post",
    type: "text",
    label: "Your post",
    multiline: true,
    minRows: 10,
    maxRows: 20,
    size: { sm: 12, md: 12, lg: 12 },
  },
];
const initialVal = {
  title: "",
  post: "",
};

const typeValidation = [
  { name: "title", type: "title" },
  { name: "post", type: "content" },
];

const AddPost = () => {
  let { setIsAddOpen } = useContext(General);

  const handleSubmit = useCallback((data) => {
    console.log("handleSubmit ~-------- data: >>", data);
  }, []);

  const handleCancel = useCallback(() => {
    setIsAddOpen(false);
  }, []);

  return (
    <MyForm
      fieldsArray={FormFieldArray}
      onSubmitFun={handleSubmit}
      cancelBtn="Cancel"
      SubmitBtn="Save"
      formSize="md"
      handleCancel={handleCancel}
      initialVal={initialVal}
      typeValidation={typeValidation}
      borderAndShadow={true}
    />
  );
};

export default AddPost;
