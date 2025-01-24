import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Iconify from "../../iconify";
import PropTypes from "prop-types";
import OrderNow from "./Buttons/OrderNow";
import Language from "./Buttons/Language";
import RouterLink from "../../RouterLink";

export default function NavDrawer({
  handleDrawerToggle,
  navItems,
  handleChangeLang,
  locales,
}) {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ backgroundColor: "#1f261e" }}>
        <img src={"/logo.svg"} width={"60%"} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              sx={{ textAlign: "start" }}
              component={RouterLink}
              to={item.path}
            >
              <ListItemIcon>
                <Iconify icon={item.icon} />
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ textTransform: "capitalize" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start" }}>
            <OrderNow />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start" }}>
            <Language handleChangeLang={handleChangeLang} locales={locales} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

NavDrawer.propTypes = {
  handleChangeLang: PropTypes.func.isRequired,
  locales: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};
