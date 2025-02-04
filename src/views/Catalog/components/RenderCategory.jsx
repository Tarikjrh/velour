import { FormControlLabel, Radio, Stack, Typography } from "@mui/material";

export default function RenderCategory({
  categoryOptions,
  handleFilterCategory,
  filters,
}) {
  return (
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
}
