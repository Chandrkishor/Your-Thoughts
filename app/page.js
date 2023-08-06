"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { General } from "./store/GeneralContext";
import MyFeed from "@/components/HomePageComponents/Myfeed";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import AddPost from "@/components/AddPost/page";
import PopupWrapper from "@/components/FormBuilder/DialogWrapper";

export default function Home() {
  let { setAlert, setIsAddOpen, isAddOpen } = useContext(General);
  const [open, setOpen] = useState(false);
  // const [userData, setUserData] = useState({});
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClose = useCallback(() => {
    setIsAddOpen(false);
  }, []);

  return (
    <>
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
          Most upvoted
        </TabPanel>
        <TabPanel value={value} index={3}>
          Best discussions
        </TabPanel>
      </Box>
      <PopupWrapper
        open={isAddOpen}
        handleClose={handleClose}
        maxWidth={"md"}
        title={"Add New Post "}>
        <AddPost />
      </PopupWrapper>
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
