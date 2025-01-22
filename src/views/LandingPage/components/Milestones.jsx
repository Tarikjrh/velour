import { Box, Card, Container, Stack, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import useInView from "../../../hooks/use-in-view";

export default function Milestones() {
  const [ref, isInView] = useInView();

  const data = [
    { title: "Years of Experience", count: 10 },
    { title: "Happy Clients", count: 1000 },
    { title: "Projects Completed", count: 5000 },
    { title: "Awards Won", count: 20 },
  ];

  return (
    <Box ref={ref} bgcolor={"#1F312D"} sx={{ py: 3 }}>
      <Container>
        <Typography variant="h5" color="white" sx={{ mb: 2 }}>
          Company Milestones
        </Typography>
        <LazyMotion features={domAnimation}>
          <Grid container spacing={3}>
            {data.map(({ title, count }) => (
              <Grid item key={title} xs={6} md={3}>
                <Card
                  sx={{
                    border: "2px solid #FFFFFF",
                    backgroundColor: "#283935",
                    width: "100%",
                    height: "100%",
                    p: 3,
                  }}
                >
                  <Stack spacing={0.5}>
                    <Typography variant="h6" color="#D6DDE6">
                      {title}
                    </Typography>
                    <AnimatedNumber target={count} trigger={isInView} />
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </LazyMotion>
      </Container>
    </Box>
  );
}

function AnimatedNumber({ target, trigger }) {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ value: 0 }}
        animate={trigger ? { value: target } : { value: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onUpdate={(latest) => setCurrentValue(Math.floor(latest.value))}
      />
      <Typography variant="h3" color="#D6DDE6">
        {currentValue}+
      </Typography>
    </LazyMotion>
  );
}
