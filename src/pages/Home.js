import React from "react";
import "./Home.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <ImageSlider/>
        </div>
    ) 
    
};

export default Home;

// change for an array

function ImageSlider(){
    return (
      <div>
        <Swiper navigation={true} autoplay={{ delay: 2500, disableOnInteraction: true }} modules={[Autoplay, Navigation]} >
          <SwiperSlide>
            <div className="SwiperPicture" style={{ backgroundImage: "url(/img01.jpg)" }}>
              <div className="SwiperTextContainer">
                <p className="SwiperTitle"> First Class . WorldWide </p>
                <p className="SwiperText"> A chauffer Service for Any Purpose </p>
                <button type="button" className="SwiperButton"> CONTACT US </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperPicture" style={{ backgroundImage: "url(/img02.jpg)" }} >
              <div className="SwiperTextContainer">
                <p className="SwiperTitle"> First Class . WorldWide </p>
                <p className="SwiperText"> A chauffer Service for Any Purpose </p>
                <button type="button" className="SwiperButton"> CONTACT US </button>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperPicture" style={{ backgroundImage: "url(/img03.jpg)" }} >
              <div className="SwiperTextContainer">
                <p className="SwiperTitle"> First Class . WorldWide</p>
                <p className="SwiperText"> A chauffer Service for Any Purpose </p>
                <button type="button" className="SwiperButton"> CONTACT US </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      );
}
