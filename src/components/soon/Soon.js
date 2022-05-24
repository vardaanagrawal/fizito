import React from "react";
import "./soon.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import img10 from "./img10.png";

export default function Soon() {
  return (
    <div className="soon">
      <div className="soon-title">Coming Soon !!</div>
      <div className="soon-body">
        <div className="img1">
          <img src={img1}></img>
          <div className="like-box"></div>
        </div>
        <div className="img2">
          <img src={img2}></img>
          <div className="like-box"></div>
        </div>
        <div className="img3">
          <img src={img3}></img>
          <div className="like-box"></div>
        </div>
        <div className="img4">
          <img src={img4}></img>
          <div className="like-box"></div>
        </div>
        <div className="img5">
          <img src={img5}></img>
          <div className="like-box"></div>
        </div>
        <div className="img6">
          <img src={img6}></img>
          <div className="like-box"></div>
        </div>
        <div className="img7">
          <img src={img7}></img>
          <div className="like-box"></div>
        </div>
        <div className="img8">
          <img src={img8}></img>
          <div className="like-box"></div>
        </div>
        <div className="img9">
          <img src={img9}></img>
          <div className="like-box"></div>
        </div>
        <div className="img10">
          <img src={img10}></img>
          <div className="like-box"></div>
        </div>
      </div>
    </div>
  );
}
