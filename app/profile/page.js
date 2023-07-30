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
  Tabs,
  Tab,
  Box,
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
import ArticleIcon from "@mui/icons-material/Article";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Image from "next/image";
import profilePic from "./SquireLogo.png";
import UserPosts from "./tabs/userPosts";

const FormFieldArray = [
  {
    control: "TextField2",
    name: "name",
    type: "text",
    label: "Full Name",
    size: { sm: 12, md: 12, lg: 6 },
  },

  {
    control: "TextField2",
    name: "dob",
    type: "date",
    label: "DOB",
    size: { sm: 12, md: 12, lg: 6 },
  },
  {
    control: "TextField2",
    name: "bio",
    type: "text",
    label: "Your Bio",
    multiline: true,
    minRows: 2,
    maxRows: 4,
    size: { sm: 12, md: 12, lg: 12 },
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
    // size: { sm: 12, md: 12, lg: 6 },
  },
  {
    control: "TextField2",
    name: "contact",
    type: "number",
    label: "Contact No",
    size: { sm: 12, md: 12, lg: 6 },
  },
  {
    control: "TextField2",
    name: "address",
    type: "text",
    label: "Address",
    size: { sm: 12, md: 12, lg: 6 },
  },
  {
    control: "TextField2",
    name: "website",
    type: "text",
    label: "website",
    size: { sm: 12, md: 12, lg: 6 },
  },
  {
    control: "TextField2",
    name: "linkedin",
    type: "text",
    label: "Linkedin URL",
    size: { sm: 12, md: 12, lg: 6 },
  },
];

const typeValidation = [
  { name: "name", type: "name" },
  // { name: "bio", type: "textareaField" },
  { name: "dob", type: "dob" },
  // { name: "contact", type: "phoneNumber" },
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
  const { get, put } = useAPI();
  // const router = useRouter();
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [value, setValue] = useState(0);
  const [initialVal, setInitialVal] = useState({
    name: "",
    bio: "",
    dob: "",
    gender: [],
    contact: "",
    address: "",
    website: "",
    linkedin: "",
    image: "",
  });
  const user = getUserDetails();
  let { setAlert } = useContext(General);
  const callBackData = (response, type) => {
    if (type) setUserData(response?.data);
  };

  //* to get user detail Data
  useEffect(() => {
    if (user?._id) get(`userDetails/${user?._id}`, callBackData);
  }, []);

  useEffect(() => {
    if (Object.keys(userData ?? {}).length) {
      const { name, bio, dob, gender, contact, address, website, linkedin } =
        userData;
      setInitialVal({
        name: name,
        dob: dob ?? "",
        bio: bio ?? "",
        gender: gender ?? null,
        contact: contact ?? "",
        address: address ?? "",
        website: website ?? "",
        linkedin: linkedin ?? "",
      });
    }
  }, [userData]);

  const handleUpdate = (response, resType) => {
    if (!resType) {
      setAlert(() => ({
        open: true,
        message: response?.data?.message || "",
        severity: "error",
      }));
      return;
    }

    let user = response.data?.user;
    user && setItemSession("userDetails", user);
    setAlert(() => ({
      open: true,
      message: "Data Updated successfully",
      severity: "success",
    }));
    get(`userDetails/${user?._id}`, callBackData);
    setOpen(false);
  };

  const handleSubmit = (data) => {
    const { dob, ...rest } = data;
    let val = data;
    let formattedDate = null;
    if (dob) {
      const date = new Date(dob);
      formattedDate = date.toLocaleDateString(date);
      val = { ...rest, dob: formattedDate };
    }
    put(`userDetails/${user?._id}`, val, handleUpdate);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper sx={{ width: "95%", margin: "auto", p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent={"space-between"}
              direction={"row"}
              alignItems={"center"}>
              <Grid
                item
                sx={{
                  border: "7px solid gray",
                  borderRadius: "50%",
                  ml: "20px",
                }}>
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
                    {userData?.isAdmin ? (
                      <Button variant="contained" onClick={() => setOpen(true)}>
                        Update profile
                      </Button>
                    ) : (
                      <Button variant="contained"> Follow</Button>
                    )}
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
              {userData?.bio ?? "--Dummy bio--"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}>
              <Typography sx={spanStyle}>
                <LocationOnIcon sx={{ mr: 0.5 }} />
                {userData?.address ?? " N/A"}
              </Typography>
              <Typography sx={spanStyle}>
                <CakeIcon sx={{ mr: 0.5 }} />
                {userData?.dob ?? "N/A"}
              </Typography>
              <Typography sx={spanStyle}>
                <IconButton>
                  <EmailIcon sx={{ mr: 0.5 }} />
                </IconButton>
                {userData?.email ?? "N/A"}
              </Typography>
              <Typography sx={spanStyle}>
                <IconButton>
                  <LaunchIcon sx={{ mr: 0.5 }} />
                </IconButton>
                {userData?.website ?? "N/A"}
              </Typography>
              <Typography sx={spanStyle}>
                <IconButton>
                  <LinkedInIcon sx={{ mr: 0.5 }} />
                </IconButton>
                Linkedin
                <IconButton>
                  <FacebookIcon sx={{ mr: 0.5 }} />
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
      {/* //* ******************---------------after normal details------********** */}
      <Paper sx={{ width: "95%", margin: "auto", p: 2, mt: 2, mb: "50px" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "#eee",
              display: "flex",
            }}>
            <Tabs
              id="-----"
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                bgcolor: "background.paper",
                borderRight: 1,
                borderColor: "divider",
                minWidth: "200px",
                height: "70vh",
                overflow: "auto",
              }}>
              <Tab
                icon={<ArticleIcon sx={{ fontSize: "20px" }} />}
                iconPosition="start"
                label="User Posts"
                {...a11yProps(0)}
                sx={{
                  justifyContent: "flex-start", // Align content to the start
                }}
              />
              <Tab
                icon={<MilitaryTechIcon sx={{ fontSize: "20px" }} />}
                iconPosition="start"
                label="User Badges"
                {...a11yProps(1)}
                sx={{
                  justifyContent: "flex-start", // Align content to the start
                }}
              />
              <Tab
                icon={<LocalOfferIcon sx={{ fontSize: "20px" }} />}
                iconPosition="start"
                label="Tags"
                {...a11yProps(2)}
                sx={{
                  justifyContent: "flex-start",
                }}
              />
              <Tab
                icon={<ArticleIcon sx={{ fontSize: "20px" }} />}
                iconPosition="start"
                label="Item Four"
                {...a11yProps(3)}
                sx={{
                  justifyContent: "flex-start", // Align content to the start
                }}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <UserPosts />
            </TabPanel>
            <TabPanel value={value} index={1}>
              User Batches
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
          </Box>
        </Grid>
      </Paper>
      <PopupWrapper
        open={open}
        handleClose={handleClose}
        maxWidth={"md"}
        title={"Update Profile For : " + userData.email}
        sx={{ display: "flex", justifyContent: "center" }}>
        <MyForm
          fieldsArray={FormFieldArray}
          onSubmitFun={handleSubmit}
          cancelBtn="cancel"
          SubmitBtn="Update"
          formSize="md"
          // SpecialBtn={true}
          borderAndShadow={true}
          handleCancel={handleClose}
          initialVal={initialVal}
          typeValidation={typeValidation}
        />
      </PopupWrapper>
    </>
  );
};

export default UserProfile;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box
          sx={{
            p: 1,
            maxHeight: "70vh",
            overflow: "auto",
          }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
