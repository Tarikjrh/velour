import { Stack } from "@mui/material";
import Strengths from "./components/Strengths";
import CarouselHero from "./components/CarouselHero";
import Customization from "./components/Customization";
import UniformsGrid from "./components/UniformsGrid";
// import Milestones from "./components/Milestones";
import WhyVelour from "./components/WhyVelour";
import Showcase from "./components/Showcase";
import carousel_data from "./utils/carousel_data";

export default function LandingPage() {
  return (
    <Stack spacing={5} sx={{}}>
      <CarouselHero data={carousel_data} />

      <Strengths />
      <Customization />
      <UniformsGrid />
      {/* <Milestones /> */}
      <WhyVelour />
      <Showcase />
    </Stack>
  );
}
