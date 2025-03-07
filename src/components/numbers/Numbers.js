import React from "react";
import "./numbers.css";

function Numbers() {
  return (
    <div className="container-fluid  number ">
      <div className="row align-items-center">
        <div className="col-md-3 text-center">
          <h2>1287+</h2>
          <h6>Savings</h6>
        </div>

        <div className="col-md-3 text-center">
          <h2>5786+</h2>
          <h6>Photos</h6>
        </div>

        <div className="col-md-3 text-center">
          <h2>1660+</h2>
          <h6>Rockets</h6>
        </div>

        <div className="col-md-3 text-center">
          <h2>7110+</h2>
          <h6>Globes</h6>
        </div>
      </div>
    </div>
  );
}
export default Numbers;
