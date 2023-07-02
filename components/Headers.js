"use client";

import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MicIcon from "@mui/icons-material/Mic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
// import { cookies } from "next/headers";

const Headers = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  // console.log(document.cookie);

  const navigateTo = (path) => {
    setOpenDrawer(false);
  };

  const renderMenuItems = () => {
    return (
      <List>
        <Link href="/">
          <ListItem component={Button} onClick={navigateTo}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/posts">
          <ListItem component={Button} onClick={navigateTo}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItem>
        </Link>
        <Link href="/videos">
          <ListItem component={Button} onClick={navigateTo}>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItem>
        </Link>
        <ListItem component={Button} onClick={navigateTo}>
          <ListItemIcon>
            <MicIcon />
          </ListItemIcon>
          <ListItemText primary="Podcast" />
        </ListItem>
      </List>
    );
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Your Thoughts
            </Link>
          </Typography>

          <Link
            href="/login"
            style={{ color: "inherit", textDecoration: "none" }}>
            <Button
              color="inherit"
              startIcon={<AccountCircleIcon />}
              onClick={navigateTo}>
              Login
            </Button>
          </Link>
          <Link
            href="/sign_up"
            style={{ color: "inherit", textDecoration: "none" }}>
            <Button
              color="inherit"
              startIcon={<AccountCircleIcon />}
              onClick={navigateTo}>
              sign up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerToggle}>
        {renderMenuItems()}
      </Drawer>
    </div>
  );
};

export default Headers;
