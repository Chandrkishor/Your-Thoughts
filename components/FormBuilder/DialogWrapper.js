"use client";
import Dialog from "@mui/material/Dialog";
// import Button from "@mui/material/Button";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";

export default function PopupWrapper({
  open,
  handleClose,
  maxWidth = "md",
  title = "",
  children,
  // ...props
}) {
  const fullScreen = useMediaQuery("(max-width: 700px)"); // Replace with your desired media query

  return (
    <Dialog
      fullWidth={fullScreen}
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 20px",
        }}>
        {title}
        <IconButton aria-label="Close" onClick={handleClose} color="error">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent
        sx={{
          padding: -1,
        }}>
        {/* <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText> */}
        {children}
      </DialogContent>
      {/* <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
    </Dialog>
  );
}
