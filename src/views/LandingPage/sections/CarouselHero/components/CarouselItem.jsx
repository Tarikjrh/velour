import { m } from "framer-motion";
// @mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useLocales } from "../../../../../locales";
import { CardContent, Paper, Typography } from "@mui/material";
import Image from "../../../../../components/Image";
import PropTypes from "prop-types";
import { MotionContainer, varFade } from "../../../../../components/animate";

export default function CarouselItem({ item, active }) {
  const { t } = useLocales();

  const theme = useTheme();

  const { coverUrl, title } = item;

  const variants =
    theme.direction === "rtl" ? varFade().inLeft : varFade().inRight;

  return (
    <Paper
      sx={{
        position: "relative",
        height: { xs: "60vh", md: "85vh" },
      }}
      style={{ borderRadius: "0px !important" }}
    >
      <Image
        dir="ltr"
        alt={title}
        src={coverUrl}
        ratio="16/9"
        style={{ height: "100%" }}
      />

      {theme.direction === "ltr" && (
        <Box
          sx={{
            top: 0,
            width: 1,
            height: 1,
            position: "absolute",
          }}
        />
      )}

      <CardContent
        component={MotionContainer}
        animate={active}
        action
        sx={{
          left: 0,
          bottom: 0,
          maxWidth: 720,
          textAlign: "left",
          position: "absolute",
          color: "common.white",
        }}
      >
        <m.div variants={variants}>
          <Typography variant="h3" gutterBottom>
            {t(`${item.title}`)}
          </Typography>
        </m.div>

        <m.div variants={variants}>
          <Typography variant="body2" gutterBottom>
            {item.description}
          </Typography>
        </m.div>
      </CardContent>
    </Paper>
  );
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.object,
};
