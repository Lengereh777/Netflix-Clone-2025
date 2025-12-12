
import React, { useEffect, useState, useRef } from "react";
import axios from "../../../pages/Home/utilss/axios";
import "./Row.css"
import YouTube from "react-youtube";



export default function Row({ title, fetchUrl, isLarge }) {
  const [items, setItems] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [trailerCache, setTrailerCache] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRef = useRef(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const res = await axios.get(fetchUrl);
        setItems(res.data.results || []);
      } catch (error) {
        console.error("Fehler beim Laden der Filme:", error);
      }
    }
    loadItems();
  }, [fetchUrl]);

  const baseImg = "https://image.tmdb.org/t/p/w500";

  const playTrailer = async (movie) => {
    if (!movie?.id) return;

    if (trailerCache[movie.id]) {
      setTrailerUrl(trailerCache[movie.id]);
      setOverlayOpen(true);
      return;
    }

    try {
      const res = await axios.get(`/movie/${movie.id}/videos`);
      const videos = res.data.results || [];
      const trailer = videos.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );
      const key = trailer ? trailer.key : null;

      if (key) {
        setTrailerCache((prev) => ({ ...prev, [movie.id]: key }));
        setTrailerUrl(key);
        // setOverlayOpen(true);
      } else {
        alert("Kein Trailer verfügbar.");
      }
    } catch (error) {
      console.error("Trailer Fehler:", error);
    }
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    setTrailerUrl("");
  };

  const handleScroll = () => {
    if (!rowRef.current) return;
    const children = Array.from(rowRef.current.children);
    const rowCenter =
      rowRef.current.scrollLeft + rowRef.current.offsetWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;
    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(rowCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const centerActivePoster = () => {
      if (!rowRef.current || items.length === 0) return;
      const activeChild = rowRef.current.children[activeIndex];
      if (activeChild) {
        const rowCenter = rowRef.current.offsetWidth / 2;
        const childCenter =
          activeChild.offsetLeft + activeChild.offsetWidth / 2;
        rowRef.current.scrollTo({
          left: childCenter - rowCenter,
          behavior: "smooth",
        });
      }
    };
    centerActivePoster();
    window.addEventListener("resize", centerActivePoster);
    return () => window.removeEventListener("resize", centerActivePoster);
  }, [activeIndex, items]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div
        className={`row__posters ${isLarge ? "large" : ""}`}
        ref={rowRef}
        onScroll={handleScroll}
      >
        {items.map((m, index) => {
          const distance = Math.abs(activeIndex - index);
          let scale = 1,
            rotateY = 0,
            zIndex = 1;
          if (distance === 0) {
            scale = 1.2;
            rotateY = 0;
            zIndex = 3;
          } else if (distance === 1) {
            scale = 1.05;
            rotateY = index < activeIndex ? -10 : 10;
            zIndex = 2;
          }

          const imageUrl =
            m.poster_path || m.backdrop_path
              ? `${baseImg}${isLarge ? m.poster_path : m.backdrop_path}`
              : "https://via.placeholder.com/1280x720?text=No+Image+Available";

          return (
            <div key={m.id || index} className="row__item">
              <div
                className="row__poster-container"
                onClick={() => playTrailer(m)}
                style={{
                  transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex: zIndex,
                }}
              >
                <img
                  className={`row__poster ${isLarge ? "row__posterLarge" : ""}`}
                  src={imageUrl}
                  alt={m.title || m.name || "Film"}
                />
                <div className="row__hover-overlay">
                  <p className="row__hover-title">
                    {m.title || m.name || "Unbekannt"}
                  </p>
                  <p className="row__hover-date">
                    {m.release_date || m.first_air_date
                      ? new Date(
                          m.release_date || m.first_air_date
                        ).toLocaleDateString()
                      : "Datum unbekannt"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {overlayOpen && trailerUrl && (
        <div className="overlay" onClick={closeOverlay}>
          <div
            className="overlay__content"
            onClick={(e) => e.stopPropagation()}
          >
            <YouTube
              videoId={trailerUrl}
              opts={{
                height: "480",
                width: "100%",
                playerVars: { autoplay: 1, mute: 0 },
              }}
              onReady={(event) => event.target.setVolume(80)}
            />
          </div>
          <button className="overlay__close" onClick={closeOverlay}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
