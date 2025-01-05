import React from "react";
import "./foot.css";

const Foot = () => {
  return (
    <div className="container-fluid background-container">
      <div className="row overlay">
        <div className="col-md-8 overlay-text">
          <h4>Baked fresh daily by bakers with passion.</h4>
        </div>
        <div className="col-md-4">
          <button> Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default Foot;
