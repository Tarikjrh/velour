import isEqual from "lodash/isEqual";
import { useCallback, useState } from "react";
// @mui
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useDebounce } from "../../hooks/use-debounce";
import { useBoolean } from "../../hooks/use-boolean";
import EmptyContent from "../../components/EmptyContent";
import ProductList from "./components/ProductList";
import ProductFilters from "./components/ProductFilters";
import {
  PRODUCT_CATEGORY_OPTIONS,
  PRODUCT_COLOR_OPTIONS,
  PRODUCT_GENDER_OPTIONS,
  PRODUCT_SORT_OPTIONS,
} from "./utils/_product";
import ProductSort from "./components/ProductSort";
import ProductSearch from "./components/ProductSearch";
import ProductFiltersResult from "./components/ProductFiltersResult";
import { useSearchProducts } from "./utils/useSearchProducts";
import { paths } from "../../routes/paths";
import { Box, Button } from "@mui/material";
import Iconify from "../../components/iconify";
import applyFilter from "./utils/applyFilter";
import CollectionTabs from "./components/CollectionTabs";
import productsData from "../../productsData";

// ----------------------------------------------------------------------

const defaultFilters = {
  gender: [],
  colors: [],
  rating: "",
  category: "all",
  collection: "",
  priceRange: [0, 200],
};

// ----------------------------------------------------------------------

export default function ProductShopView() {
  // const settings = useSettingsContext();

  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState("featured");

  const [searchQuery, setSearchQuery] = useState("");

  const debouncedQuery = useDebounce(searchQuery);

  const [filters, setFilters] = useState(defaultFilters);

  const { searchResults, searchLoading } = useSearchProducts(debouncedQuery);

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const dataFiltered = applyFilter({
    inputData: productsData,
    filters,
    sortBy,
  });

  const canReset = !isEqual(defaultFilters, filters);

  const notFound = !dataFiltered.length && canReset;

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue) => {
    setSearchQuery(inputValue);
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: "flex-end", sm: "center" }}
      direction={{ xs: "column", sm: "row" }}
    >
      <ProductSearch
        query={debouncedQuery}
        results={searchResults}
        onSearch={handleSearch}
        loading={searchLoading}
        hrefItem={(id) => paths.catalog.details(id)}
      />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <ProductFilters
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          //
          filters={filters}
          onFilters={handleFilters}
          //
          canReset={canReset}
          onResetFilters={handleResetFilters}
          colorOptions={PRODUCT_COLOR_OPTIONS}
          genderOptions={PRODUCT_GENDER_OPTIONS}
          categoryOptions={["all", ...PRODUCT_CATEGORY_OPTIONS]}
        />

        <ProductSort
          sort={sortBy}
          onSort={handleSortBy}
          sortOptions={PRODUCT_SORT_OPTIONS}
        />
      </Stack>
    </Stack>
  );

  const renderResults = (
    <ProductFiltersResult
      filters={filters}
      onFilters={handleFilters}
      //
      canReset={canReset}
      onResetFilters={handleResetFilters}
      //
      results={dataFiltered.length}
    />
  );

  const renderNotFound = (
    <EmptyContent filled title="No Data" sx={{ py: 10 }} />
  );

  return (
    <Box sx={{ mt: 5 }}>
      <Container
        maxWidth={"lg"}
        sx={{
          mb: 15,
        }}
      >
        <CollectionTabs
          onFilters={handleFilters}
          onResetFilters={handleResetFilters}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          <Typography variant="h4">Catalog</Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="ic:baseline-menu-book" />}
          >
            Download Catalog
          </Button>
        </Stack>

        <Stack
          spacing={2.5}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          {renderFilters}

          {canReset && renderResults}
        </Stack>

        {notFound && renderNotFound}

        <ProductList products={dataFiltered} loading={false} />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------
