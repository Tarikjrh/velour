import React from "react";
import AboutTitle from "./AboutTitle";
import { Box } from "@mui/material";
import WhoAreWe from "./WhoAreWe";
import ApartSection from "./ApartSection";
import Process from "./Process";

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
