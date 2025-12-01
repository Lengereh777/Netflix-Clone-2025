import React from "react";
import "../Card/Card"
import "./Row.css"
import Card from "../Card/Card";

function Row({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Row;
