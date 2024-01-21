import React from "react";
import SectionLayout from "./SectionLayout";
import { Box, BoxProps, Button, Grid, Link, Typography } from "@mui/material";
import { colors } from "@/theme/colors";

const details = {
  title: "Furniture",
  items: 5,
  image:
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const GalleryBox = ({ gridArea }: Partial<BoxProps>) => (
  <Box
    gridArea={gridArea}
    sx={{
      backgroundImage: `url(${details.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography
        fontSize="14px"
        fontWeight="bold"
        color={colors.navGreen}
      >{`${details.items} items`}</Typography>
      <Typography variant="h1" py={1}>
        {details.title?.toUpperCase()}
      </Typography>
      <Link underline="none" fontWeight="bold" color="black">
        Read More
      </Link>
    </Box>
  </Box>
);

export default function FurnitureGallery() {
  return (
    <SectionLayout>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "100%", md: "425px auto auto" }}
        gridTemplateRows="300px 300px"
        gridTemplateAreas={{
          md: `
          "one two two"
          "one three four"
        `,
          xs: `
          "one"
          "two"
          "three"
          "four"
        `,
        }}
        gap={2}
      >
        <GalleryBox gridArea="one" />
        <GalleryBox gridArea="two" />
        <GalleryBox gridArea="three" />
        <GalleryBox gridArea="four" />
      </Box>
    </SectionLayout>
  );
}
