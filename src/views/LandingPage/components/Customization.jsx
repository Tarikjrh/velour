import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "../../../components/Image";

export default function Customization() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image src="/customization_bg.png" ratio="16/9" />
      <Container
        sx={{
          position: "absolute",
          bottom: 10,
          height: "90%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "#fff", maxWidth: "60%", fontWeight: "medium" }}
        >
          Customizable, durable
          <br /> uniforms for every <br />
          industry.
        </Typography>
      </Container>
    </Box>
  );
}
