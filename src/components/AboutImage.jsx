import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "../assets/img02.jpg";
import {
  FlexColumnBox,
  SwiperPicture,
  SwiperText,
  SwiperTitle,
} from "../styles/CustomMUI";

const AboutImage = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{ height: "100dvh" }}>
      <Box
        sx={{
          ...SwiperPicture,
          backgroundImage: `url(${Image})`,
          height: "100%",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            ...FlexColumnBox,
            justifyContent: "center",
            textAlign: "center",
            height: "100dvh",
          }}
        >
          <Typography variant='h3' sx={{ ...SwiperTitle }}>
            Somos XYZ
          </Typography>
          <Typography
            variant='body1'
            sx={
              isMobile
                ? {
                    ...SwiperText,
                    my: "1rem",
                    color: "title.main",
                    width: "70%",
                  }
                : {
                    ...SwiperText,
                    my: "1rem",
                    color: "title.main",
                    width: "30%",
                  }
            }
          >
            Lorem ipsum dolor sit amet, vide tincidunt mel id, te his elit
            fuisset euripidis, offendit oportere voluptatibus in sit.
          </Typography>
          <Typography
            variant='body1'
            sx={
              isMobile
                ? {
                    width: "70%",
                    color: "text.main",
                  }
                : {
                    width: "30%",
                    color: "text.main",
                  }
            }
          >
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
