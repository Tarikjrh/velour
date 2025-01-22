import PropTypes from "prop-types";
import { useCallback } from "react";
// @mui
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Iconify from "../../../components/iconify";
import Scrollbar from "../../../components/scrollbar";
import ColorPicker from "../../../components/color-utils/color-picker";
import { Checkbox } from "@mui/material";
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
  genderOptions,
  categoryOptions,
}) {
  const handleFilterGender = useCallback(
    (newValue) => {
      const checked = filters.gender.includes(newValue)
        ? filters.gender.filter((value) => value !== newValue)
        : [...filters.gender, newValue];
      onFilters("gender", checked);
    },
    [filters.gender, onFilters]
  );

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

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2, pr: 1, pl: 2.5 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Filters
      </Typography>

      <Tooltip title="Reset">
        <IconButton onClick={onResetFilters}>
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>

      <IconButton onClick={onClose}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>
    </Stack>
  );

  const renderGender = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Gender
      </Typography>
      {genderOptions.map((option) => (
        <FormControlLabel
          key={option.value}
          control={
            <Checkbox
              checked={filters.gender.includes(option.label)}
              onClick={() => handleFilterGender(option.label)}
            />
          }
          label={option.label}
        />
      ))}
    </Stack>
  );

  const renderCategory = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Category
      </Typography>
      {categoryOptions.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Radio
              checked={option === filters.category}
              onClick={() => handleFilterCategory(option)}
            />
          }
          label={option}
          sx={{
            ...(option === "all" && {
              textTransform: "capitalize",
            }),
          }}
        />
      ))}
    </Stack>
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
        {renderHead}

        <Divider />

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            {renderGender}

            {renderCategory}

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
