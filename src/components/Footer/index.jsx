import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Iconify from "../iconify";
import useLocales from "../../locales/use-locales";
import storeDetails, { socialIcons } from "../../utils/storeDetails";

export default function Footer() {
  const { t } = useLocales();

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
            {storeDetails.map((detail, i) => {
              return (
                <Typography
                  component={detail.type === "phone" ? Link : "div"}
                  href={detail.type === "phone" ? `tel:${detail.value}` : ""}
                  style={{ direction: "ltr" }}
                  sx={{
                    color: "#fff",
                    textAlign: { xs: "center", sm: "start" },
                  }}
                  key={i}
                >
                  {detail.value}
                </Typography>
              );
            })}
          </Stack>
          <Box>
            <Typography sx={{ textAlign: { xs: "center", sm: "left" } }}>
              {t("follow_us")}:
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
