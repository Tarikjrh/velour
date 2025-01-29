import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { paths } from "../../../routes/paths";
import Image from "../../../components/Image";

export default function index() {
  const data = [
    "Concept & Design",
    "Fabric Selection",
    "Cutting & Stitching",
    "Quality Check",
    "Delivery",
  ];
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Container sx={{ mt: 5, zIndex: 2, position: "relative" }}>
        <Box>
          {" "}
          <Typography variant="h3" sx={{ textAlign: "center", my: 3 }}>
            Our Process
          </Typography>
          <Grid container spacing={2} columns={15}>
            {data.map((item, i) => {
              return (
                <Grid item key={i} xs={7.5} md={3}>
                  <Box
                    sx={{
                      bgcolor: "#283935",
                      color: "#fff",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                    }}
                  >
                    <Typography textAlign={"center"}>{item}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack
          sx={{
            height: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            mb: 20,
            mt: 15,
          }}
        >
          <Typography variant="h3">
            Ready to elevate your team’s <br />
            look?
          </Typography>
          <Typography variant="why_velour_description" color="#8AA187">
            Explore our catalog today!
          </Typography>
          <Button
            sx={{ mt: 5 }}
            component={Link}
            href={paths.catalog.root}
            variant="contained"
          >
            View Products
          </Button>
        </Stack>
      </Container>
      <Box
        sx={{
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Image src="/process.png" sx={{ width: "100%", height: "100%" }} />{" "}
      </Box>
    </Box>
  );
}
