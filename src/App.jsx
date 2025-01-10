import { Box } from "@mui/material";
import VNavbar from "./components/VNavbar";
import Configurator from "./views/Configurator";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <Box>
      <VNavbar />
      <Configurator />
      <Analytics />
    </Box>
  );
}
