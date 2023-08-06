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
  textareaField: Yup.string().test(
    "wordCount",
    "Word should be between 10 to 120 only",
    (value) => {
      if (value) {
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount >= 10 && wordCount <= 120;
      }
      return true;
    }
  ),
  dob: Yup.date()
    .nullable()
    .required("DOB is required")
    .test("valid-dob", "Invalid DOB", (value) => {
      if (value) {
        const currentDate = new Date();
        const selectedDate = new Date(value);
        // Calculate the age in years
        const age = Math.floor(
          (currentDate - selectedDate) / (365 * 24 * 60 * 60 * 1000)
        );
        // Check if the age is between 5 and 90 years
        if (age < 5) {
          throw new Yup.ValidationError(
            "You must be at least 5 years old to register.",
            value,
            "dob"
          );
        } else if (age > 90) {
          throw new Yup.ValidationError("You are too old.", value, "dob");
        }
      }
      return true;
    }),
  image: Yup.mixed()
    .required("Image is required")
    .test("fileFormat", "Invalid file format", (value) => {
      if (value) {
        const supportedFormats = ["image/jpeg", "image/png", "image/gif"];
        return supportedFormats.includes(value.type);
      }
      return true;
    })
    .test("fileSize", "File size too large", (value) => {
      if (value) {
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
        return value.size <= maxSizeInBytes;
      }
      return true;
    }),
  // website: Yup.string().url("Invalid website URL"),
  website: Yup.string().test(
    "valid-url",
    "Invalid website URL",
    function (value) {
      if (value && value.trim() !== "") {
        try {
          const url = new URL(value);
          return true;
        } catch (error) {
          return false;
        }
      }
      return true;
    }
  ),
  title: Yup.string()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters")
    .max(100, "Title must be at most 100 characters"),
  content: Yup.string()
    .required("Content is required")
    .min(50, "Content must be at least 10 characters"),
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

  return finalValidation;
};

export default validator;
