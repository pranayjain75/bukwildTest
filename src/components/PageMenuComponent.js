import React from "react";
import "./component.scss";

const PageMenuComponent = (props) => {
  return (
    <div className="menu-item-container">
      {props.pageContent.map((item, index) => {
        return (
          <div
            className={`item-text ${
              props?.currentPage === item.title ? "selected" : ""
            }`}
            onClick={() => {
              props.setCurrentPage(item.title);
            }}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default PageMenuComponent;
