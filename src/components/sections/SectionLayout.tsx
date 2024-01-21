import { Box, BoxProps } from "@mui/material";
import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
}

export default function SectionLayout({
  children,
  ...rest
}: Partial<BoxProps> & SectionLayoutProps) {
  return (
    <Box px={{ md: 16, xs: 4 }} py={4} {...rest}>
      {children}
    </Box>
  );
}
