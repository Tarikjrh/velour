import PropTypes from "prop-types";
import { m } from "framer-motion";
// @mui
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
// them
import { bgGradient } from "../../../theme/css";

// components
import { MotionContainer, varFade } from "../../../components/animate";
import Carousel, {
  CarouselArrows,
  CarouselDots,
  useCarousel,
} from "../../../components/carousel";
import Image from "../../../components/Image";
import useLocales from "../../../locales/use-locales";

// ----------------------------------------------------------------------

export default function CarouselHero({ data }) {
  const carousel = useCarousel({
    speed: 1500,
    autoplay: true,
    sx: { borderRadius: "0" },
    ...CarouselDots({
      rounded: true,
      sx: {
        mt: 3,
        pb: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        color: "#fff",
      },
    }),
  });

  return (
    <Card sx={{ borderRadius: "0px " }}>
      <CarouselArrows
        filled
        shape="rounded"
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      >
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {data.map((item, index) => (
            <CarouselItem
              key={item.id}
              item={item}
              active={index === carousel.currentIndex}
            />
          ))}
        </Carousel>
      </CarouselArrows>
    </Card>
  );
}

CarouselHero.propTypes = {
  data: PropTypes.array,
};

// ----------------------------------------------------------------------

function CarouselItem({ item, active }) {
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

            // ...bgGradient({
            //   direction: "to top",
            //   startColor: `${theme.palette.grey[900]} 0%`,
            //   endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
            // }),
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
