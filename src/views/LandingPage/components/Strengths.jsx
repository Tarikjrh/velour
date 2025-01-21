import { Container, Stack, Typography } from "@mui/material";
import Image from "../../../components/Image";
import strengths_data from "../utils/strengths_data";

export default function Strengths() {
  return (
    <Container sx={{ overflow: "hidden" }}>
      <Typography
        variant="section_title"
        component={"h1"}
        sx={{ textAlign: "center", mb: 2 }}
      >
        Our Key Strengths
      </Typography>

      <Stack
        direction={"row"}
        spacing={4}
        sx={{ width: "130%", overflow: "hidden" }}
      >
        {strengths_data.map((item) => {
          return (
            <Stack key={item.title} spacing={2}>
              <Image
                src={item.img}
                ratio="3/4"
                sx={{ borderRadius: "20px", height: "100%" }}
              />
              <Stack>
                <Typography variant="h5">{item.title}</Typography>
                <Typography sx={{ color: "#8AA187" }}>
                  {item.description}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
}

// import { Container, Stack, Typography } from "@mui/material";
// import Image from "../../../components/Image";
// import strengths_data from "../utils/strengths_data";
// import { m } from "framer-motion"; // Import the m shorthand

// export default function Strengths() {
//   return (
//     <Container>
//       <Typography
//         variant="section_title"
//         component={"h1"}
//         sx={{ textAlign: "center", mb: 2 }}
//       >
//         Our Key Strengths
//       </Typography>

//       {/* Use m.div for Framer Motion with lazy loading */}
//       <m.div
//         style={{ overflowX: "auto", display: "flex" }} // Enable horizontal scroll
//         initial={{ x: "-100%" }} // Start position off-screen
//         animate={{ x: 0 }} // Animate to original position
//         transition={{ type: "spring", stiffness: 100 }}
//       >
//         <Stack direction={"row"} spacing={2} sx={{ flexShrink: 0 }}>
//           {strengths_data.map((item) => {
//             return (
//               <Stack key={item.title} spacing={2}>
//                 <Image
//                   src={item.img}
//                   ratio="3/4"
//                   sx={{ borderRadius: "20px", height: "100%" }}
//                 />
//                 <Stack>
//                   <Typography sx={{ fontWeight: "semiBold", fontSize: "28px" }}>
//                     {item.title}
//                   </Typography>
//                   <Typography sx={{ color: "#8AA187" }}>
//                     {item.description}
//                   </Typography>
//                 </Stack>
//               </Stack>
//             );
//           })}
//         </Stack>
//       </m.div>
//     </Container>
//   );
// }
