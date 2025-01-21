import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";
import React from "react";
import Image from "../../../components/Image";
import Iconify from "../../../components/iconify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SizeGuide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          size="small"
          sx={{ textDecoration: "underline" }}
          onClick={handleClickOpen}
        >
          Size guide
        </Button>
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Find Your Perfect Fit"}{" "}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <Iconify icon="si:close-duotone" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Image src="/size_guide.png" alt="Size Guide" />
        </DialogContent>
        <DialogActions />
      </Dialog>
    </>
  );
}
