import { Box } from "@mui/material";
import VNavbar from "./components/VNavbar";
import Configurator from "./views/Configurator";

export default function App() {
  return (
    <Box>
      <VNavbar />
      <Configurator />
    </Box>
  );
}
