import React from "react";
import SectionLayout from "./SectionLayout";
import { Box, Grid, Typography } from "@mui/material";
import {
  Book,
  LocalLibrary,
  MenuBookOutlined,
  TrendingUp,
} from "@mui/icons-material";

const features = [
  {
    icon: <LocalLibrary color="primary" sx={{ fontSize: "60px" }} />,
    title: "Easy Wins",
    body: "Get your best looking smile now!",
  },
  {
    icon: <MenuBookOutlined color="primary" sx={{ fontSize: "60px" }} />,
    title: "Concrete",
    body: "Defalcate is most focused on helping you discover your most beautiful smile.",
  },
  {
    icon: <TrendingUp color="primary" sx={{ fontSize: "60px" }} />,
    title: "Hack Growth",
    body: "Overcame any hurdle or any other problem",
  },
];

export default function BestServices() {
  return (
    <SectionLayout>
      <Box textAlign="center" py={12}>
        <Typography>Featured Products</Typography>
        <Typography variant="h1" py={1}>
          THE BEST SERVICES
        </Typography>
        <Typography>Problems trying to resolve conflict between</Typography>
      </Box>
      <Grid container>
        {features.map((feature) => (
          <Grid
            item
            xs={12}
            md={4}
            px={4}
            key={feature.title}
            textAlign="center"
          >
            {feature.icon}
            <Typography variant="h1" py={2}>
              {feature.title}
            </Typography>
            <Typography>{feature.body}</Typography>
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}
