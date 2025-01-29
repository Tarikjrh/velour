import { Box, Container, Typography } from "@mui/material";
import Image from "../../../components/Image";

export default function WhoAreWe() {
  return (
    <Box>
      <Container
        sx={{ textAlign: "center", maxWidth: { md: "70%" }, mt: 5, mb: 5 }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Our Story
        </Typography>

        <Typography variant="why_velour_description">
          At Velour, we blend tradition with modern craftsmanship to deliver
          high-quality uniforms that redefine professional elegance. Our journey
          started with a passion for impeccable tailoring and has grown into a
          trusted brand known for excellence.
        </Typography>
      </Container>
      <Container>
        <Image src="/our_story.png" alt="Who are we" sx={{}} />
      </Container>
    </Box>
  );
}
