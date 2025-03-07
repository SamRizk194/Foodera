import React from "react";
import food from "./../../assets/01.png";
import "./section.css";

const Section = () => {
  return (
    <div className="container sec-1" id="we">
      <div className="row">
        <div className="col-md-7">
          <img src={food} title="img" alt="food" />
        </div>
        <div className="col-md-5 text-left">
          <h2>
            We pride ourselves on making real food from the best ingredients.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <button className="butn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
