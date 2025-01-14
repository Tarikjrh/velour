import { Box } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import Router from "./routes";

export default function App() {
  return (
    <Box>
      <Router />
      <Analytics />
    </Box>
  );
}
