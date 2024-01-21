import BestServices from "@/components/sections/BestServices";
import FeaturedPosts from "@/components/sections/FeaturedPosts";
import FurnitureGallery from "@/components/sections/FurnitureGallery";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";
import { Box, Container } from "@mui/material";
import React from "react";

export default function HomePage() {
  return (
    <Box>
      <FurnitureGallery />
      <BestServices />
      <FeaturedPosts />
      <Testimonials />
      <HeroSection />
    </Box>
  );
}
