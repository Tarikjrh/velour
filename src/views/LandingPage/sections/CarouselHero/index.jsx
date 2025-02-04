import PropTypes from "prop-types";
import Card from "@mui/material/Card";

// them

// components
import Carousel, {
  CarouselArrows,
  CarouselDots,
  useCarousel,
} from "../../../../components/carousel";
import CarouselItem from "./components/CarouselItem";

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
