import { Box, Container, Typography } from "@mui/material";
import Image from "../../../components/Image";

export default function AboutTitle() {
  return (
    <Container>
      <Box sx={{ position: "relative" }}>
        <Image
          src={"/about_title.png"}
          ratio={"21/9"}
          sx={{ borderRadius: "20px", width: "100%" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: "0",

            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              lineHeight: "1",
              color: "#fff",
              textAlign: "start",
              p: 2,
            }}
          >
            Crafting <br /> Excellence, <br />
            One Uniform <br /> at a Time.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
