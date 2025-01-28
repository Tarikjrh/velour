import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Image from "../../../components/Image";
import categories_data from "../utils/categories_data";
import { paths } from "../../../routes/paths";
import { useLocales } from "../../../locales";

export default function UniformsGrid() {
  const { t } = useLocales();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="section_title" sx={{ mb: 5, textAlign: "center" }}>
        {t("categories.title")}
      </Typography>
      <Grid container spacing={3}>
        {categories_data.map(({ title, img, id }) => (
          <Grid item key={id} xs={12} md={4}>
            <Box
              component={Link}
              href={paths.catalog.collection(id)}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                src={img}
                alt={title}
                sx={{
                  objectFit: "contain",
                  height: "200px", // Set a fixed height for the image
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontWeight: "light",
                  flex: 1,
                  textTransform: "capitalize",
                }}
              >
                {t(`${title}`)}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Link href={paths.catalog.root} underline="none">
        <Button variant="contained" sx={{ mt: 2 }}>
          {t(`view_all`)}
        </Button>
      </Link>
    </Container>
  );
}
