import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../../../components/Image";
import strengths_data from "../utils/strengths_data";
import { useLocales } from "../../../locales";
import { useTheme } from "@emotion/react";

gsap.registerPlugin(ScrollTrigger);

export default function Strengths() {
  const { t } = useLocales();
  const { direction: themeDirection } = useTheme();
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContent = scrollContentRef.current;

      const mm = gsap.matchMedia(); // GSAP MatchMedia instance

      mm.add(
        {
          // Desktop
          isDesktop: "(min-width: 768px)",
          // Mobile
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;

          if (scrollContent) {
            const scrollWidth = scrollContent.scrollWidth;
            const containerWidth = containerRef.current.offsetWidth;

            // Define different animations based on screen size

            // Desktop animation
            if (isDesktop) {
              gsap.to(scrollContent, {
                x:
                  themeDirection === "ltr"
                    ? -(scrollWidth - containerWidth) * 1.2
                    : +(scrollWidth - containerWidth) * 1.2, // Full horizontal scroll distance
                ease: "none",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top top+=15%",
                  end: `+=${scrollWidth - containerWidth} end+=15%`, // Extend scroll distance (2x)
                  scrub: 1,
                  pin: true,
                  anticipatePin: 1,
                  pinSpacer: true, // Ensure the container's height is maintained
                  pinSpacing: true, // Disable automatic pin spacing
                },
              });
            } else if (isMobile) {
              // Mobile animation (shorter distance)
              gsap.to(scrollContent, {
                x:
                  themeDirection === "ltr"
                    ? -(scrollWidth - containerWidth) * 1.1
                    : +(scrollWidth - containerWidth) * 1.1, // Full horizont// Full horizontal scroll distance
                ease: "none",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top top+=15%",
                  end: `+=${scrollWidth - containerWidth} end+=15%`, // Extend scroll distance (2x)
                  scrub: 1,
                  pin: true,
                  anticipatePin: 1,
                  pinSpacer: true, // Ensure the container's height is maintained
                  pinSpacing: true, // Disable automatic pin spacing
                },
              });
            }
          }
        }
      );

      return () => {
        mm.revert(); // Revert animations when the component unmounts
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Container
      ref={containerRef}
      sx={{
        overflow: "hidden",
        position: "relative",
        height: "100vh", // Full viewport height for pinning
      }}
    >
      <Typography
        variant="section_title"
        component="h1"
        sx={{ textAlign: "center", mb: 2 }}
      >
        {t("strengths.title")}
      </Typography>
      <Box
        ref={scrollContentRef}
        sx={{
          display: "flex",
          gap: "32px", // Spacing between items
          flexWrap: "nowrap", // Prevent wrapping for desktop
          width: "max-content", // Ensure proper horizontal scrolling
        }}
      >
        {strengths_data.map((item) => (
          <Stack key={item.title} spacing={2}>
            <Image
              src={item.img}
              ratio="3/4"
              sx={{
                borderRadius: "20px",
                height: "100%",
                maxWidth: "100%", // Ensure images resize properly on mobile
                minWidth: "407px", // Ensure proper horizontal scrolling
              }}
            />
            <Stack>
              <Typography variant="h5">{t(`${item.title}`)}</Typography>
              <Typography sx={{ color: "#8AA187" }}>
                {t(`${item.description}`)}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
