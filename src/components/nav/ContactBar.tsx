import { colors } from "@/theme/colors";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  PhoneOutlined,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function ContactBar() {
  return (
    <Grid
      container
      spacing={2}
      padding={2}
      sx={{
        display: { xs: "none", md: "flex" },
        backgroundColor: colors.navGreen,
        color: colors.white,
        fontWeight: "bold",
      }}
    >
      <Grid item md={2}>
        <Stack direction="row">
          <PhoneOutlined />
          <Typography fontWeight={"bold"}>(225) 555-0118</Typography>
        </Stack>
      </Grid>
      <Grid item md={2}>
        <Stack direction="row">
          <MailOutline />
          <Typography fontWeight={"bold"}>(225) 555-0118</Typography>
        </Stack>
      </Grid>
      <Grid item md>
        <Typography textAlign={"center"} fontWeight={"bold"}>
          Follow Us and get a chance to win 80% off
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Stack direction="row" justifyContent="end" width={"100%"} spacing={1}>
          <Typography fontWeight={"bold"}>Follow Us:</Typography>
          <Instagram />
          <YouTube />
          <Facebook />
          <Twitter />
        </Stack>
      </Grid>
    </Grid>
  );
}
