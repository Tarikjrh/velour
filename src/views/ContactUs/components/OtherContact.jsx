import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Image from "../../../components/Image";
import { useLocales } from "../../../locales";

export default function OtherContact() {
  const { direction: themeDirection } = useTheme();
  console.log("🚀 ~ OtherContact ~ theme:", themeDirection);
  return (
    <Box
      sx={{
        minHeight: "80vh",
        background: `linear-gradient(175.81deg, rgba(44, 120, 49, 0.063) 27.37%, rgba(46, 127, 81, 0.112) 96.85%)`,
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        <Box sx={{ width: "100%" }}>
          <Image
            src="contact_phone.png"
            style={{ transform: themeDirection == "ltr" ? null : "scaleX(-1)" }}
          />
        </Box>
        <Box sx={{ pl: { xs: 4, md: 10 } }}>
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
