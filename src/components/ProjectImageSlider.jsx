import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Swiper.css";

import { Box, useMediaQuery } from "@mui/material";

const ProjectImageSlider = ({ images }) => {
  const isNet = useMediaQuery("(min-width:1024px)");
  const isPc = useMediaQuery("(min-width:1600px)");

  return (
    <Box sx={isPc ? { mx: "300px" } : isNet ? { mx: "150px" } : {}}>
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
              style={{ width: "100%", maxHeight: "660px", objectFit: "cover" }}
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
