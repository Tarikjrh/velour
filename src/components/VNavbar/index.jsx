import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Container, Link, Stack } from "@mui/material";
import Iconify from "../iconify";
import { useLocales } from "../../locales";
import NavDrawer from "./components/NavDrawer";

const drawerWidth = 240;

function VNavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const locales = useLocales();
  const { t } = useLocales();

  const navItems = [
    { title: t("nav.about"), path: "about" },
    { title: t("nav.catalog"), path: "catalog" },
    { title: t("nav.contact"), path: "contact" },
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

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 2,
        width: "100%",
        pb: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)", // Background blur
        WebkitBackdropFilter: "blur(10px)", // Safari support
        color: "#fff",
      }}
    >
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            component={Link}
            href="/"
            sx={{ width: { xs: "20%", sm: "80px", md: "84px" } }}
          >
            <img src={"logo2.png"} />
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
                component={Link}
                href={item.path}
                key={item.path}
                sx={{ textTransform: "none" }}
              >
                {item.title}
              </Button>
            ))}
            <Button variant="contained">Order Now</Button>

            <Button
              startIcon={<Iconify icon="mdi:language" />}
              onClick={() =>
                handleChangeLang(
                  locales.currentLang.value === "en" ? "ar" : "en"
                )
              }
            >
              {locales.currentLang.value === "en" ? "عربي" : "English"}
            </Button>
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
          />
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
