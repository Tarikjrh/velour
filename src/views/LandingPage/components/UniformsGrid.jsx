import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Image from "../../../components/Image";
import categories_data from "../utils/categories_data";

export default function UniformsGrid() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="section_title" sx={{ mb: 5, textAlign: "center" }}>
        Explore Our Wide Range of Uniforms
      </Typography>
      <Grid container spacing={3}>
        {categories_data.map(({ title, img }) => (
          <Grid item key={title} xs={12} md={4}>
            <Box
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
                }}
              >
                {title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Link href="/catalog" underline="none">
        <Button variant="contained" sx={{ mt: 2 }}>
          View All
        </Button>
      </Link>
    </Container>
  );
}
