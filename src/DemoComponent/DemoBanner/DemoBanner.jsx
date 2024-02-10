import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/demoBanner.css";

const IMAGE_MAP = [
  { id: 1, img: "./portfolio.png" },
  { id: 2, img: "./insta.png" },
  { id: 3, img: "./Facebook_icon.svg.png" },
  { id: 4, img: "./LinkedIn.png" },
  { id: 5, img: "./portfolio.png" },
];

const SLIDES = [
  { id: 1, src: "https://unbxd.com/integrations/search/" },
  { id: 2, src: "https://manas-srivastava-portfolio.netlify.app/" },
  { id: 3, src: "https://www.example.com/3" },
  { id: 4, src: "https://www.example.com/3" },
  { id: 5, src: "https://www.example.com/3" },
];

const DemoBanner = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  useEffect(() => {
    // No need to initialize Slick here as we will be using react-slick
    // We can handle slide changes using state and props in React
  }, []);

  const handleSlideClick = (slideIndex) => {
    // Set the activeSlideIndex when a slide is clicked in the second slider
    setActiveSlideIndex(slideIndex);
  };

  const handleAfterChange = (currentSlide) => {
    // Set the activeSlideIndex after a slide change in the second slider
    setActiveSlideIndex(currentSlide);
  };

  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "",

    beforeChange: (current, next) => setActiveSlideIndex(next),
  };

  const settings2 = {
    className: "slider slider-nav",
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    focusOnSelect: true,
    afterChange: handleAfterChange,
  };

  let FigmaSlides = [];

  FigmaSlides = IMAGE_MAP.map((slide, index) => {
    let slideCss = `Slide`;
    console.log("activeSlideIndex", activeSlideIndex);
    console.log("slide.id", slide.id);
    if (activeSlideIndex == slide.id) {
      slideCss += " selected-Slide";
    }
    return (
      <div key={slide.id}>
        <iframe
          frameborder="0"
          title={`Slide ${slide.id}`}
          src={SLIDES[index].src}
          className={slideCss}
        ></iframe>
      </div>
    );
  });

  return (
    <div className="main first-">
      <div className="img-card-slider">
        <Slider {...settings1}>{FigmaSlides}</Slider>
      </div>

      <br />
      <br />
      <Slider {...settings2}>
        {IMAGE_MAP.map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              alt={`Slide ${item.id}`}
              className={`slider-img ${
                activeSlideIndex === item.id - 1 ? "selected" : ""
              }`}
              onClick={() => handleSlideClick(item.id - 1)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DemoBanner;
