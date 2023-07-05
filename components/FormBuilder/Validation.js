"use client";
import * as Yup from "yup";

const validationSchema = {
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    ),
  name: Yup.string()
    .required("Name is required")
    .max(125, "Name cannot exceed 125 characters"),
  selectOption: Yup.string().required("Please select an option"),
  radioButton: Yup.string().required("Please select one option"),
  checkbox: Yup.array().min(1, "Please select at least one option"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^[0-9]{10}$/,
      "Phone number must be a 10-digit number without any special characters"
    ),
  address: Yup.string()
    .required("Address is required")
    .matches(
      /^[a-zA-Z0-9 .,-]+$/,
      "Address can only contain alphanumeric characters, spaces, periods, commas, and hyphens"
    ),
  postalCode: Yup.string()
    .required("Postal code is required")
    .matches(/^[0-9]{6}$/, "Postal code must be a 6-digit number"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    "Please accept the terms and conditions"
  ),
  additionalText: Yup.string()
    .required("Additional text is required")
    .max(125, "Additional text cannot exceed 125 characters")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Additional text can only contain alphanumeric characters"
    ),
  age: Yup.number()
    .required("Age is required")
    .integer("Age must be a whole number")
    .positive("Age must be a positive number")
    .min(5, "Age must be at least 5 years")
    .max(99, "Age cannot exceed 99 years"),
};

// const typeValidation = [
//   { name: "password", type: "password" },
//   { name: "name", type: "name" },
// ];

const validator = (typeValidation = []) => {
  const value = typeValidation?.reduce((acc, type) => {
    if (validationSchema[type.type]) {
      acc[type.name] = validationSchema[type.type];
    }
    return acc;
  }, {});

  const finalValidation = Yup.object().shape(value);
  console.log("finalValidation:", finalValidation);

  return finalValidation;
};

export default validator;
