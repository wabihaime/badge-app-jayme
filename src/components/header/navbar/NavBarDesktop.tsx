import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { NavType, links } from "./links";
import {
  FavoriteBorder,
  KeyboardArrowDown,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export default function NavBarDesktop() {
  return (
    <Grid
      container
      padding={2}
      sx={{
        display: { xs: "none", md: "flex" },
      }}
    >
      <Grid item md={3}>
        <Button>
          <Typography variant="h1" color="black">
            Badge
          </Typography>
        </Button>
      </Grid>
      <Grid item md>
        {links.map((link: NavType) => (
          <Button sx={{ color: "black", fontWeight: "bold" }}>
            {link.label}
            {link.subRoutes && <KeyboardArrowDown />}
          </Button>
        ))}
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ fontWeight: "bold" }}>
          <PersonOutline />
          Login/Register
        </Button>
        <IconButton color="primary">
          <Search />
        </IconButton>
        <IconButton color="primary">
          <ShoppingCartOutlined />
        </IconButton>
        <IconButton color="secondary">
          <FavoriteBorder />
        </IconButton>
      </Grid>
    </Grid>
  );
}
