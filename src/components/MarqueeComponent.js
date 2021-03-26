import React from "react";
import "./component.scss";
import CTAComponent from "./CTAComponent";
// import backgroundImage from "../assets"

const MarqueeComponent = (props) => {
  const currentMarquee = props.pageContent.filter((item) => {
    return item.title == props.currentPage;
  });
  console.log("Hello", currentMarquee);
  if (currentMarquee.length > 0) {
    return (

      <div
        className="marquee-container"
        style={{
          backgroundImage: `url(${"../assets/currentMarquee[0].blocks[0].background"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#d4d4d4",
        }}
      >
        <div className="container ">
          <div className="heading-container">
            <p className="heading">{currentMarquee[0].blocks[0].headline}</p>
          </div>
          <div className="sub-heading-container">
            <p className="sub-heading">{currentMarquee[0].blocks[0].subhead}</p>
          </div>
          <CTAComponent text={currentMarquee[0].blocks[0].cta} img={""} />

        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MarqueeComponent;
