import { Alert, Grid, Stack, Typography } from "@mui/material";
import ItemTitle from "./ItemTitle";
import ColorPickerSection from "./ColorPickerSection";
import SizesSection from "./SizesSection";
import SizeGuide from "./SizeGuide";
import CustomizationBtns from "./CustomizationBtns";
import DisplayOptions from "./DisplayOptions";

export default function RenderDetails({
  selectedProduct,
  handleCustomPictureUpload,
  handleOpen,
  selectedColor,
  setSelectedColor,
}) {
  return (
    <Grid item xs={12} sm={6} sx={{ px: 2 }}>
      <Stack direction={"column"} spacing={4}>
        <ItemTitle
          text={selectedProduct?.name}
          sx={{ display: { xs: "none", md: "block" } }}
        />

        <Typography component={"h2"} variant={"body1"}>
          {selectedProduct?.description}
        </Typography>

        {selectedProduct?.message && (
          <Alert severity="info">{selectedProduct?.message}</Alert>
        )}

        {selectedProduct?.colors && (
          <ColorPickerSection
            colors={selectedProduct?.colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            showColorWheel={selectedProduct?.showColorWheel || true}
          />
        )}
        {selectedProduct?.sizes && (
          <SizesSection sizes={selectedProduct?.sizes} limit={9} />
        )}

        <SizeGuide />

        <CustomizationBtns
          onImgClick={handleCustomPictureUpload}
          onTextClick={handleOpen}
        />
        {selectedProduct?.options && (
          <DisplayOptions options={selectedProduct?.options} />
        )}
      </Stack>
    </Grid>
  );
}
