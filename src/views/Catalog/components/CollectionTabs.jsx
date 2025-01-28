import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import categories_data from "../../LandingPage/utils/categories_data";
import { useLocales } from "../../../locales";

export default function CollectionTabs({
  onFilters,
  onResetFilters,
  externalValue,
}) {
  const { t } = useLocales();
  const [value, setValue] = React.useState(null);

  // Update internal state when externalValue changes
  React.useEffect(() => {
    if (externalValue !== undefined && externalValue !== value) {
      setValue(externalValue);
    }
  }, [externalValue]);

  const handleChange = (event, newValue) => {
    if (newValue === value) {
      return;
    }
    handleFilterCollection(newValue);
    setValue(newValue);
  };

  const handleClick = (e) => {
    if (e === value) {
      setValue(null);
      onResetFilters("collection");
      return;
    }
  };

  const handleFilterCollection = React.useCallback(
    (newValue) => {
      onFilters("collection", newValue);
    },
    [onFilters]
  );

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {t("collections")}
      </Typography>

      <Stack spacing={2} alignItems="center">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="first row of tabs"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            maxWidth: "100%",
            ".MuiTabs-indicator": {
              backgroundColor: "primary.main", // Customize the indicator line color here
              height: 4, // Optional: Adjust thickness of the line
            },
          }}
        >
          {categories_data.map((cat) => (
            <Tab
              onClick={() => handleClick(cat.id)}
              key={cat.id}
              value={cat.id}
              label={t(cat.title)}
              sx={{
                backgroundImage:
                  value === cat.id ? `url("${cat.img}")` : "none",
                backgroundColor: value === cat.id ? "transparent" : "#e0e0e0", // Gray for unselected items
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                textTransform: "uppercase",
                fontWeight: "bold",
                padding: 2,
                height: 100,
                minWidth: 200,
                borderRadius: 1,
                transition: "all 0.3s ease",
                filter: value === cat.id ? "none" : "grayscale(100%)", // Apply grayscale filter to unselected tabs
              }}
            />
          ))}
          {/* <Tab sx={{ display: "none" }} label="All" value={null} /> */}
        </Tabs>
      </Stack>
    </Box>
  );
}
