import AboutTitle from "./sections/AboutTitle";
import { Box } from "@mui/material";
import WhoAreWe from "./sections/WhoAreWe";
import ApartSection from "./sections/ApartSection";
import Process from "./sections/Process";

export default function AboutUs() {
  return (
    <Box>
      <AboutTitle />
      <WhoAreWe />
      <ApartSection />
      <Process />
    </Box>
  );
}
