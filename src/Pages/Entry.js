import React from "react";
import "./CSS/Entry.css";
import Services from "../Components/Services";
import Carousal from "../Components/Carousal";
import Upper from "../Components/Upper";
import ButtonCar from "../Components/ButtonCar";

const Entry = () => {

  return (
    <div className="entry py-5">
      <div className="container">
        <Upper />
        {/* Carousel Section */}


        <ButtonCar />
        {/* New and noteworthy carousel */}
        <h2 style={{ margin: "30px 0" }}>New and noteworthy</h2>
        <Carousal />

        <Services />
      </div>
    </div>

  );
};

export default Entry
