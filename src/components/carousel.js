import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function useCarousel() {
  const sliderDataHorizontal = ({ dataslides }) => {
    return (
      <div style={{ height: "400px" }}>
        <Slider
          slidesToShow={3}
          dots={false}
          infinite={true}
          speed={500}
          slidesToScroll={1}
        >
          {dataslides}
        </Slider>
      </div>
    );
  };

  const sliderdataverticale = ({ dataslidesveriticale }) => {
    return (
      <div>
        <Slider
          slidesToShow={4}
          dots={false}
          infinite={true}
          speed={500}
          slidesToScroll={1}
          vertical={true} // Positionne le carrousel de manière verticale
          verticalSwiping={true}
        >
          {dataslidesveriticale}
        </Slider>
      </div>
    );
  };

  return {
    sliderDataHorizontal,
    sliderdataverticale,
  };
}

export default useCarousel;
