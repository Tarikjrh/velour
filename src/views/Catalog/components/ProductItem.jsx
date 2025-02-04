import PropTypes from "prop-types";
// @mui
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import { paths } from "../../../routes/paths";
import Image from "../../../components/Image";
import ColorPreview from "../../../components/color-utils/color-preview";

export default function ProductItem({ product }) {
  const { id, name, coverUrl, colors } = product;

  const linkTo = paths.catalog.details(id);

  return (
    <Card component={Link} href={linkTo} sx={{}}>
      <Box sx={{ position: "relative", p: 1 }}>
        <Image
          alt={name}
          src={coverUrl}
          ratio="1/1"
          sx={{
            borderRadius: 1.5,
          }}
        />
      </Box>
      <Stack
        spacing={2.5}
        sx={{ p: 3, pt: 2 }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Box color="inherit" variant="subtitle2">
          {name}
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {colors && <ColorPreview colors={colors} />}
        </Stack>
      </Stack>
    </Card>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
};
