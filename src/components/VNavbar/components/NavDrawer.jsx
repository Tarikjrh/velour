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

export default function NavDrawer({ handleDrawerToggle, navItems }) {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ backgroundColor: "#242824" }}>
        <img src={"logo.png"} width={"60%"} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemIcon>
                <Iconify icon="solar:bookmark-bold-duotone" />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

// propstypes
NavDrawer.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};
