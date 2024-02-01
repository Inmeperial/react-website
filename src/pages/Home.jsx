import React from "react";
import { Box } from "@mui/material";
import ImageSlider from "../components/ImageSlider";
import Welcome from "../components/Welcome";
import AreasSection from "../components/AreasSection";
import Process from "../components/Process";

const Home = () => {
  return (
    <Box>
      <ImageSlider />
      <Welcome />
      <AreasSection />
      <Process />
    </Box>
  );
};

export default Home;
