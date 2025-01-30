import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/material";
import Iconify from "../iconify";
import { useLocales } from "../../locales";
import NavDrawer from "./components/NavDrawer";
import Language from "./components/Buttons/Language";
import { useLocation } from "react-router";
import RouterLink from "../RouterLink";
import OrderNowDialog from "../OrderNowDialog";

const drawerWidth = 240;

function VNavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const locales = useLocales();
  const { t } = useLocales();
  const location = useLocation();

  const navItems = [
    { title: t("nav.about"), path: "about", icon: "ix:about" },
    { title: t("nav.catalog"), path: "catalog", icon: "ic:baseline-menu-book" },

    {
      title: t("nav.contact"),
      path: "contact",
      icon: "grommet-icons:contact",
    },
  ];

  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleChangeLang = React.useCallback(
    (newLang) => {
      locales.onChangeLang(newLang);
    },
    [locales]
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const landingPage =
    location.pathname === "/" || location.pathname === "/about";

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 20,
        width: "100%",
        pb: 1,
        backgroundColor: landingPage ? "rgba(0, 0, 0, 0.3)" : "#fff",
        backdropFilter: "blur(10px)", // Background blur
        WebkitBackdropFilter: "blur(10px)", // Safari support
        color: landingPage ? "#fff" : "#000",
      }}
    >
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            component={RouterLink}
            href="/"
            sx={{ width: { xs: "20%", sm: "80px", md: "84px" } }}
          >
            <img src={"/logo2.svg"} />
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <Iconify icon="material-symbols:menu" width={24} height={24} />
          </IconButton>
          <Box
            component={Stack}
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {navItems.map((item) => (
              <Button
                component={RouterLink}
                href={item.path}
                key={item.path}
                sx={{ textTransform: "capitalize" }}
              >
                {item.title}
              </Button>
            ))}
            <OrderNowDialog />
            <Language handleChangeLang={handleChangeLang} locales={locales} />
          </Box>
        </Stack>
      </Container>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <NavDrawer
            navItems={navItems}
            handleDrawerToggle={handleDrawerToggle}
            handleChangeLang={handleChangeLang}
            locales={locales}
          >
            <OrderNowDialog />
          </NavDrawer>
          <Box sx={{ px: 2 }}>
            <OrderNowDialog />
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}

VNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default VNavBar;
