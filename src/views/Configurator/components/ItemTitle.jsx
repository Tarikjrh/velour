import { Box, Typography } from "@mui/material";

export default function ItemTitle({ text, sx }) {
  return (
    <Box
      sx={{
        backgroundColor: "#1F261E",
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
          fontWeight: "regular",
          color: "#fff",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
