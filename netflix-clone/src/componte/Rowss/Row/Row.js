import React, { useEffect, useState } from "react";
import axios from "../../../pages/Home/utilss/axios";
import "./Row.css"

export default function Row({ title, fetchUrl, isLarge }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await axios.get(fetchUrl);
      setItems(res.data.results || []);
    }
    load();
  }, [fetchUrl]);

  const baseImg = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {items.map((m) => (
          <img
            key={m.id}
            className={`row__poster ${isLarge ? "row__posterLarge" : ""}`}
            src={`${baseImg}${isLarge ? m.poster_path : m.backdrop_path}`}
            alt={m.title || m.name}
          />
        ))}
      </div>
    </div>
  );
}
