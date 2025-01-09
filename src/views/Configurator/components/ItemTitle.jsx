import { Box, Typography } from "@mui/material";
import React from "react";

export default function ItemTitle({ text, sx }) {
  return (
    <Box
      sx={{
        backgroundColor: "#242824",
        width: "100VW",
        borderRadius: "12px",
        ...sx,
      }}
    >
      <Typography
        component={"h1"}
        variant="h2"
        sx={{
          p: 2,
          fontFamily: "Abril Fatface",
          // fontSize: "48px",
          color: "#ECDFCB",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
