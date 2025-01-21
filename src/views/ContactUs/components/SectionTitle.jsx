import { Box, Container, Typography } from "@mui/material";
import Image from "../../../components/Image";

export default function SectionTitle() {
  return (
    <Container>
      <Box sx={{ position: "relative" }}>
        <Image
          src={"/about_us_title.png"}
          ratio="21/9"
          sx={{ borderRadius: "20px" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "0",

            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              lineHeight: "1",
              color: "#fff",
              textAlign: "end ",
              p: 2,
            }}
          >
            We’d Love to <br />
            Hear From
            <br /> You!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
