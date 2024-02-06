import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/demoBanner.css";

const DemoBanner = () => {
  useEffect(() => {
    // No need to initialize Slick here as we will be using react-slick
    // We can handle slide changes using state and props in React
  }, []);

  const handleSlideClick = (slideIndex) => {
    // This function will handle slide changes
    // Slide index starts from 0, so we need to subtract 1
    // We can set activeSlideIndex state to trigger re-rendering and change the slide
    // However, we will keep it simple for demonstration
    // alert("Go to slide " + (slideIndex + 1));
  };

  return (
    <div className="main">
      <Slider
        className="slider slider-for"
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        fade
        asNavFor=".slider-nav"
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index}>
            <h3 className="htClass">{index}</h3>
          </div>
        ))}
      </Slider>
      <Slider
        className="slider slider-nav"
        slidesToShow={3}
        slidesToScroll={1}
        asNavFor=".slider-for"
        dots
        focusOnSelect
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index}>
            <h3 className="htClass">{index}</h3>
          </div>
        ))}
      </Slider>
      {/* <div className="action">
        <a href="#" onClick={() => handleSlideClick(2)}>
          Go to slide 3
        </a>
        <a href="#" onClick={() => handleSlideClick(3)}>
          Go to slide 4
        </a>
        <a href="#" onClick={() => handleSlideClick(4)}>
          Go to slide 5
        </a>
      </div> */}
    </div>
  );
};

export default DemoBanner;
