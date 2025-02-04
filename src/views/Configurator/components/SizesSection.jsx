import { Avatar, Stack, Typography } from "@mui/material";

export default function SizesSection({ sizes, limit = 6 }) {
  return (
    <Stack
      direction={"row"}
      sx={{ width: "100%" }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="button">Sizes</Typography>
      <Stack
        direction="row"
        spacing={1}
        display="inline-flex"
        sx={{
          flexWrap: "wrap",
          ...(limit !== "auto" && {
            width: limit * 36,
            justifyContent: "flex-end",
          }),
        }}
      >
        {sizes.map((size, i) => {
          return (
            <Avatar
              key={i}
              sx={{
                bgcolor: "white",
                color: "#000",
                border: "2px solid #000",
                fontSize: "1rem",
                px: 3,
                py: 2,
                width: 6,
                height: 6,
              }}
              sizes="small"
              variant="rounded"
            >
              {size}
            </Avatar>
          );
        })}
      </Stack>
    </Stack>
  );
}
