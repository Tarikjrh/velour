// i18n
import "./locales/i18n";

import { Box } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import Router from "./routes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "simplebar-react/dist/simplebar.min.css";

// image
import "react-lazy-load-image-component/src/effects/blur.css";
import { SettingsProvider } from "./components/settings/context/settings-provider";
import ThemeProvider from "./theme";
import MotionLazy from "./components/animate/motion-lazy";

export default function App() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <SettingsProvider
        defaultSettings={{
          themeMode: "light",
          themeDirection: "ltr",
          themeContrast: "default",
          themeLayout: "vertical",
          themeColorPresets: "default",
          themeStretch: false,
        }}
      >
        <ThemeProvider>
          <MotionLazy>
            <Router />
          </MotionLazy>
        </ThemeProvider>

        <Analytics />
      </SettingsProvider>
    </Box>
  );
}
