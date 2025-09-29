import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CSS/Services.css"; // your custom CSS

const Services = () => {
  const services = [
    { id: 1, img: "/images/carousal/7.jpeg", title: "Women's Salon", description: "Professional haircuts and styling for women.", price: "$25", details: "Includes haircut, styling, and shampoo." },
    { id: 2, img: "/images/carousal/4.jpeg", title: "Men's Salon", description: "Haircuts, grooming, and beard styling for men.", price: "$20", details: "Includes haircut, beard trim, and hair wash." },
    { id: 3, img: "/images/carousal/2.jpeg", title: "Home Cleaning", description: "Thorough cleaning services for your home.", price: "$50", details: "Covers full house cleaning, dusting, and mopping." },
    { id: 4, img: "/images/carousal/6.jpeg", title: "Painting", description: "Interior and exterior painting services.", price: "$100", details: "Professional painting with high-quality paints." },
    { id: 5, img: "/images/carousal/8.png", title: "Plumber", description: "Plumbing services for all types of repairs.", price: "$30", details: "Leak fixes, pipe installations, and repairs." },
    { id: 6, img: "/images/carousal/1.jpeg", title: "Electrician", description: "Electrical maintenance and repair services.", price: "$35", details: "Wiring, installation, and troubleshooting services." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Most booked services</h2>
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="service-slide px-2">
            <div className="service-card shadow-sm rounded text-center p-3">
              <img src={service.img} alt={service.title} className="img-fluid rounded mb-2" />
              <h5>{service.title}</h5>
              <p className="text-muted">{service.description}</p>
              <p className="fw-bold">{service.price}</p>
              <small className="text-secondary">{service.details}</small>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} custom-arrow`} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} custom-arrow`} style={{ ...style }} onClick={onClick} />;
}

export default Services;
