import React from "react";
import SectionLayout from "./SectionLayout";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "@/theme/colors";

export default function HeroSection() {
  return (
    <SectionLayout
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center left",
        height: "80vh",
      }}
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width={{ md: "50%", xs: "100%" }} textAlign="center">
          <Typography fontWeight="bold" color="primary">
            Designing Better Experience
          </Typography>
          <Typography variant="h1" fontSize={40} my={4}>
            Problems trying to resolve the conflict between
          </Typography>
          <Typography px={10}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </Typography>
          <Typography
            fontWeight="bold"
            fontSize={30}
            color={colors.navGreen}
            my={8}
          >
            $16.48
          </Typography>
          <Button
            variant="contained"
            sx={{ color: "white", fontWeight: "bold", px: 2 }}
          >
            Add your call to action
          </Button>
        </Box>
      </Box>
    </SectionLayout>
  );
}
