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
import { useLocales } from "../../locales";

const OrderNowDialog = () => {
  const { t } = useLocales();

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
        {t("nav.order_now")}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        keepMounted
      >
        <DialogTitle>
          {t("contact.send_us_a_message")}
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
          <Typography sx={{ mt: 2 }}>{t("contact.description")}</Typography>
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
