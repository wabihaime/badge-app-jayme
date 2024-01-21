import BestServices from "@/components/sections/BestServices";
import FeaturedPosts from "@/components/sections/FeaturedPosts";
import FurnitureGallery from "@/components/sections/FurnitureGallery";
import { Container } from "@mui/material";
import React from "react";

export default function HomePage() {
  return (
    <Container>
      <FurnitureGallery />
      <BestServices />
      <FeaturedPosts />
    </Container>
  );
}
