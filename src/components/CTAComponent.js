import React from "react";
import "./component.scss";

const CTAComponent = (props) => {
  return (
    <div className="cta-container row justify-space-between">
      <div className="flex-one">
        <span className="cta-text">{props?.text}</span>
      </div>
      <div className="flex-one justify-center">
        <span>
          LET'S TALK.
          <img src={"../assets/arrow.png"} className="cta-arrow" alt="next" />
        </span>
      </div>
    </div>
  );
};

export default CTAComponent;
