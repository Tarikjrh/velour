import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function VBreadcrumbs({ sx, paths }) {
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
      {paths.map((path, i) => {
        if (paths.length - 1 !== i) {
          return (
            <Link
              key={i}
              sx={{ color: "text.primary" }}
              underline="hover"
              color="inherit"
              href={path.url}
            >
              {path.label}
            </Link>
          );
        }
      })}
      <Typography>{paths[paths.length - 1].label}</Typography>
    </Breadcrumbs>
  );
}

VBreadcrumbs.propTypes = {
  paths: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
