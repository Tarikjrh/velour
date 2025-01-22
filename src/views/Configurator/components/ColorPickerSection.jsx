import { Stack, Typography } from "@mui/material";
import ColorPicker from "../../../components/color-utils/color-picker";
import PropTypes from "prop-types";

const ColorPickerSection = ({ selectedColor, onSelectColor, colors }) => (
  <Stack
    direction={"row"}
    sx={{ width: "100%" }}
    justifyContent={"space-between"}
    alignItems={"center"}
  >
    <Typography variant="button">Color</Typography>
    <Stack direction="row">
      <ColorPicker
        colors={colors}
        selected={selectedColor}
        onSelectColor={onSelectColor}
        limit={6}
      />
    </Stack>
  </Stack>
);

export default ColorPickerSection;

//prop types
ColorPickerSection.propTypes = {
  selectedColor: PropTypes.string,
  onSelectColor: PropTypes.func,
  colors: PropTypes.array,
};
