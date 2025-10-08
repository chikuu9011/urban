import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button, Form } from "react-bootstrap";

const ButtonCar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g. send data to API)
    alert("Form submitted!");
    handleCloseModal();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const carouselGroups = [
    [
      {
        img: "/images/1.jpg",
        title: "Home Cleaning",
        desc: "Top-rated professionals. Full home services.",
      },
      {
        img: "/images/2.jpg",
        title: "Massage Therapy",
        desc: "Relax at home with expert massage services.",
      },
      {
        img: "/images/3.jpg",
        title: "Salon for Women",
        desc: "Hair, skin, and beauty at your doorstep.",
      },
    ],
    [
      {
        img: "/images/4.jpg",
        title: "Plumbing",
        desc: "Fix leaks and more with expert plumbers.",
      },
      {
        img: "/images/5.jpg",
        title: "Electrician",
        desc: "Quick electrical fixes and installations.",
      },
      {
        img: "/images/6.jpg",
        title: "AC Repair",
        desc: "Keep your home cool with timely AC service.",
      },
    ],
  ];

  return (
    <div className="container my-5">
      <Slider {...settings}>
        {carouselGroups.map((group, groupIdx) => (
          <div key={groupIdx}>
            <div className="row">
              {group.map((item, itemIdx) => (
                <div className="col-md-4 col-12 mb-4" key={itemIdx}>
                  <div className="d-flex flex-md-row flex-column align-items-center bg-light p-3 rounded shadow-sm h-100">
                    {/* Text Section */}
                    <div className="me-md-3 mb-md-0 mb-3 text-md-start text-center" style={{ flex: 1 }}>
                      <h5 className="mb-2">{item.title}</h5>
                      <p className="text-muted mb-2">{item.desc}</p>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleOpenModal(item)}
                      >
                        Book Now
                      </button>
                    </div>
                    {/* Image Section */}
                    <div style={{ flex: 1 }}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="img-fluid rounded"
                        style={{ width: "100%", height: "150px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>

      {/* MODAL */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book: {selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Optional" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Confirm Booking
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ButtonCar;
