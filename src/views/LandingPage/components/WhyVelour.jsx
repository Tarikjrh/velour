import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../../../components/Image";

export default function WhyVelour() {
  return (
    <Box sx={{ position: "relative" }}>
      <Stack direction={"row"}>
        <Stack
          spacing={3}
          direction={"column"}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ pl: 20 }}
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
            width: "70%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image src="/why_contact.png" sx={{ width: "80%" }} ratio="3/4" />
        </Box>
      </Stack>
    </Box>
  );
}
