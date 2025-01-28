import { Box, Stack, Typography } from "@mui/material";
import Image from "../Image";
import { useLocales } from "../../locales";

export default function NotFoundProduct() {
  const { t } = useLocales();
  return (
    <Box sx={{ width: "100vw", position: "relative" }}>
      <Image
        src="/magnifier.png"
        sx={{ width: "100%", height: { xs: "300px", sm: "200px", md: "100%" } }}
      />
      <Stack
        spacing={2}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "#fff",
          width: { md: "80%" },
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 0 },
        }}
      >
        <Typography variant="h4">{t("not_found.title")}</Typography>
        <Typography variant="body1" sx={{ width: { md: "80%" } }}>
          {t("not_found.description")}
        </Typography>
      </Stack>
    </Box>
  );
}
