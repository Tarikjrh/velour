import { Stack, Typography } from "@mui/material";
import ColorPicker from "../../../components/color-utils/color-picker";
import colors from "../utils/colors";

const ColorPickerSection = ({ selectedColor, onSelectColor }) => (
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
