import { useEffect, useState } from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import { hsvaToHex, hexToHsva } from "@uiw/color-convert";
import { Button, Box } from "@mui/material";
import CustomPopover from "../../../components/custom-popover/custom-popover";
import PropTypes from "prop-types";

function ColorPickerWithPopup({ selectedColor, onSelectColor }) {
  const [hsva, setHsva] = useState(hexToHsva(selectedColor || "#fff"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (selectedColor != hsvaToHex(hsva)) {
      onSelectColor(hsvaToHex(hsva));
    }

    return () => {};
  }, [hsva]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      {/* Button to open the CustomPopover */}

      <Button
        onClick={handleOpen}
        sx={{
          background: `conic-gradient(from 0deg, red, yellow, green, cyan, blue, magenta, red)`,
          width: 20,
          height: 20,
          borderRadius: "50%",
          minWidth: 0,
          p: 0,
        }}
      />

      {/* CustomPopover */}
      <CustomPopover
        open={anchorEl}
        onClose={handleClose}
        arrow="top-center"
        hiddenArrow={false}
        sx={{
          p: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box>
          {/* Color Wheel */}
          <Wheel
            color={hsva}
            onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
          />

          {/* Shade Slider */}
          <Box mt={2}>
            <ShadeSlider
              hsva={hsva}
              style={{ width: "100%", maxWidth: "300px" }}
              onChange={(newShade) => setHsva({ ...hsva, ...newShade })}
            />
          </Box>
        </Box>
      </CustomPopover>
    </Box>
  );
}

export default ColorPickerWithPopup;

ColorPickerWithPopup.propTypes = {
  onSelectColor: PropTypes.func,
  selectedColor: PropTypes.string,
};
