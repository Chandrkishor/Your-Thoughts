"use client";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useState } from "react";
import { General } from "@/app/store/GeneralContext";
import { saveCookies } from "@/app/utils/AppUtils";
import { API_BASEPATH } from "@/app/utils/Constant";
import logo from "../../app/assets/highLightLogo.png";
import Image from "next/image";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light", // Set the mode to "light"
    primary: {
      main: "#f50057", // Customize the primary color
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const router = useRouter();
  let { isLogin, setIsLogin, setAlert, setIsAddOpen } = useContext(General);

  const handleLogout = useCallback(() => {
    sessionStorage.clear();
    saveCookies("access_Token", null);
    router.push("/login");
    setAlert({
      open: true,
      message: "Successfully logged out",
      severity: "success",
    });
    setAnchorEl(null);
    setIsLogin(false);
    setMobileMoreAnchorEl(null);
  }, []);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleRoute = (val) => {
    setAnchorEl(null);
    handleMobileMenuClose();
    router.push(`/${val}`);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ mr: 2 }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={() => handleRoute("profile")}>Profile</MenuItem>
      <MenuItem
        onClick={() => {
          setIsAddOpen(true);
          handleMenuClose();
        }}>
        <AddCircleOutlineOutlinedIcon sx={{ color: "#63ff63" }} />
        <span style={{ marginLeft: 5 }}> Add Post</span>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <LogoutIcon sx={{ color: "#ff6161" }} />
        <span style={{ marginLeft: 5 }}>Log out</span>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      {isLogin ? (
        <>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </>
      ) : (
        <Stack direction="column" spacing={1}>
          <Link
            href="/login"
            style={{ color: "inherit", textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{ width: "100%" }}
              startIcon={<AccountCircleIcon />}
              // onClick={navigateTo}
            >
              Login
            </Button>
          </Link>
          <Link
            href="/sign_up"
            style={{ color: "inherit", textDecoration: "none" }}>
            <Button
              sx={{ width: "100%" }}
              color="inherit"
              startIcon={<AccountCircleIcon />}
              // onClick={navigateTo}
            >
              sign up
            </Button>
          </Link>
        </Stack>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            {/* //* for logo */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              // href="/"
              onClick={() => router.push(`${API_BASEPATH}`)}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              <IconButton sx={{ p: 0 }}>
                <Image
                  alt="Remy Sharp"
                  src={logo}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                  }}
                />
              </IconButton>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => router.push(`${API_BASEPATH}`)}
              // variant="text"
              sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}>
              Your Thoughts
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            {isLogin ? (
              <>
                {/* //* icons */}
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit">
                    <Badge badgeContent={4} color="error">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit">
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit">
                    <AccountCircle />
                  </IconButton>
                </Box>
                {/* //* profile  */}
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit">
                    <MoreIcon />
                  </IconButton>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Link
                    href="/login"
                    style={{ color: "inherit", textDecoration: "none" }}>
                    <Button
                      color="inherit"
                      startIcon={<AccountCircleIcon />}
                      // onClick={navigateTo}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link
                    href="/sign_up"
                    style={{ color: "inherit", textDecoration: "none" }}>
                    <Button
                      color="inherit"
                      startIcon={<AccountCircleIcon />}
                      // onClick={navigateTo}
                    >
                      sign up
                    </Button>
                  </Link>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit">
                    <MoreIcon />
                  </IconButton>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </ThemeProvider>
    </Box>
  );
}
