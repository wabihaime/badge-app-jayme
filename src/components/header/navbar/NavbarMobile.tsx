"use client";

import { Search, Segment, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavType, mobileLinks } from "./links";

export default function NavbarMobile() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
      }}
    >
      <Grid container padding={2}>
        <Grid item xs>
          <Typography variant="h1">Bandage</Typography>
        </Grid>
        <Grid item xs={5}>
          <Stack direction="row" justifyContent="end">
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlined />
            </IconButton>
            <IconButton onClick={() => setOpenMenu(!openMenu)}>
              <Segment />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <Collapse in={openMenu}>
        {mobileLinks.map((link: NavType) => (
          <Button fullWidth>
            <Link underline="none" color="black">
              <Typography fontSize={30}>{link.label}</Typography>
            </Link>
          </Button>
        ))}
      </Collapse>
    </Box>
  );
}
