import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const services = [
  { id: 1, img: "/images/carousal/7.jpeg", title: "Women's Salon", description: "Professional haircuts and styling for women.", price: "$25", details: "Includes haircut, styling, and shampoo." }, { id: 2, img: "/images/carousal/4.jpeg", title: "Men's Salon", description: "Haircuts, grooming, and beard styling for men.", price: "$20", details: "Includes haircut, beard trim, and hair wash." }, { id: 3, img: "/images/carousal/2.jpeg", title: "Home Cleaning", description: "Thorough cleaning services for your home.", price: "$50", details: "Covers full house cleaning, dusting, and mopping." }, { id: 4, img: "/images/carousal/6.jpeg", title: "Painting", description: "Interior and exterior painting services.", price: "$100", details: "Professional painting with high-quality paints." }, { id: 5, img: "/images/carousal/8.png", title: "Plumber", description: "Plumbing services for all types of repairs.", price: "$30", details: "Leak fixes, pipe installations, and repairs." }, { id: 6, img: "/images/carousal/1.jpeg", title: "Electrician", description: "Electrical maintenance and repair services.", price: "$35", details: "Wiring, installation, and troubleshooting services." },
];

const Singlepage = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!service) return <h2 className="text-center mt-5">Service not found</h2>;

  const handleAddToCart = () => {
    addToCart(service);
    navigate("/cart");
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={service.img} alt={service.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{service.title}</h2>
          <p className="text-muted">{service.description}</p>
          <h4 className="text-success">{service.price}</h4>
          <p>{service.details}</p>
          <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
