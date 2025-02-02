import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import Image from "../../../components/Image";
import ColorPreview from "../../../components/color-utils/color-preview";
import { paths } from "../../../routes/paths";
import productsData from "../../../productsData/productsData";
import { useLocales } from "../../../locales";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function SimilarItems({ selectedItem }) {
  const [productsList, setProductsList] = useState([]);
  const { t } = useLocales();

  useEffect(() => {
    const selectedCategory = selectedItem?.category;
    const selectedCollection = selectedItem?.collection;
    const sameCategory = productsData.filter((product) => {
      return product.category === selectedCategory;
    });

    const sameCollection = productsData.filter((product) => {
      return product.collection === selectedCollection;
    });

    //randomize the order of the products of sameCollection
    const randomizedPositionCollections = sameCollection.sort(
      () => Math.random() - 0.5
    );

    const combined = [...sameCategory, ...randomizedPositionCollections].filter(
      (product, index, self) => {
        // Check if it's the first occurrence of this id
        const isFirstOccurrence =
          self.findIndex((p) => p.id === product.id) === index;

        // Remove the selected item, keep first occurrence of duplicates
        return product.id !== selectedItem.id && isFirstOccurrence;
      }
    );

    setProductsList(combined);

    return () => {};
  }, []);

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="section_title">{"Similar Items"}</Typography>
      <Grid container spacing={3} sx={{ my: 1 }}>
        {productsList.length > 0 &&
          productsList.slice(0, 4).map((product) => (
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
    </Container>
  );
}

SimilarItems.propTypes = {
  selectedItem: PropTypes.object,
};
