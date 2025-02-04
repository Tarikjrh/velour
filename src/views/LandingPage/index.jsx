import { Stack } from "@mui/material";
import Strengths from "./sections/Strengths";
import CarouselHero from "./sections/CarouselHero";
import Customization from "./sections/Customization";
import UniformsGrid from "./sections/UniformsGrid";
import WhyVelour from "./sections/WhyVelour";
import Showcase from "./sections/Showcase";
import carousel_data from "./utils/carousel_data";
import NotFoundProduct from "../../components/NotFoundProduct";

export default function LandingPage() {
  return (
    <Stack spacing={5} sx={{}}>
      <CarouselHero data={carousel_data} />

      <Strengths />
      <Customization />
      <UniformsGrid />
      <NotFoundProduct />
      <WhyVelour />
      <Showcase />
    </Stack>
  );
}
