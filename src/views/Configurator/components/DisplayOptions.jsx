import { Box, Stack, Typography } from "@mui/material";

export default function DisplayOptions({ options }) {
  return (
    <Stack direction={"column"} spacing={2}>
      <Stack direction={"column"} spacing={1} display={"inline-flex"}>
        {options.map((option, i) => {
          return (
            <Stack
              direction="row"
              key={i}
              spacing={1}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="button" sx={{ textTransform: "capitalize" }}>
                {option.type}
              </Typography>
              <Stack direction="row" spacing={2}>
                {option.variants.map((variant, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        bgcolor: "white",
                        color: "#000",
                        border: "2px solid #000",
                        fontSize: "1rem",
                        px: 1,
                        py: 1,
                        borderRadius: "10px",
                        width: "100px", // Set a fixed width
                        height: "40px", // Set a fixed height
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      sizes="small"
                      variant="rounded"
                    >
                      {variant.name}
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
