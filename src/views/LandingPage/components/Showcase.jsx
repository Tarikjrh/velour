import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import Image from "../../../components/Image";
import productsData from "../../Catalog/productsData";
import ColorPreview from "../../../components/color-utils/color-preview";
import { paths } from "../../../routes/paths";

export default function Showcase() {
  const extraProduct = productsData[0];
  return (
    <Container>
      <Typography variant="section_title">Showcase</Typography>
      <Grid container spacing={3} sx={{ my: 1 }}>
        {productsData.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            md={3}
            component={Link}
            href={paths.catalog.details(product.id)}
            sx={{ textDecoration: "none" }}
          >
            <Stack spacing={2}>
              <Image src={product.coverUrl} sx={{ borderRadius: "20px" }} />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="body1" sx={{ textDecoration: "none" }}>
                  {product.name}
                </Typography>
                <ColorPreview colors={product.colors} />
              </Stack>
            </Stack>
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          md={3}
          component={Link}
          href={paths.catalog.details(extraProduct.id)}
        >
          <Stack spacing={2}>
            <Image src={extraProduct.coverUrl} sx={{ borderRadius: "20px" }} />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1">{extraProduct.name}</Typography>
              <ColorPreview colors={extraProduct.colors} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
