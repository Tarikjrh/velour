import { Box, Stack, Typography } from "@mui/material";
import Image from "../Image";

export default function NotFoundProduct() {
  return (
    <Box sx={{ width: "100vw", position: "relative" }}>
      <Image
        src="/magnifier.png"
        sx={{ width: "100%", height: { xs: "300px", sm: "200px", md: "100%" } }}
      />
      <Stack
        spacing={2}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "#fff",
          width: { md: "80%" },
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 0 },
        }}
      >
        <Typography variant="h4">
          Can't find what you're looking for?
        </Typography>
        <Typography variant="body1" sx={{ width: { md: "80%" } }}>
          If the item you're after isn't featured in our catalog, don't hesitate
          to reach out! Contact us, and we'll work with you to find the perfect
          solution. Your satisfaction is our priority, and we're here to help
          bring your vision to life.
        </Typography>
      </Stack>
    </Box>
  );
}
