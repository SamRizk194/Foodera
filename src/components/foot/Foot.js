import React from "react";
import "./foot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faYoutube,
  faDribbble,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Foot() {
  return (
    <>
      <div className="container-fluid background-container">
        <div className="row overlay">
          <div className="col-md-8 overlay-text">
            <h4>Baked fresh daily by bakers with passion.</h4>
          </div>
          <div className="col-md-4">
            <button>Learn More</button>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center hurry">
        <div className="col-md-12">
          <h1>
            Hurry up! Subscribe our newsletter <br /> and get 25% Off
          </h1>
          <p>Limited time offer for this month. No credit card required.</p>

          <form action="#" method="POST">
            <div className="row subscribe">
              <div className="col-md-3"></div>
              <div className="col-md-4">
                <input
                  className="e-mail"
                  placeholder="Email Address here"
                  name="email"
                  id="eaddress"
                  data-validate="validate(required, email)"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="col-md-2 justify-content-center">
                <button type="submit">Subscribe</button>
              </div>
              <div className="col-md-3"></div>
            </div>
          </form>
        </div>
      </div>

      <div className="container-fluid foooter">
        <div className="row">
          <div className="col-md-12 footerP text-center">
            <button href="#home">Register</button>
            <button href="#home">Forum</button>
            <button href="#home">Affiliate</button>
            <button href="#home">FAQ</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 social text-center">
            <a href="https://www.facebook.com" target="_self">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_self">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com" target="_self">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.dribbble.com" target="_self">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a href="https://www.linkedin.com" target="_self">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com" target="_self">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="container-fluid text-center copy">
          © 2021. Foodera. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Foot;
