import { Stack, Typography } from "@mui/material";
import ColorPicker from "../../../components/color-utils/color-picker";
import PropTypes from "prop-types";
import ColorPickerWithPopup from "./ColorPickerWithPopup";

const ColorPickerSection = ({
  selectedColor,
  onSelectColor,
  colors,
  showColorWheel,
}) => (
  <Stack
    direction={"row"}
    sx={{ width: "100%" }}
    justifyContent={"space-between"}
    alignItems={"center"}
  >
    <Typography variant="button">Color</Typography>
    <Stack direction="row" alignItems={"center"} spacing={1}>
      <ColorPicker
        colors={colors}
        selected={selectedColor}
        onSelectColor={onSelectColor}
        limit={6}
      />
      {showColorWheel && <ColorPickerWithPopup onSelectColor={onSelectColor} />}
    </Stack>
  </Stack>
);

export default ColorPickerSection;

//prop types
ColorPickerSection.propTypes = {
  selectedColor: PropTypes.string,
  onSelectColor: PropTypes.func,
  colors: PropTypes.array,
  showColorWheel: PropTypes.bool,
};
