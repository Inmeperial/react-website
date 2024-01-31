import React from "react";
import { Box } from "@mui/material";
import ImageSlider from "../components/Slider";
import Welcome from "../components/Welcome";
import AreasSection from "../components/AreasSection";

const Home = () => {
  return (
    <Box>
      <ImageSlider />
      <Welcome />
      <AreasSection />
    </Box>
  );
};

export default Home;
