import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Container, Link, ListItemIcon, Stack } from "@mui/material";
import Iconify from "../iconify";
import { useLocales } from "../../locales";

const drawerWidth = 240;

function VNavBar(props) {
  const locales = useLocales();
  const { t } = useLocales();

  const navItems = [t("nav.about"), "Catalog", "Contact"];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleChangeLang = React.useCallback(
    (newLang) => {
      locales.onChangeLang(newLang);
    },
    [locales]
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ backgroundColor: "#242824" }}>
        <img src={"logo.png"} width={"60%"} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemIcon>
                <Iconify icon="solar:bookmark-bold-duotone" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            component={Link}
            href="/"
            sx={{ width: { xs: "20%", md: "84px" } }}
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
                href={item}
                key={item}
                sx={{ color: "#000", textTransform: "none" }}
              >
                {item}
              </Button>
            ))}
            <Button variant="contained" sx={{ backgroundColor: "#1E1E1E" }}>
              Order Now
            </Button>

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
          {drawer}
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
