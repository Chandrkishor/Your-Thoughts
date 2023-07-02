import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, Snackbar, styled } from "@mui/material";

const StyledSnackbar = styled(Snackbar)(({ theme, severity }) => ({
  "& .MuiSnackbarContent-root": {
    backgroundColor:
      severity === "error"
        ? theme.palette.error.main
        : theme.palette.success.main,
    color: theme.palette.getContrastText(
      severity === "error"
        ? theme.palette.error.main
        : theme.palette.success.main
    ),
    boxShadow: theme.shadows[4],
    border: `1px solid ${
      severity === "error"
        ? theme.palette.error.main
        : theme.palette.success.main
    }`,
  },
}));

const SetAlertComponent = ({ open, message, severity }) => {
  const [alert, setAlert] = useState({
    open: false,
    message: undefined,
    severity: "success",
    vertical: "top",
    horizontal: "right",
  });

  useEffect(() => {
    setAlert((prev) => ({
      ...prev,
      open: open,
      message: message,
      severity: severity,
    }));
  }, [open, message, severity]);

  const handleClose = () => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <StyledSnackbar
      key={alert.open || alert.message || alert.severity}
      open={alert.open}
      autoHideDuration={4000}
      anchorOrigin={{
        vertical: alert.vertical,
        horizontal: alert.horizontal,
      }}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          onClick={handleClose}
          size="small">
          <ClearIcon fontSize="small" />
        </IconButton>
      }
      onClose={handleClose}
      message={alert.message}
      severity={alert.severity}
    />
  );
};

export default SetAlertComponent;
