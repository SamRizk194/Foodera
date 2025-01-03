import React from "react";
import "./sec4rd.css";
import img01 from "./../../assets/01.jpg";
import img02 from "./../../assets/02.jpg";
import img03 from "./../../assets/03.jpg";

const Sec4rd = () => {
  return (
    <div className="container ">
      <div className="row four">
        <div className="col-md-2"></div>

        <div className="col-md-8 text-center">
          <h1>Explore Our Foods</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row five">
        <div className="col-md-4">
          <img src={img01} title="" />
          <h5>Rainbow Vegetable Sandwich</h5>
          <h6>Time: 15 - 20 Minutes | Serves: 1</h6>
          <p>
            $10.50 <span>$11.70</span>
          </p>
          <hr></hr>
          <button>Order Now</button>
        </div>

        <div className="col-md-4">
          <img src={img02} title="" />
          <h5>Rainbow Vegetable Sandwich</h5>
          <h6>Time: 15 - 20 Minutes | Serves: 1</h6>
          <p>
            $9.20 <span>$10.50</span>
          </p>
          <hr></hr>
          <button>Order Now</button>
        </div>

        <div className="col-md-4">
          <img src={img03} title="" />
          <h5>Rainbow Vegetable Sandwich</h5>
          <h6>Time: 15 - 20 Minutes | Serves: 1</h6>
          <p>
            $12.50 <span>$13.20</span>
          </p>
          <hr></hr>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Sec4rd;
