import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Swiper.css";

import { Box, useMediaQuery } from "@mui/material";

const ProjectImageSlider = ({ images }) => {
  const isMobile = useMediaQuery("(max-width: 768px");

  return (
    <Box sx={isMobile ? {} : { mx: "5dvw" }}>
      <Swiper
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              style={{
                width: "100%",
                maxHeight: "750px",
                textAlign: "center",
                objectFit: "cover",
              }}
              src={image}
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectImageSlider;
