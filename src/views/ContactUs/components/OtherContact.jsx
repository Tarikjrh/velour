import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../../components/Image";

export default function OtherContact() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        background: `linear-gradient(175.81deg, rgba(44, 120, 49, 0.063) 27.37%, rgba(46, 127, 81, 0.112) 96.85%)`,
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        direction="row"
        sx={{ position: "relative" }}
      >
        <Box sx={{ position: "absolute", top: "-100%" }}>
          <Image src="contact_phone.png" />
        </Box>
        <Box sx={{ pl: 20 }}>
          <Typography variant="h4">Other Ways to Reach Us</Typography>
          <Typography variant="h4">
            123 Velour Lane, Beirut, Lebanon. Phone: +961 123 4567 Email:
            info@velouruniforms.com
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
