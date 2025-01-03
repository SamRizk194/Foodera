import React from "react";
import Carousel from "react-bootstrap/Carousel";
import per1 from "./../../assets/1.jpg";
import per2 from "./../../assets/2.jpg";
import "./slider.css";

const Slider = () => {
  return (
    <div className="container-fluid slider">
      <div className="row row justify-content-center align-items-center ">
        <div className="col-md-12 col-lg-12">
          <h1>Testimonials</h1>
          <Carousel>
            <Carousel.Item>
              <img src={per1} title="" />
              <Carousel.Caption>
                <p>
                  "Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live far from the countries Vokalia."
                </p>
                <span class="author">Johnthan Doe - UX Designer</span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={per2} title="" />
              <Carousel.Caption>
                <p>
                  "Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live far from the countries Vokalia."
                </p>
                <span class="author">Johnthan Doe - UX Designer</span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={per1} title="" />
              <Carousel.Caption>
                <p>
                  "Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live far from the countries Vokalia."
                </p>
                <span class="author">Johnthan Doe - UX Designer</span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
