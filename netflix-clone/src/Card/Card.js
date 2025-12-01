import React from "react";
import "./Card.css";

function Card({ movie }) {
  return (
    <div className="card">
      <img src={movie.img} alt={movie.title} />
      <div className="card-overlay">
        <p>{movie.title}</p>
      </div>
    </div>
  );
}

export default Card;
