import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";
import ContactForm from "../ContactForm";
import Iconify from "../iconify";
import CloseIcon from "@mui/icons-material/Close";

const OrderNowDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        startIcon={<Iconify icon="heroicons:shopping-bag" />}
      >
        Order Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        keepMounted
      >
        <DialogTitle>
          Send Us a Message
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
            <CloseIcon />
          </IconButton>
          <Typography sx={{ mt: 2 }}>
            Let us know how we can help or when you need your uniforms by.
          </Typography>
        </DialogTitle>
        <DialogContent>
          <ContactForm onSubmit={onSubmit} sx={{ px: 0 }} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default OrderNowDialog;
