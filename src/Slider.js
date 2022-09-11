import React,{ useState } from "react";
import {FaArrowRight} from "react-icons/fa"
import {FaArrowLeft} from "react-icons/fa"
import { sliderData } from "./sliderdata";
import Header from "./Header";
const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState;
  <div className="slider">
    {/* <img src={require("./bannerimg.webp")} alt="" className="bannerimg"/> */}
    <FaArrowLeft />
    <FaArrowRight />
    {sliderData.map((slide, index) => {
      return (
        <>
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <img src={slide.image} alt="Image Not Found" />
            )}
          </div>
        </>
      );
    })}
  </div>;
};

export default Slider;