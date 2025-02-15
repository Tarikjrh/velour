import PropTypes from "prop-types";
// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Iconify from "../../../components/iconify";
import categories_data from "../../LandingPage/utils/categories_data";
import useLocales from "../../../locales/use-locales";
// components

// ----------------------------------------------------------------------

export default function ProductFiltersResult({
  filters,
  onFilters,
  //
  canReset,
  onResetFilters,
  //
  results,
  ...other
}) {
  const { t } = useLocales();

  const handleRemoveCategory = () => {
    onFilters("category", "all");
  };
  const handleRemoveCollection = () => {
    onFilters("collection", "");
  };

  const handleRemoveColor = (inputValue) => {
    const newValue = filters.colors.filter((item) => item !== inputValue);
    onFilters("colors", newValue);
  };

  return (
    <Stack spacing={1.5} {...other}>
      <Box sx={{ typography: "body2" }}>
        <strong>{results}</strong>
        <Box component="span" sx={{ color: "text.secondary", ml: 0.25 }}>
          {t("results_found")}
        </Box>
      </Box>

      <Stack
        flexGrow={1}
        spacing={1}
        direction="row"
        flexWrap="wrap"
        alignItems="center"
      >
        {filters.category !== "all" && (
          <Block label={`${t("category")}:`}>
            <Chip
              size="small"
              label={filters.category}
              onDelete={handleRemoveCategory}
            />
          </Block>
        )}

        {filters.collection !== "" && (
          <Block label={`${t("collection")}:`}>
            <Chip
              size="small"
              label={t(
                `${
                  categories_data.find((item) => item.id === filters.collection)
                    ?.title
                }`
              )}
              onDelete={handleRemoveCollection}
            />
          </Block>
        )}

        {!!filters.colors.length && (
          <Block label={`${t("colors")}:`}>
            {filters.colors.map((item) => (
              <Chip
                key={item}
                size="small"
                label={
                  <Box
                    sx={{
                      ml: -0.5,
                      width: 18,
                      height: 18,
                      bgcolor: item,
                      borderRadius: "50%",
                      border: (theme) =>
                        `solid 1px ${alpha(theme.palette.common.white, 0.24)}`,
                    }}
                  />
                }
                onDelete={() => handleRemoveColor(item)}
              />
            ))}
          </Block>
        )}

        {canReset && (
          <Button
            color="error"
            onClick={onResetFilters}
            startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
          >
            {t("clear")}
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

ProductFiltersResult.propTypes = {
  canReset: PropTypes.bool,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  results: PropTypes.number,
  onResetFilters: PropTypes.func,
};

// ----------------------------------------------------------------------

function Block({ label, children, sx, ...other }) {
  return (
    <Stack
      component={Paper}
      variant="outlined"
      spacing={1}
      direction="row"
      sx={{
        p: 1,
        borderRadius: 1,
        overflow: "hidden",
        borderStyle: "dashed",
        ...sx,
      }}
      {...other}
    >
      <Box component="span" sx={{ typography: "subtitle2" }}>
        {label}
      </Box>

      <Stack spacing={1} direction="row" flexWrap="wrap">
        {children}
      </Stack>
    </Stack>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  sx: PropTypes.object,
};
