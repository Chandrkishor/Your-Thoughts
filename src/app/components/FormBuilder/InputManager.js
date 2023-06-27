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
import { Formik, Form, Field, FastField } from "formik";
import {
  TextField,
  Autocomplete,
  CheckboxWithLabel,
  InputBase,
  Switch,
  RadioGroup,
} from "formik-mui";
// import TextField from "@mui/material/TextField";
import { TextField as MuiTextField } from "@mui/material";

import * as React from "react";

export default function MyForm({
  fieldsArray = [],
  initialValues = {},
  onSubmitFun = () => {},
  title = null,
  handleCancel = () => {},
  cancelBtn = "",
  SubmitBtn = "",
  formSize = "sm",
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

  const validateForm = (values) => {
    const errors = {};
    // Perform validation for each form field
    if (!values.password) {
      errors.password = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.loginSelectText) {
      errors.loginSelectText = "this field required";
    }
    // Add more validation rules as needed
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={onSubmitFun}>
      {({ submitForm, isSubmitting, errors, touched }) => (
        <Form>
          <Paper sx={{ maxWidth: width, margin: "auto", p: 2 }}>
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
                <Grid container spacing={2} sx={{ width: "100%" }}>
                  {fieldsArray?.map((item, index) => {
                    let xs = 12;
                    return (() => {
                      switch (item.control) {
                        case "TextField":
                          return (
                            <Grid item key={item.name + index} xs={xs}>
                              <Field
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
                                component={InputBase}
                                name="inputBase"
                              />
                            </Grid>
                          );
                        case "switch":
                          return (
                            <Grid item key={item?.name + index} xs={xs}>
                              <Field
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
                                row={item?.row ?? false}
                                aria-labelledby="demo-radio-buttons-group-label"
                                component={RadioGroup}
                                name={item?.name}>
                                {item?.options?.map((option, index) => (
                                  <FormControlLabel
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
                  {}{" "}
                  <Grid item xs={12}>
                    <Grid container spacing={2} justifyContent="flex-end">
                      <Grid item>
                        <Button
                          type="button"
                          variant="outlined"
                          onClick={handleCancel}>
                          {cancelBtn}
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button type="submit" variant="contained">
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
