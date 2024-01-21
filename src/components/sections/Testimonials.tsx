import React from "react";
import SectionLayout from "./SectionLayout";
import { Avatar, Box, Grid, Rating, Stack, Typography } from "@mui/material";

const images = [
  "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbXB8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1551380701-5dd33d5b5d06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbXB8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1530107973768-581951e62d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbXB8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1472464806/photo/decorative-antique-edison-style-filament-light-bulbs-hanging-an-electrician-is-installing.webp?b=1&s=170667a&w=0&k=20&c=yGIwscmRhRHGTFDhcCgSJViem_OceBHsITseBwTQj8s=",
  "https://media.istockphoto.com/id/1485316858/photo/the-ceiling-alternates-with-embedded-lighting.webp?b=1&s=170667a&w=0&k=20&c=rFVEhY1hy05irOULStIoz72jxokXbyy1onL1ZDgXxsI=",
  "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbXB8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1551380701-5dd33d5b5d06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhbXB8ZW58MHx8MHx8fDA%3D",
];

export default function Testimonials() {
  return (
    <SectionLayout>
      <Grid container columnSpacing={3}>
        <Grid item md={6} xs={12} p={4}>
          <Stack height="100%" alignItems="center" justifyContent="center">
            <Typography variant="h1" textAlign="center" mb={4}>
              What they say about us
            </Typography>
            <Avatar sx={{ height: 64, width: 64 }} />
            <Box my={2}>
              <Rating value={4} />
            </Box>
            <Typography textAlign="center" fontWeight="bold" color="gray">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </Typography>
            <Typography fontWeight="bold" color="primary" mt={2}>
              Regina Miles
            </Typography>
            <Typography fontWeight="bold">Designer</Typography>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12} p={4}>
          <Grid container rowSpacing={1} columnSpacing={1}>
            {images.map((image) => (
              <Grid item xs={4}>
                <Box
                  component="img"
                  src={image}
                  sx={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: 1 / 1,
                    objectFit: "cover",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionLayout>
  );
}
