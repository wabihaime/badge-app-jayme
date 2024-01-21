import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SectionLayout from "../sections/SectionLayout";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const links = [
  {
    title: "Company Info",
    routes: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    routes: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    routes: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    routes: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

export default function Footer() {
  return (
    <Box>
      <SectionLayout bgcolor="#fafafa" py={8}>
        <Grid container>
          <Grid item md={10} xs={12}>
            <Typography variant="h1">Bandage</Typography>
          </Grid>
          <Grid item md={2} xs={12}>
            <ButtonGroup>
              <IconButton color="primary">
                <Facebook />
              </IconButton>
              <IconButton color="primary">
                <Instagram />
              </IconButton>
              <IconButton color="primary">
                <Twitter />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      </SectionLayout>
      <SectionLayout>
        <Grid container>
          {links.map((group) => (
            <Grid key={group.title} item md={2} xs={12} my={1}>
              <Typography fontWeight="bold">{group.title}</Typography>
              {group.routes.map((route) => (
                <Box my={1}>
                  <Link fontWeight="bold" color="gray" underline="none">
                    {route}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}
          <Grid item md={4} xs={12} my={1}>
            <Typography fontWeight="bold" mb={1}>
              Get in touch
            </Typography>
            <Box display="flex">
              <InputBase
                sx={{
                  flex: 1,
                  border: 1,
                  borderColor: "#e3e3e3",
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                  height: 48,
                  px: 2,
                }}
                placeholder="Your Email"
              />
              <Button
                variant="contained"
                sx={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  color: "white",
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Typography fontSize={11} color="gray" mt={0.5}>
              Lorem ipsum
            </Typography>
          </Grid>
        </Grid>
      </SectionLayout>
    </Box>
  );
}
