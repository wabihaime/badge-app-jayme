import { Box, Grid } from "@mui/material";
import React from "react";
import ContactBar from "./ContactBar";
import Navbar from "./navbar";

export default function TopBar() {
  return (
    <Box>
      <ContactBar />
      <Navbar />
    </Box>
  );
}
