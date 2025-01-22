// import { Container, Stack, Typography } from "@mui/material";
// import Image from "../../../components/Image";
// import strengths_data from "../utils/strengths_data";
// import Scrollbar from "../../../components/scrollbar";

// export default function Strengths() {
//   return (
//     <Container sx={{ overflow: "hidden" }}>
//       <Typography
//         variant="section_title"
//         component={"h1"}
//         sx={{ textAlign: "center", mb: 2 }}
//       >
//         Our Key Strengths
//       </Typography>
//       <Scrollbar>
//         <Stack
//           direction={"row"}
//           spacing={4}
//           sx={{ width: "130%", overflow: "hidden" }}
//         >
//           {strengths_data.map((item) => {
//             return (
//               <Stack key={item.title} spacing={2}>
//                 <Image
//                   src={item.img}
//                   ratio="3/4"
//                   sx={{ borderRadius: "20px", height: "100%" }}
//                 />
//                 <Stack>
//                   <Typography variant="h5">{item.title}</Typography>
//                   <Typography sx={{ color: "#8AA187" }}>
//                     {item.description}
//                   </Typography>
//                 </Stack>
//               </Stack>
//             );
//           })}
//         </Stack>
//       </Scrollbar>
//     </Container>
//   );
// }

// import { Container, Stack, Typography } from "@mui/material";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "../../../components/Image";
// import strengths_data from "../utils/strengths_data";

// gsap.registerPlugin(ScrollTrigger);

// export default function Strengths() {
//   const containerRef = useRef(null); // For the outer container
//   const scrollContentRef = useRef(null); // For the scrollable content

//   useEffect(() => {
//     const container = containerRef.current;
//     const scrollContent = scrollContentRef.current;

//     if (container && scrollContent) {
//       const scrollWidth = scrollContent.scrollWidth;
//       const containerWidth = container.offsetWidth;

//       // Ensure horizontal scroll works by animating the scrollContent
//       gsap.to(scrollContent, {
//         x: -(scrollWidth - containerWidth),
//         ease: "none",
//         scrollTrigger: {
//           markers: true, // For debugging
//           trigger: container,
//           start: "center center", // Start when the container is at the top
//           end: `+=${scrollWidth - containerWidth}`, // End when the full content is scrolled
//           scrub: 1, // Smooth syncing with scrolling
//           pin: true, // Pin the container during the animation
//           anticipatePin: 1, // Prevent flickering
//         },
//       });
//     }
//   }, []);

//   return (
//     <Container
//       ref={containerRef}
//       sx={{
//         overflow: "hidden",
//         position: "relative",
//         height: "100vh", // Ensure full viewport height for pinning
//       }}
//     >
//       <Typography
//         variant="section_title"
//         component="h1"
//         sx={{ textAlign: "center", mb: 2 }}
//       >
//         Our Key Strengths
//       </Typography>
//       <div
//         ref={scrollContentRef}
//         style={{
//           display: "flex",
//           gap: "32px", // Equivalent to Stack spacing={4}
//           width: "max-content", // Ensure content fits its full width
//         }}
//       >
//         {strengths_data.map((item) => (
//           <Stack key={item.title} spacing={2}>
//             <Image
//               src={item.img}
//               ratio="3/4"
//               sx={{ borderRadius: "20px", height: "100%" }}
//             />
//             <Stack>
//               <Typography variant="h5">{item.title}</Typography>
//               <Typography sx={{ color: "#8AA187" }}>
//                 {item.description}
//               </Typography>
//             </Stack>
//           </Stack>
//         ))}
//       </div>
//     </Container>
//   );
// }

// import { Container, Stack, Typography } from "@mui/material";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "../../../components/Image";
// import strengths_data from "../utils/strengths_data";

// gsap.registerPlugin(ScrollTrigger);

// export default function Strengths() {
//   const containerRef = useRef(null); // Ref for the outer container
//   const scrollContentRef = useRef(null); // Ref for the scrollable content

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const scrollContent = scrollContentRef.current;

//       if (scrollContent) {
//         const scrollWidth = scrollContent.scrollWidth;
//         const containerWidth = containerRef.current.offsetWidth;

//         gsap.to(scrollContent, {
//           x: -(scrollWidth - containerWidth) * 1.2, // Full horizontal scroll distance
//           ease: "none",
//           scrollTrigger: {
//             markers: true, // For debugging
//             trigger: containerRef.current,
//             start: "top top+=15%",
//             end: `+=${scrollWidth - containerWidth} end+=15%`, // Extend scroll distance (2x)
//             scrub: 0, // Smooth scrolling
//             pin: true, // Pin the container during the scroll
//             anticipatePin: 1, // Prevent flickering
//             pinSpacer: true, // Ensure the container's height is maintained
//             pinSpacing: true, // Disable automatic pin spacing
//           },
//         });
//       }
//     }, containerRef); // Bind GSAP animations to this component's lifecycle

//     return () => ctx.revert(); // Clean up animations on unmount
//   }, []);

//   return (
//     <Container
//       ref={containerRef}
//       sx={{
//         overflow: "hidden",
//         position: "relative",
//         height: "100vh", // Full viewport height for pinning
//       }}
//     >
//       <Typography
//         variant="section_title"
//         component="h1"
//         sx={{ textAlign: "center", mb: 2 }}
//       >
//         Our Key Strengths
//       </Typography>
//       <div
//         ref={scrollContentRef}
//         style={{
//           display: "flex",
//           gap: "32px", // Spacing between items
//           width: "max-content", // Ensures horizontal scrolling works
//         }}
//       >
//         {strengths_data.map((item) => (
//           <Stack key={item.title} spacing={2}>
//             <Image
//               src={item.img}
//               ratio="3/4"
//               sx={{ borderRadius: "20px", height: "100%" }}
//             />
//             <Stack>
//               <Typography variant="h5">{item.title}</Typography>
//               <Typography sx={{ color: "#8AA187" }}>
//                 {item.description}
//               </Typography>
//             </Stack>
//           </Stack>
//         ))}
//       </div>
//     </Container>
//   );
// }

import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../../../components/Image";
import strengths_data from "../utils/strengths_data";

gsap.registerPlugin(ScrollTrigger);

export default function Strengths() {
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
                x: -(scrollWidth - containerWidth) * 1.2, // Full horizontal scroll distance
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
                x: -(scrollWidth - containerWidth) * 1.1, // Full horizontal scroll distance
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
        Our Key Strengths
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
              }}
            />
            <Stack>
              <Typography variant="h5">{item.title}</Typography>
              <Typography sx={{ color: "#8AA187" }}>
                {item.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
