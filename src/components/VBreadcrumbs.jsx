import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export default function VBreadcrumbs({ sx }) {
  return (
    <Breadcrumbs
      separator={
        <Box
          component="span"
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "text.disabled",
            ...sx,
          }}
        />
      }
      aria-label="breadcrumb"
    >
      <Link
        sx={{ color: "text.primary" }}
        underline="hover"
        color="inherit"
        href="/"
      >
        Uniforms
      </Link>
      <Link
        sx={{ color: "text.primary" }}
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Tops
      </Link>
      <Typography>Woman&apos;s Crew T-shirt</Typography>
    </Breadcrumbs>
  );
}
