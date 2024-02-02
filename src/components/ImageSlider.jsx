import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Swiper.css";

import Image01 from "../assets/img01.jpg";
import Image02 from "../assets/img02.jpg";
import Image03 from "../assets/img03.jpg";
import { Box, Typography } from "@mui/material";
import {
  SwiperPicture,
  SwiperTextContainer,
  SwiperTitle,
  SwiperText,
  ShadowTextWhite,
  ShadowTextBlack
} from "../styles/CustomMUI";

const images = [
  {
    url: Image01,
    title: "First Class . WorldWide",
    text: "A chauffer Service for Any Purpose",
  },
  {
    url: Image02,
    title: "First Class . WorldWide",
    text: "A chauffer Service for Any Purpose",
  },
  {
    url: Image03,
    title: "First Class . WorldWide",
    text: "A chauffer Service for Any Purpose",
  },
];

const ImageSlider = () => {
  return (
    <Box>
      <Swiper
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{ ...SwiperPicture, backgroundImage: `url(${image.url})` }}
            >
              <Box sx={{ ...SwiperTextContainer }}>
                <Typography variant='h2' sx={{ ...SwiperTitle, ...ShadowTextBlack }}>
                  {image.title}
                </Typography>
                <Typography
                  paragraph={true}
                  variant='caption'
                  sx={{ ...SwiperText, ...ShadowTextBlack }}
                >
                  {image.text}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
