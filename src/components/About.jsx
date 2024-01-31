import React from "react";
import { FaMale, FaGlobe } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className='WrapperTotal'>
      <p className='TextTitle'>OUR FLEET</p>
      <p className='Text'>Browse Our Limos</p>

      <div className='WrapperImages'>
        <div className='ImagesContainer'>
          <div
            className='Image'
            style={{ backgroundImage: `url(/image_10-1-768x512.jpg)` }}
          >
            <div className='ImageText'>
              <p className='ImageText2'>Audi A8</p>
            </div>
          </div>
          <div className='FaWrapper'>
            <FaMale className='FaStyle' />
            <p className='FaText'>4</p>
            <FaGlobe className='FaStyle' />
            <p className='FaText'>4</p>
          </div>
        </div>

        <div className='ImagesContainer'>
          <div
            className='Image'
            style={{ backgroundImage: `url(/image_10-1-768x512.jpg)` }}
          >
            <div className='ImageText'>
              <p className='ImageText2'>Audi A8</p>
            </div>
          </div>

          <div className='FaWrapper'>
            <FaMale className='FaStyle' />
            <p className='FaText'>4</p>
            <FaGlobe className='FaStyle' />
            <p className='FaText'>4</p>
          </div>
        </div>

        <div className='ImagesContainer'>
          <div
            className='Image'
            style={{ backgroundImage: `url(/image_10-1-768x512.jpg)` }}
          >
            <div className='ImageText'>
              <p className='ImageText2'>Audi A8</p>
            </div>
          </div>

          <div className='FaWrapper'>
            <FaMale className='FaStyle' />
            <p className='FaText'>4</p>
            <FaGlobe className='FaStyle' />
            <p className='FaText'>4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
