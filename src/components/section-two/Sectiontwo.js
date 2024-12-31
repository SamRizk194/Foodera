import React from "react";
import photo from "./../../assets/04.png";
import "./sectiontwo.css";

const Sectiontwo = () => {
  return (
    <div className="container sec-2">
      <div className="row">
        <div className="col-md-5 col-lg-5">
          <h2>
            We make everything by hand with the best possible ingredients.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul>
            <li>Etiam sed dolor ac diam volutpat.</li>
            <li>Erat volutpat aliquet imperdiet.</li>
            <li>purus a odio finibus bibendum.</li>
          </ul>

          <button className="butn">Learn More</button>
        </div>
        <div className="col-md-7 col-lg-7 ">
          <img src={photo} title="photo" />
        </div>
      </div>
    </div>
  );
};

export default Sectiontwo;
