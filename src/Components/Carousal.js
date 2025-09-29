import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultiCarousel = () => {
  const images = [
    "/images/carousal/1.jpeg",
    "/images/carousal/2.jpeg",
    "/images/carousal/3.jpeg",
    "/images/carousal/4.jpeg",
    "/images/carousal/5.jpeg",
    "/images/carousal/6.jpeg",
    "/images/carousal/7.jpeg",
    "/images/carousal/8.png",
  ];

  // Custom Arrow Components
  const NextArrow = ({ onClick }) => (
    <div
      className="custom-arrow next-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "-25px",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "10px",
        color: "white",
      }}
    >
      <FaChevronRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow prev-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "-25px",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "10px",
        color: "white",
      }}
    >
      <FaChevronLeft />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="multi-carousel-container my-5 position-relative">
      <h1 style={{ margin: "30px 0" }}>New and noteworthy</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="px-2">
            <img
              src={img}
              alt={`img-${idx}`}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiCarousel;
