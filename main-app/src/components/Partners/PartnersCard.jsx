import React from "react";

const PartnersCard = ({ hexa, title, description, image }) => (
  <div className="style">
    <img className="screenshot" image={image} />
    <div className="content">
      <div className="title">{title}</div>
      <div className="desription">{description}</div>
      <img className="bottombar" background={hexa} />
    </div>
  </div>
);

export default PartnersCard;
