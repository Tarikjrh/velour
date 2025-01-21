import React, { Suspense } from "react";
import VNavBar from "../components/VNavbar";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";
import { Box } from "@mui/material";

export default function SimpleLayout({ children, noPaddingTop }) {
  return (
    <>
      <VNavBar />

      <Suspense fallback={<SplashScreen />}>
        <Box sx={{ pt: noPaddingTop ? 15 : 0 }}>{children}</Box>
      </Suspense>
      <Footer />
    </>
  );
}
