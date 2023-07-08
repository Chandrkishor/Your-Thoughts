"use client";

// import React, { useCallback, useContext } from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
// import { useRouter } from "next/navigation";
import MyForm from "@/components/FormBuilder/FormBuilder";
import PopupWrapper from "@/components/FormBuilder/DialogWrapper";
import { Profiler, useContext, useEffect, useState } from "react";
import useAPI from "@/components/GeneralAPICaller";
import { getUserDetails } from "../utils/AppUtils";
import { General } from "../store/GeneralContext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";
import LaunchIcon from "@mui/icons-material/Launch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import profilePic from "./SquireLogo.png";

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
const spanStyle = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: "background 0.3s",
  padding: "2px 15px 2px 0px",
  // "&:hover": {
  //   background: "#ddd",
  //   borderRadius: "10px",
  //   padding: "2px 15px 2px 0px",
  // },
};
const UserProfile = () => {
  const { get } = useAPI();
  // const router = useRouter();
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const user = getUserDetails();
  let { setAlert } = useContext(General);
  const callBackData = (response, type) => {
    console.log(
      "callBackData ~-------- data: >>",
      type,
      "--->",
      response?.data
    );
    if (type) setUserData(response?.data);
  };

  //* to get user detail Data
  useEffect(() => {
    if (user?._id) get(`userDetails/${user?._id}`, callBackData);
  }, []);

  const handleSubmit = (data) => {
    console.log("handleSubmit: >>", data);
    // post("register", data, handleResponse);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Paper sx={{ width: "95%", margin: "auto", p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent={"space-between"}
              direction={"row"}
              alignItems={"center"}>
              <Grid item sx={{ border: "7px solid gray", borderRadius: "50%" }}>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}>
                  <Image
                    src={profilePic}
                    alt="Picture of the user"
                    width={120}
                    height={120}
                  />
                </div>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}>
                  <Grid item>
                    <Button variant="contained"> Follow</Button>
                  </Grid>
                  <Grid item>
                    <IconButton sx={{ p: 0 }}>
                      <MoreHorizIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ textAlign: "center", p: 2 }}>
              {userData?.name ?? ""}
            </Typography>
            <Typography
              variant="body1"
              sx={{ padding: "4px 32px", textAlign: "center" }}>
              {userData?.bio ??
                "--Dummy bio--, Exploring the new tools and techniques on frontend development. Loves to meet up with new people and participate in the community. I do interesting stuff on codepen https://codepen.io/nirazanbasnet"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}>
              <Typography sx={spanStyle}>
                <LocationOnIcon />
                {user.location ?? " N/A"}
              </Typography>
              <Typography sx={spanStyle}>
                <CakeIcon />
                {user.birthday ?? "N/A"}
              </Typography>
              <Typography sx={spanStyle}>
                <IconButton>
                  <EmailIcon />
                </IconButton>
                {user?.email ?? "N/A"}
              </Typography>
              <Typography sx={spanStyle}>
                <IconButton>
                  <LaunchIcon />{" "}
                </IconButton>
                {user.website ?? "www.cktiwari.com"}
              </Typography>
              <Typography sx={spanStyle}>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                Linkedin{" "}
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                Facebook
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            {user.education ?? "-- Education --"}
          </Grid>
        </Grid>
      </Paper>
      <Grid item>
        <PopupWrapper
          open={open}
          handleClose={handleClose}
          maxWidth={"sm"}
          title="User profile">
          <MyForm
            fieldsArray={FormFieldArray}
            onSubmitFun={handleSubmit}
            cancelBtn="cancel"
            SubmitBtn="edit"
            formSize="sm"
            SpecialBtn={true}
            handleCancel={handleClose}
            initialVal={initialVal}
            typeValidation={typeValidation}
          />
        </PopupWrapper>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
