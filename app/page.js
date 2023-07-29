"use client";

import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { General } from "./store/GeneralContext";
import MyFeed from "@/components/HomePageComponents/Myfeed";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";

export default function Home() {
  let { setAlert } = useContext(General);
  const [open, setOpen] = useState(false);
  // const [userData, setUserData] = useState({});
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Paper> */}
      <Card>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{ p: "8px 20px", alignItems: "center" }}>
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={{ textTransform: "capitalize" }}>
              Your feed
            </Typography>
          </Grid>

          <Grid item>
            <Button variant="contained"> test</Button>
          </Grid>
        </Grid>
      </Card>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#eee",
          display: "flex",
        }}>
        <Tabs
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
            height: "100%",
            overflow: "auto",
          }}>
          <Tab
            icon={<PortraitOutlinedIcon sx={{ fontSize: "20px" }} />}
            iconPosition="start"
            label="My feed"
            {...a11yProps(0)}
            sx={{
              justifyContent: "flex-start",
            }}
          />
          <Tab
            icon={<WhatshotOutlinedIcon sx={{ fontSize: "20px" }} />}
            iconPosition="start"
            label="Popular"
            {...a11yProps(1)}
            sx={{
              justifyContent: "flex-start",
            }}
          />
          <Tab
            icon={<ThumbUpOutlinedIcon sx={{ fontSize: "20px" }} />}
            iconPosition="start"
            label="Most upvoted"
            {...a11yProps(2)}
            sx={{
              justifyContent: "flex-start",
            }}
          />
          <Tab
            icon={<QuestionAnswerOutlinedIcon sx={{ fontSize: "20px" }} />}
            iconPosition="start"
            label="best discussions"
            {...a11yProps(3)}
            sx={{
              justifyContent: "flex-start",
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <MyFeed />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Popular
        </TabPanel>
        <TabPanel value={value} index={2}>
          MOst upvoted
        </TabPanel>
        <TabPanel value={value} index={3}>
          Best discussions
        </TabPanel>
      </Box>
      {/* </Paper> */}
      {/* <PopupWrapper
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
      </PopupWrapper> */}
    </>
  );
}

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
            maxHeight: "85vh",
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
