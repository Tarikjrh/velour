import {
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "../../../components/Image";
import ColorPreview from "../../../components/color-utils/color-preview";
import { paths } from "../../../routes/paths";
import productsData from "../../../productsData";
import { useLocales } from "../../../locales";

export default function Showcase() {
  const { t } = useLocales();
  return (
    <Container>
      <Typography variant="section_title">{t("showcase")}</Typography>
      <Grid container spacing={3} sx={{ my: 1 }}>
        {productsData.slice(0, 4).map((product) => (
          <Grid
            key={product.id}
            item
            xs={6}
            md={3}
            component={Link}
            href={paths.catalog.details(product.id)}
            sx={{ textDecoration: "none" }}
          >
            <Stack spacing={2}>
              <Image
                src={product.coverUrl}
                sx={{
                  borderRadius: "20px",
                  minHeight: { xs: "167px", md: "200px" },
                }}
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="body1" sx={{ textDecoration: "none" }}>
                  {product.name}
                </Typography>
                {product?.colors && <ColorPreview colors={product?.colors} />}
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Link
        href={paths.catalog.root}
        underline="none"
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <Button variant="contained" sx={{ mt: 2 }}>
          {t("view_all")}
        </Button>
      </Link>
    </Container>
  );
}
