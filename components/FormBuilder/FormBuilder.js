"use client";
import {
  Button,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
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
  borderAndShadow = false,
}) {
  const [showPass, setShowPass] = useState(false);

  let width = "600px";
  switch (formSize) {
    case "xs":
      width = true;
      break;
    case "sm":
      width = "550px";
      break;
    case "md":
      width = "850px";
      break;
    case "lg":
      width = "1150px";
      break;
  }

  const handleClickShowPassword = () => {
    setShowPass((prev) => !prev);
  };

  const handleMouseDownPassword = () => {
    setShowPass(false);
  };
  return (
    <Formik
      initialValues={initialVal ?? {}}
      validationSchema={validator(typeValidation)}
      onSubmit={onSubmitFun}>
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Paper
            id="---------paper-------"
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
                    boxShadow: borderAndShadow ? "none" : "",
                    p: borderAndShadow ? "0" : 2,
                  }
            }>
            <Grid container sx={{ width: "100%" }}>
              {title && (
                <Grid item xs={12} container justifyContent={"center"}>
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
                  sx={{
                    maxWidth: "100%",
                    // width: `calc(${width} - 50px)`,
                  }}

                  // justifyContent={"center"}
                >
                  {fieldsArray?.map((item, index) => {
                    // let xs = 12;
                    const { size, ...rest } = item ?? {};
                    const { xs = 12, sm = 12, md = 12, lg = 6 } = size ?? {};
                    return (() => {
                      switch (rest.control) {
                        case "TextField":
                          return (
                            <Grid
                              item
                              key={rest?.name + index}
                              xs={xs}
                              sm={sm}
                              md={md}
                              lg={lg}>
                              <Field
                                {...item}
                                sx={{ width: "100%" }}
                                component={TextField}
                                name={rest?.name}
                                // type={rest?.type}
                                type={showPass ? "text" : item?.type}
                                label={rest?.label}
                                size="small"
                                InputProps={
                                  rest?.type === "password" && {
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end">
                                          {showPass ? (
                                            <VisibilityOffIcon />
                                          ) : (
                                            <VisibilityIcon />
                                          )}
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }
                                }
                              />
                            </Grid>
                          );
                        case "TextField2":
                          return (
                            <Grid
                              item
                              key={rest?.name + index}
                              xs={xs}
                              sm={sm}
                              md={md}
                              lg={lg}>
                              <FastField
                                {...item}
                                sx={{ width: "100%" }}
                                component={TextField}
                                name={item?.name}
                                type={showPass ? "text" : item?.type}
                                label={item?.label}
                                size="small"
                              />
                            </Grid>
                          );
                        case "checkbox":
                          return (
                            <Grid
                              item
                              key={item?.name + index}
                              xs={xs}
                              sm={sm}
                              md={md}
                              lg={lg}>
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
                            <Grid
                              item
                              key={item?.name + index}
                              xs={xs}
                              sm={sm}
                              md={md}
                              lg={lg}>
                              <FastField
                                {...item}
                                component={InputBase}
                                name="inputBase"
                              />
                            </Grid>
                          );
                        case "switch":
                          return (
                            <Grid
                              item
                              key={item?.name + index}
                              xs={xs}
                              sm={sm}
                              md={md}
                              lg={lg}>
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
                            <Grid
                              item
                              key={item?.name + index}
                              xs={xs}
                              sm={sm}
                              md={md}
                              lg={lg}>
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
                                    control={
                                      <Radio
                                      // disabled={isSubmitting}
                                      />
                                    }
                                    label={option?.label ?? ""}
                                    // disabled={isSubmitting}
                                  />
                                ))}
                              </FastField>
                            </Grid>
                          );
                        case "autocomplete":
                          return (
                            <Grid
                              item
                              key={item?.name + index}
                              xs={xs}
                              sm={sm}
                              md={md}
                              lg={lg}>
                              <Field
                                {...item}
                                name={item?.name}
                                component={Autocomplete}
                                options={item?.options ?? null}
                                getOptionLabel={(option) => option?.label ?? ""}
                                placeholder={item?.placeholder || ""}
                                // helperText={item?.helperText ?? ""}
                                size="small"
                                style={{ minWidth: 120, maxWidth: "100%" }}
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
                            <Grid key={rest?.label + index} item>
                              <Button
                                // {...item}
                                sx={{ width: "100%" }}
                                variant={rest?.variant || "contained"}
                                type={rest?.type || "button"}
                                onClick={rest?.onClick}>
                                {rest?.label}
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
                      <Grid item sx={SpecialBtn ? { width: "100%" } : {}}>
                        <Button
                          type="button"
                          variant="outlined"
                          sx={SpecialBtn ? { width: "100%" } : {}}
                          onClick={handleCancel}>
                          {cancelBtn}
                        </Button>
                      </Grid>
                      <Grid item sx={SpecialBtn ? { width: "100%" } : {}}>
                        <Button
                          type="submit"
                          sx={SpecialBtn ? { width: "100%" } : {}}
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
