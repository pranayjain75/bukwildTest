import React from "react";
// import AppLogo from "../assets/abc_logo.svg";

// import AppLogo from "../assets/abc_logo.svg";

const HeaderComponent = (props) => {
  return (
    <div className="row app-header">
      <div>
        <span>
          <img src={"../assets/abc_logo.svg"} alt="Logo" className="app-logo" />
        </span>
      </div>
      <div className="header-btn" onClick={() => { }}>
        <span className="header-btn-text">Contact Us</span>
      </div>
    </div>
  );
};

export default HeaderComponent;
