import { Box } from "@mui/material";
import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <Box px={8} py={4}>
      {children}
    </Box>
  );
}
