"use client";
import {
  Button,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
} from "@mui/material";
import {
  TextField,
  Autocomplete,
  CheckboxWithLabel,
  InputBase,
  Switch,
  RadioGroup,
} from "formik-mui";
import { Formik, Form, Field, FastField } from "formik";
import { TextField as MuiTextField } from "@mui/material";
import validator from "./Validation";

export default function MyForm({
  fieldsArray = [],
  initialVal = {},
  typeValidation = [],
  onSubmitFun = () => {},
  title = null,
  handleCancel = () => {},
  cancelBtn = "",
  SubmitBtn = "",
  formSize = "sm",
  SpecialBtn = false,
}) {
  let width = "600px";
  switch ([formSize]) {
    case "sm":
      width = "600px";
    case "md":
      width = "900px";
    case "lg":
      width = "1200px";
  }
  // const validationSchema = Yup.object().shape(
  //   );
  // let validationSchema = validator();

  // const validationSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email('Invalid email format')
  //     .required('Email is required'),
  //   password: Yup.string()
  //     .required('Password is required')
  //     .min(8, 'Password must be at least 8 characters')
  //     .matches(
  //       /^(?=.*[A-Z])/,
  //       'Password must contain at least one uppercase letter'
  //     ),
  //   name: Yup.string().required('Name is required'),
  //   selectOption: Yup.string().required('Please select an option'),
  //   radioButton: Yup.string().required('Please select one option'),
  //   checkbox: Yup.array().min(1, 'Please select at least one option'),
  //   phoneNumber: Yup.string()
  //     .required('Phone number is required')
  //     .matches(
  //       /^[0-9]{10}$/,
  //       'Phone number must be a 10-digit number without any special characters'
  //     ),
  //   address: Yup.string()
  //     .required('Address is required')
  //     .matches(
  //       /^[a-zA-Z0-9 .,-]+$/,
  //       'Address can only contain alphanumeric characters, spaces, periods, commas, and hyphens'
  //     ),
  //   postalCode: Yup.string()
  //     .required('Postal code is required')
  //     .matches(/^[0-9]{6}$/, 'Postal code must be a 6-digit number'),
  //   dateOfBirth: Yup.date().required('Date of birth is required'),
  //   termsAndConditions: Yup.boolean().oneOf(
  //     [true],
  //     'Please accept the terms and conditions'
  //   ),
  //   additionalText: Yup.string()
  //     .required('Additional text is required')
  //     .max(125, 'Additional text cannot exceed 125 characters')
  //     .matches(
  //       /^[a-zA-Z0-9]+$/,
  //       'Additional text can only contain alphanumeric characters'
  //     ),
  // });

  return (
    <Formik
      initialValues={initialVal ?? {}}
      validationSchema={validator(typeValidation)}
      onSubmit={onSubmitFun}>
      {({ submitForm, isSubmitting, errors, touched }) => (
        <Form>
          <Paper
            sx={
              SpecialBtn
                ? {
                    maxWidth: width,
                    margin: "auto",
                    boxShadow: "none",
                    p: 2,
                  }
                : {
                    maxWidth: width,
                    margin: "auto",
                    p: 2,
                  }
            }>
            <Grid container justifyContent="center" spacing={2}>
              {title && (
                <Grid item xs={12} container>
                  <Grid
                    item
                    xs={12}
                    textAlign="center"
                    sx={{
                      m: 0.5,
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#3F51B5",
                    }}>
                    {title ?? ""}
                  </Grid>
                  <Grid item xs={12} sx={{ mb: 2 }}>
                    <Divider />
                  </Grid>
                </Grid>
              )}
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={2}
                  sx={{ width: "100%" }}
                  justifyContent={"center"}>
                  {fieldsArray?.map((item, index) => {
                    let xs = 12;
                    return (() => {
                      switch (item.control) {
                        case "TextField":
                          return (
                            <Grid item key={item.name + index} xs={xs}>
                              <Field
                                {...item}
                                sx={{ width: "100%" }}
                                component={TextField}
                                name={item.name}
                                type={item.type}
                                label={item.label}
                                size="small"
                              />
                            </Grid>
                          );
                        case "TextField2":
                          return (
                            <Grid item key={item.name + index} xs={xs}>
                              <FastField
                                {...item}
                                sx={{ width: "100%" }}
                                component={TextField}
                                name={item.name}
                                type={item.type}
                                label={item.label}
                                size="small"
                              />
                            </Grid>
                          );
                        case "checkbox":
                          return (
                            <Grid item key={item?.name + index} xs={xs}>
                              <FastField
                                {...item}
                                component={CheckboxWithLabel}
                                type="checkbox"
                                name={item?.name}
                                Label={{ label: item?.label ?? "" }}
                              />
                            </Grid>
                          );
                        case "inputBase":
                          return (
                            <Grid item key={item?.name + index} xs={xs}>
                              <FastField
                                {...item}
                                component={InputBase}
                                name="inputBase"
                              />
                            </Grid>
                          );
                        case "switch":
                          return (
                            <Grid item key={item?.name + index} xs={xs}>
                              <Field
                                {...item}
                                component={Switch}
                                type="checkbox"
                                name={item?.name ?? ""}
                              />
                            </Grid>
                          );
                        case "radioGroup":
                          return (
                            <Grid item key={item?.name + index} xs={xs}>
                              <FormLabel id="demo-radio-buttons-group-label">
                                {item?.label}
                              </FormLabel>
                              <FastField
                                {...item}
                                row={item?.row ?? false}
                                aria-labelledby="demo-radio-buttons-group-label"
                                component={RadioGroup}
                                name={item?.name}>
                                {item?.options?.map((option, index) => (
                                  <FormControlLabel
                                    {...option}
                                    key={`${option?._id}-${index}`}
                                    value={option?._id ?? false}
                                    control={<Radio disabled={isSubmitting} />}
                                    label={option?.label ?? ""}
                                    disabled={isSubmitting}
                                  />
                                ))}
                              </FastField>
                            </Grid>
                          );
                        case "autocomplete":
                          return (
                            <Grid item key={item?.name + index} xs={xs}>
                              <Field
                                {...item}
                                name={item?.name}
                                component={Autocomplete}
                                options={item?.options ?? null}
                                getOptionLabel={(option) => option?.label ?? ""}
                                placeholder={item?.placeholder || ""}
                                // helperText={item?.helperText ?? ""}
                                size="small"
                                style={{ minWidth: 300, maxWidth: "100%" }}
                                renderInput={(params) => (
                                  <MuiTextField
                                    {...params}
                                    name={item?.name}
                                    error={
                                      touched[item?.name] &&
                                      !!errors[item?.name]
                                    }
                                    helperText={errors[item?.name]}
                                    label={item?.label ?? ""}
                                    variant="outlined"
                                    size="small"
                                  />
                                )}
                              />
                            </Grid>
                          );
                        case "button":
                          return (
                            <Grid key={item.label + index} item>
                              <Button
                                {...item}
                                sx={{ width: "100%" }}
                                variant={item.variant || "contained"}
                                type={item.type || "button"}
                                onClick={item.onClick}>
                                {item.label}
                              </Button>
                            </Grid>
                          );
                      }
                    })();
                  })}
                  <Grid item xs={12}>
                    <Grid
                      container
                      spacing={2}
                      justifyContent={SpecialBtn ? "" : "flex-end"}
                      flexDirection={SpecialBtn ? "column-reverse" : "row"}>
                      <Grid item sx={SpecialBtn && { width: "100%" }}>
                        <Button
                          type="button"
                          variant="outlined"
                          sx={SpecialBtn && { width: "100%" }}
                          onClick={handleCancel}>
                          {cancelBtn}
                        </Button>
                      </Grid>
                      <Grid item sx={SpecialBtn && { width: "100%" }}>
                        <Button
                          type="submit"
                          sx={SpecialBtn && { width: "100%" }}
                          variant="contained">
                          {SubmitBtn}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}
