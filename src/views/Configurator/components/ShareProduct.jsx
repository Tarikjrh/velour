import React, { useState } from "react";
import {
  Stack,
  Tooltip,
  IconButton,
  Snackbar,
  Box,
  SnackbarContent,
} from "@mui/material";
import Iconify from "../../../components/iconify";

const ShareProduct = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setSnackbarOpen(true);
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Stack direction={"row"} p={{ md: 2 }}>
      <Box>
        <Tooltip title="Share Link">
          <IconButton onClick={handleShareLink}>
            <Iconify icon="ic:baseline-share" />
          </IconButton>
        </Tooltip>

        {/* <Tooltip title="Download Qr Code">
          <IconButton onClick={() => {}}>
            <Iconify icon="ri:qr-code-fill" />
          </IconButton>
        </Tooltip> */}
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContent
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              Link copied to clipboard!
              <Iconify icon="solar:copy-bold-duotone" />
            </span>
          }
          sx={{
            backgroundColor: "primary.main", // Customize the background color here
            color: "#ffffff", // Customize the text color here
          }}
        />
      </Snackbar>
    </Stack>
  );
};

export default ShareProduct;
