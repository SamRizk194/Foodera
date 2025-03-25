import React from "react";
import Carousel from "react-bootstrap/Carousel";
import per1 from "./../../assets/1.jpg";
import per2 from "./../../assets/2.jpg";
import "./slider.css";
import { Element } from "react-scroll";

function Slider() {
  return (
    <Element name="review">
      <div className="container-fluid slider">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1>Testimonials</h1>
          </div>
        </div>

        <div className="row justify-content-center align-items-center ">
          <div className="col-md-12 col-lg-12">
            <Carousel>
              <Carousel.Item>
                <img src={per1} title="" alt="per1" />
                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                  <span className="author">Johnthan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={per2} title="" alt="per2" />
                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                  <span className="author">Johnthan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={per1} title="" alt="per1" />
                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                  <span className="author">Johnthan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Slider;
