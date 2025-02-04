import PropTypes from "prop-types";
import { useCallback } from "react";
// @mui
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";
import Iconify from "../../../components/iconify";
import Scrollbar from "../../../components/scrollbar";
import ColorPicker from "../../../components/color-utils/color-picker";
import RenderCategory from "./RenderCategory";
import RenderHead from "./RenderHead";
// components

// ----------------------------------------------------------------------

export default function ProductFilters({
  open,
  onOpen,
  onClose,
  //
  filters,
  onFilters,
  //
  canReset,
  onResetFilters,
  //
  colorOptions,
  categoryOptions,
}) {
  const handleFilterCategory = useCallback(
    (newValue) => {
      onFilters("category", newValue);
    },
    [onFilters]
  );

  const handleFilterColors = useCallback(
    (newValue) => {
      onFilters("colors", newValue);
    },
    [onFilters]
  );

  const renderColor = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Color
      </Typography>
      <ColorPicker
        selected={filters.colors}
        onSelectColor={(colors) => handleFilterColors(colors)}
        colors={colorOptions}
        limit={6}
      />
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="ic:round-filter-list" />
          </Badge>
        }
        onClick={onOpen}
      >
        Filters
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 280 },
        }}
      >
        <RenderHead
          onResetFilters={onResetFilters}
          canReset={canReset}
          onClose={onClose}
        />

        <Divider />

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            <RenderCategory
              categoryOptions={categoryOptions}
              handleFilterCategory={handleFilterCategory}
              filters={filters}
            />

            {renderColor}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

ProductFilters.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  canReset: PropTypes.bool,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  genderOptions: PropTypes.array,
  onResetFilters: PropTypes.func,
  ratingOptions: PropTypes.array,
  categoryOptions: PropTypes.array,
  colorOptions: PropTypes.arrayOf(PropTypes.string),
};

// ----------------------------------------------------------------------
