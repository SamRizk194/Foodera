import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <header>
        <div className="container" id="home">
          <div className="row">
            <div className="col-md-6">
              <h2>Good food choices are good investments.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum amet leo.
              </p>

              <a href="#explore">
                <button className="one">
                  Order Now
                  <FontAwesomeIcon className="ms-2" icon={faCartShopping} />
                </button>
              </a>
              <a href="#we">
                <button className="two">
                  Learn More
                  <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
                </button>
              </a>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
