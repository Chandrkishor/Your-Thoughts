"use client";
import { Button, Divider, Grid, Paper } from "@mui/material";
import { Formik, Form, Field, FastField } from "formik";
import { TextField } from "formik-mui";
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
    // Add more validation rules as needed
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={onSubmitFun}>
      {({ submitForm, isSubmitting }) => (
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