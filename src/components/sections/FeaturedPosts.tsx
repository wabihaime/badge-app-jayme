import React from "react";
import SectionLayout from "./SectionLayout";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Alarm, ChevronRight, ShowChart } from "@mui/icons-material";
import { colors } from "@/theme/colors";

const posts = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1661607497564-b325655b20b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1671269704807-5479855d03fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
];

const PostCard = ({ image, title, description }: any) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: "auto", width: "100%", aspectRatio: 1 / 1 }}
        image={image}
        title="image"
      />
      <CardContent>
        <Stack direction="row" columnGap={3}>
          <Typography fontSize={"11px"} color="primary">
            Google
          </Typography>
          <Typography fontSize={"11px"}>Trending</Typography>
          <Typography fontSize={"11px"}>Now</Typography>
        </Stack>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Stack direction="row" justifyContent="space-between" py={2}>
          <Button size="small">
            <Alarm color="primary" fontSize="small" />
            <Typography fontSize={"11px"} ml={1} color="black">
              22 April 2021
            </Typography>
          </Button>
          <Button size="small">
            <ShowChart sx={{ color: colors.navGreen }} fontSize="small" />
            <Typography fontSize={"11px"} ml={1} color="black">
              22 April 2021
            </Typography>
          </Button>
        </Stack>
        <CardActions>
          <Button size="small">
            Learn More <ChevronRight htmlColor="black" />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default function FeaturedPosts() {
  return (
    <SectionLayout>
      <Box textAlign="center" py={8}>
        <Typography fontWeight="bold" color="primary">
          Practice Advice
        </Typography>
        <Typography variant="h1" py={1}>
          Featured Posts
        </Typography>
      </Box>
      <Grid container columnSpacing={2}>
        {posts.map((post) => (
          <Grid key={post.id} item md={4}>
            <PostCard {...post} />
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}
