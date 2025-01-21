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
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image src="/customization_bg.png" ratio="16/9" />
      </Box>
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
          sx={{
            color: "#fff",
            maxWidth: { md: "60%" },
            fontWeight: "medium",
            lineHeight: "1",
          }}
        >
          Customizable, durable
          <br /> uniforms for every <br />
          industry.
        </Typography>
      </Container>
    </Box>
  );
}
