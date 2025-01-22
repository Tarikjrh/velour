import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../../components/Image";

export default function WhyVelour() {
  return (
    <Box sx={{ position: "relative" }}>
      <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={3}>
        <Stack
          spacing={3}
          direction={"column"}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ pl: { xs: 2, md: 20 } }}
        >
          <Typography variant="why_velour_title">
            {" "}
            Why choose velour?
          </Typography>
          <Typography variant="why_velour_description" sx={{ maxWidth: "80%" }}>
            With over 10 years of experience, we offer unparalleled quality and
            sustainable fabrics, trusted by over 100 clients worldwide.
          </Typography>
          <Button variant="contained">Contact Us</Button>
        </Stack>
        <Box
          sx={{
            height: "100%",
            width: { xs: "100%", md: "100%", lg: "70%" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image
            src="/why_contact.png"
            sx={{
              width: { xs: "100%", md: "80%" },
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
            ratio="3/4"
          />
        </Box>
      </Stack>
    </Box>
  );
}
