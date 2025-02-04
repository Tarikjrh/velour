import { Box, Card, Container, Stack, Typography, Grid } from "@mui/material";

export default function ApartSection() {
  const data = [
    {
      title: "Attention to Detail",
      subtitle:
        "Every uniform is thoughtfully designed and tailored with precision.",
    },
    {
      title: "Customizable Options",
      subtitle:
        "A wide range of fabrics, styles, and designs to suit your business identity.",
    },
    {
      title: "Commitment to Quality",
      subtitle: "Our uniforms are crafted with durability and comfort in mind.",
    },
  ];

  return (
    <Box bgcolor={"#1F312D"} sx={{ py: 3 }}>
      <Container>
        <Typography variant="h5" color="white" sx={{ mb: 2 }}>
          What Sets Us Apart
        </Typography>
        <Grid container spacing={3}>
          {data.map(({ title, subtitle }) => (
            <Grid item key={title} xs={12} md={4}>
              <Card
                sx={{
                  border: "1px solid #D6DDE6",
                  backgroundColor: "#283935",
                  width: "100%",
                  height: "100%",
                  p: 3,
                }}
              >
                <Stack spacing={0.5}>
                  <Typography variant="h6" color="#fff">
                    {title}
                  </Typography>
                  <Typography variant="body1" color="#D6DDE6">
                    {subtitle}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
