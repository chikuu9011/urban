import React from "react";
import "./CSS/Entry.css";
import Slider from "react-slick";
import Services from "../Components/Services";
import MultiCarousel from "../Components/Carousal";

const Entry = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  
  const carouselGroups = [
    ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"], // Slide 1
    ["/images/4.jpg", "/images/5.jpg", "/images/6.jpg"], // Slide 2
    ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"], // Slide 3
  ];
  
  return (
    <div className="entry py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 mb-4">
            <div className="E-title">
              <h2 className="mb-3" style={{ fontSize: "24px", fontWeight: "300" }}>
                Home services at your doorstep
              </h2>

              <div className="E-box">
                <h6 className="mb-3 text-muted" style={{ fontSize: "18px", fontWeight: "300" }}>
                  What are you looking for?
                </h6>

                <div className="row g-3">
                  {[
                    { img: "images/broom.png", title: "Women's Salon" },
                    { img: "images/massage.png", title: "Men's Salon" },
                    { img: "images/cleaning.png", title: "Home Cleaning" },
                    { img: "images/kitchen.png", title: "Painting" },
                    { img: "images/makeup.png", title: "Plumber" },
                    { img: "images/broom.png", title: "Electrician" },
                  ].map((item, i) => (
                    <div className="col-4 text-center" key={i}>
                      <div className="e-box-img p-2 bg-light rounded shadow-sm">
                        <img src={item.img} alt={item.title} className="img-fluid" />
                      </div>
                      <div className="e-box-text mt-2">
                        <p className="mb-0">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6">
            <div className="row g-2">
              <div className="col-6">
                <img src="images/massage.jpg" alt="massage" className="img-fluid rounded mb-2 zoom-img" />
                <img src="images/cleaning.jpg" alt="cleaning" className="img-fluid rounded zoom-img" />
              </div>
              <div className="col-6">
                <img src="images/cleaning.jpg" alt="cleaning" className="img-fluid rounded mb-2 zoom-img" />
                <img src="images/massage.jpg" alt="massage" className="img-fluid rounded zoom-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousal mt-5">
          <Slider {...settings}>
            {carouselGroups.map((group, i) => (
              <div key={i}>
                <div className="row g-3">
                  {group.map((img, idx) => (
                    <div className="col-4" key={idx}>
                      <img
                        src={img}
                        alt={`slide-${i}-img-${idx}`}
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* New and noteworthy carousel */}
        <MultiCarousel/>

        <Services />
      </div>
    </div>

  );
};

export default Entry
