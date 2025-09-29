import React from "react";
import "./CSS/Entry.css";
import Slider from "react-slick";
import Services from "../Components/Services";
import Carousal from "../Components/Carousal";
import Upper from "../Components/Upper";

const Entry = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1, // full-width
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  



  const carouselGroups = [
    ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"], // Slide 1
    ["/images/4.jpg", "/images/5.jpg", "/images/6.jpg"], // Slide 2
    ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"], // Slide 3
  ];

  return (
    <div className="entry py-5">
      <div className="container">
        <Upper />
        {/* Carousel Section */}
        <div className="carousal mt-5">
          {/* Carousel Section */}
          <div className="carousal mt-5">
            <Slider {...settings}>
              {carouselGroups.flat().map((img, idx) => (
                <div key={idx} className="px-2">
                  <img
                    src={img}
                    alt={`slide-${idx}`}
                    className="img-fluid rounded shadow-sm"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Slider>
          </div>

        </div>


        {/* New and noteworthy carousel */}
        <h2 style={{margin:"30px 0"}}>New and noteworthy</h2>
        <Carousal />

        <Services />
      </div>
    </div>

  );
};

export default Entry
