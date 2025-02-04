import { Fab, Zoom } from "@mui/material";
import { useScrollTrigger, Box } from "@mui/material";
import Iconify from "../iconify";

const ScrollToTop = ({ window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100, // Show the button when scrolled 100px
  });

  const handleClick = () => {
    // Ensure the scrollable container is targeted
    const anchor = document.querySelector("html");
    if (anchor) {
      anchor.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <Fab
          color="primary"
          size="small"
          onClick={handleClick}
          aria-label="Scroll to top"
        >
          <Iconify icon="uis:angle-up" />
          {/* <KeyboardArrowUpIcon /> */}
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
