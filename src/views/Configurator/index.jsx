import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import VBreadcrumbs from "../../components/VBreadcrumbs";
import ColorPicker from "../../components/color-utils/color-picker";
import colors from "./utils/colors";
import ItemTitle from "./components/ItemTitle";

export default function Configurator() {
  const [selectedImg, setSelectedImg] = useState("womens_crew_front.png");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const title = "Woman's Crew T-shirt";

  return (
    <Container
      sx={{
        overflowX: { xs: "hidden", md: "visible" },
        backgroundColor: "#fff",
        border: "1px solid red",
      }}
      maxWidth={"lg"}
    >
      <VBreadcrumbs sx={{ my: { xs: 4, md: 6 } }} />

      <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
        <ItemTitle text={title} sx={{ display: { xs: "block", md: "none" } }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { xs: "80%", md: "100%" } }}>
            <img
              src={selectedImg}
              style={{ backgroundColor: selectedColor, width: "100%" }}
            />
          </Box>
        </Box>
        <Stack
          sx={{ width: { xs: "100%", md: "50%" } }}
          direction={"column"}
          spacing={4}
        >
          <ItemTitle
            text={title}
            sx={{ display: { xs: "none", md: "block" } }}
          />

          <Typography
            component={"h2"}
            variant={"body1"}
            sx={{
              fontFamily: "Abril Fatface",
              maxWidth: { md: "90%" },
              fontSize: { xs: "16px", md: "24px" },
            }}
          >
            Premium back-view T-shirt with a classic crew neck and short
            sleeves. Crafted from durable, comfortable fabric, perfect for
            uniforms, branding, or promotional use.
          </Typography>
          <Stack
            direction={"row"}
            sx={{ width: "100%" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {" "}
            <Typography variant="button">Color</Typography>
            <Stack direction="row">
              <ColorPicker
                colors={colors}
                selected={selectedColor}
                onSelectColor={(color) => setSelectedColor(color)}
                limit={6}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
