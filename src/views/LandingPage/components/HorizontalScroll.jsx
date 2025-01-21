import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useTransform,
} from "framer-motion";

export default function HorizontalScrollSection() {
  const sectionRef = useRef(null);
  const scrollY = useMotionValue(0); // Track vertical scroll within the section
  const x = useTransform(scrollY, (scrollValue) => -scrollValue); // Map vertical to horizontal scroll

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      const sectionTop = section.offsetTop; // Section's top position in the document
      const sectionHeight = section.offsetHeight; // Section's height
      const scrollTop = window.scrollY; // Current vertical scroll position

      // Check if the user is scrolling within the section
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        const sectionScrollY = scrollTop - sectionTop; // Calculate the scroll offset within the section
        scrollY.set(sectionScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <Box>
      {/* Normal App Content Above */}
      <Box
        sx={{
          height: "100vh",
          bgcolor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Normal Section Above</h1>
      </Box>

      {/* Horizontal Scrolling Section */}
      <Box
        ref={sectionRef}
        sx={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <LazyMotion features={domAnimation}>
          <m.div
            style={{
              display: "flex",
              x, // Horizontal transform
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw",
            }}
          >
            {/* Horizontal scrolling content */}
            {[...Array(5)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "100vw",
                  height: "100vh",
                  bgcolor: index % 2 === 0 ? "lightblue" : "lightgreen",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>Section {index + 1}</h1>
              </Box>
            ))}
          </m.div>
        </LazyMotion>
      </Box>

      {/* Normal App Content Below */}
      <Box
        sx={{
          height: "100vh",
          bgcolor: "lightcoral",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Normal Section Below</h1>
      </Box>
    </Box>
  );
}
