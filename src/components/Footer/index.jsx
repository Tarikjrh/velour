import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Iconify from "../iconify";

export default function Footer() {
  const details = ["Beirut,Hamra", "76 345 234", "velour@gmail.com"];
  const socialIcons = [
    { icon: "iconoir:facebook", link: "https://www.facebook.com" },
    { icon: "uil:instagram", link: "https://www.instagram.com" },
    { icon: "pajamas:twitter", link: "https://www.twitter.com" },
  ];
  return (
    <Box sx={{ backgroundColor: "#1F261E", color: "#fff", mt: 10 }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
        >
          <Box sx={{ maxWidth: { xs: "50%", sm: "25%", md: "15%" } }}>
            <img src="/logo.svg" width={"100%"} />
          </Box>
          <Stack spacing={0.5} mb={{ xs: 5, sm: 0 }}>
            {details.map((detail, i) => {
              return (
                <Typography
                  sx={{ textAlign: { xs: "center", sm: "start" } }}
                  key={i}
                >
                  {detail}
                </Typography>
              );
            })}
          </Stack>
          <Box>
            <Typography sx={{ textAlign: { xs: "center", sm: "start" } }}>
              Follow us:
            </Typography>
            <Stack direction={"row"} mt={0.5}>
              {socialIcons.map((icon, i) => {
                return (
                  <IconButton
                    component={Link}
                    href={icon.link}
                    target="_blank"
                    key={i}
                    color="#fff"
                  >
                    <Iconify icon={icon.icon} style={{ color: "#fff" }} />
                  </IconButton>
                );
              })}
            </Stack>
          </Box>
          <Box />
        </Stack>
      </Container>
      <Stack alignItems={"center"}>
        <Box>
          <Typography variant="caption">
            © 2025 Velour - All Rights Reserved
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
