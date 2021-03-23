import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const { name, username, email, id } = props;

  return (
    <Link to={`/profile/${id}`}>
      <div className="card">
        <img src={`https://robohash.org/${id}/?set=set4`} alt="#" />
        <p className="title">{name}</p>
        <p className="title">{username}</p>
        <p className="title">{email}</p>
      </div>
    </Link>
  );
};

export default Card;
