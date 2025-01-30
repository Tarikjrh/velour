import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "../../../components/Image";
import RouterLink from "../../../components/RouterLink";
import { paths } from "../../../routes/paths";
import { useLocales } from "../../../locales";

export default function WhyVelour() {
  const { t } = useLocales();
  return (
    <Box sx={{ position: "relative" }}>
      <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={3}>
        <Stack
          spacing={3}
          direction={"column"}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ pl: { xs: 2, sm: 4, md: 5, lg: 20 } }}
        >
          <Typography variant="why_velour_title">
            {t("why_choose_velour.title")}
          </Typography>
          <Typography variant="why_velour_description" sx={{ maxWidth: "80%" }}>
            {t("why_choose_velour.description")}
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            href={paths.contact_us.root}
          >
            {t("contact_us")}
          </Button>
        </Stack>
        <Box
          sx={{
            height: "100%",
            width: { xs: "100%", md: "100%", lg: "70%" },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image
            src="/why_contact.png"
            sx={{
              width: { xs: "100%", sm: "100%", md: "80%" },
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
            ratio="3/4"
          />
        </Box>
      </Stack>
    </Box>
  );
}
