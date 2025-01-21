import React, { useState } from "react";
import { Stack, Tooltip, IconButton, Snackbar, Box } from "@mui/material";
// import { saveAs } from "file-saver";
import Iconify from "../../../components/iconify";
// import QRCode from "qrcode";

const ShareProduct = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setSnackbarOpen(true);
    });
  };

  //   const handleDownloadQrCode = () => {
  //     const url = window.location.href;
  //     QRCode.toDataURL(url, { width: 300, margin: 2 }, (err, url) => {
  //       if (err) return console.error(err);
  //       saveAs(url, "qrcode.png");
  //     });
  //   };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack direction={"row"} p={2}>
      <Box>
        <Tooltip title="Share Link">
          <IconButton onClick={handleShareLink}>
            <Iconify icon="ic:baseline-share" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Download Qr Code">
          <IconButton onClick={() => {}}>
            <Iconify icon="ri:qr-code-fill" />
          </IconButton>
        </Tooltip>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Link copied to clipboard!"
      />
    </Stack>
  );
};

export default ShareProduct;
