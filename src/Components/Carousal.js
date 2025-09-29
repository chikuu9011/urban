import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousal() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // full width card on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    "images/carousal/1.jpeg",
    "images/carousal/2.jpeg",
    "images/carousal/3.jpeg",
    "images/carousal/4.jpeg",
    "images/carousal/5.jpeg",
    "images/carousal/6.jpeg",
    "images/carousal/7.jpeg",
    "images/carousal/8.png",
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousal;
