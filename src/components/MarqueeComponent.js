import React, { useEffect, useState } from "react";
import "./component.scss";
import CTAComponent from "./CTAComponent";
import industries from "../assets/slide_one.jpg";

import services from "../assets/slide_two.jpg";

import aboutus from "../assets/slide_three.jpg";


const MarqueeComponent = (props) => {



  const currentMarquee = props.pageContent.filter((item) => {
    return item.title == props.currentPage;
  });
  console.log("Hello", currentMarquee);


  if (currentMarquee.length > 0) {
    let imgUrl;
    switch (currentMarquee[0].blocks[0].background) {
      case "slide_one.jpg":
        imgUrl = industries;
        break;
      case "slide_two.jpg":
        imgUrl = services;
        break;
      case "slide_three.jpg":
        imgUrl = aboutus;
        break;
    }
    return (
      <div
        className="marquee-container"
        style={{
          backgroundImage: `url('${imgUrl}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#d4d4d4",
        }}
      >
        < div className="container " >
          <div className="heading-container">
            <p className="heading">{currentMarquee[0].blocks[0].headline}</p>
          </div>
          <div className="sub-heading-container">
            <p className="sub-heading">{currentMarquee[0].blocks[0].subhead}</p>
          </div>
          <CTAComponent text={currentMarquee[0].blocks[0].cta} img={""} />

        </div >
      </div >
    );
  } else {
    return null;
  }
};

export default MarqueeComponent;
