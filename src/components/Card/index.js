import React from "react";
import "./Card.css";

const Card = (props) => {
  const { title, srcImage } = props;

  return (
    <div className="card">
      <img src={srcImage} alt="#" />
      <p className="title">{title}</p>
    </div>
  );
};

export default Card;
