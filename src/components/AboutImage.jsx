import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../assets/img02.jpg";
import {
  FlexColumnBox,
  SwiperPicture,
  SwiperText,
  SwiperTitle,
} from "../styles/CustomMUI";

const AboutImage = () => {
  return (
    <Box sx={{ height: "100dvh" }}>
      <Box
        sx={{
          ...SwiperPicture,
          backgroundImage: `url(${Image})`,
          width: "100%",
          height: "100%",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            ...FlexColumnBox,
            justifyContent: "center",
            textAlign: "center",
            width: "100dvw",
            height: "100dvh",
          }}
        >
          <Typography variant='h3' sx={{ ...SwiperTitle }}>
            Somos XYZ
          </Typography>
          <Typography
            variant='body1'
            sx={{ ...SwiperText, my: "1rem", mx: "25%", color: "#eb6f35" }}
          >
            Lorem ipsum dolor sit amet, vide tincidunt mel id, te his elit
            fuisset euripidis, offendit oportere voluptatibus in sit.
          </Typography>
          <Typography variant='body1' sx={{mx: "25%", color:"#008cff"}}>
            Apeirian aliquando te vis, fugit denique salutatus et sed, ei vim
            legendos evertitur. Nulla oblique referrentur his ad, nobis feugiat
            referrentur vim ad, idque debitis fierent usu ut.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutImage;
