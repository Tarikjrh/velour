import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "../../../components/Image";
import { useLocales } from "../../../locales";
import storeDetails from "../../../utils/storeDetails";

export default function OtherContact() {
  const { direction: themeDirection } = useTheme();

  const { t } = useLocales();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        background: `linear-gradient(175.81deg, rgba(44, 120, 49, 0.063) 27.37%, rgba(46, 127, 81, 0.112) 96.85%)`,
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Image
            src="contact_phone.png"
            style={{ transform: themeDirection == "ltr" ? null : "scaleX(-1)" }}
          />
        </Box>
        <Box sx={{ pl: { xs: 4, md: 10 } }}>
          <Typography variant="h4">{t("contact.other_contact")}</Typography>
          {storeDetails.map((detail) => (
            <>
              {detail.key !== "name" && (
                <Typography
                  variant="h4"
                  style={{ direction: "ltr" }}
                  key={detail.key}
                >
                  {detail.value}
                </Typography>
              )}
            </>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
