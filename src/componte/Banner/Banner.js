import React, { useState, useEffect } from "react";
import axios from "../../pages/Home/utilss/axios";
import requests from "../../pages/Home/utilss/requests";
import "./Banner.css"




const placeholderImage =
  "https://via.placeholder.com/1280x720?text=No+Image+Available";

const truncate = (str, n) =>
  str?.length > n ? str.substring(0, n - 1) + "..." : str;

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [bgSmall, setBgSmall] = useState("");
  const [bgLarge, setBgLarge] = useState("");

  // Fetch movies
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(requests.fetchRomanceMovies);
        let movies = Array.isArray(response.data.results)
          ? response.data.results
          : [];

        // Fallback auf beliebte Filme, falls keine Daten
        if (!movies.length) {
          const fallbackResponse = await axios.get(requests.fetchTrending);
          movies = Array.isArray(fallbackResponse.data.results)
            ? fallbackResponse.data.results
            : [];
        }

        // Zufälliger Film
        setMovie(
          movies.length
            ? movies[Math.floor(Math.random() * movies.length)]
            : null
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Progressive Image Loading
  useEffect(() => {
    if (!movie) return;

    const getBackgroundImage = (size = "w780") => {
      const baseUrl = "https://image.tmdb.org/t/p/";
      const path = movie.backdrop_path || movie.poster_path;
      if (!path) return placeholderImage;
      return `${baseUrl}${size}${path}`;
    };

    // Small image (fast load)
    setBgSmall(getBackgroundImage("w300"));

    // Large image (retina / high-res)
    const large = getBackgroundImage(
      window.devicePixelRatio > 1 ? "original" : "w780"
    );
    const img = new Image();
    img.src = large;
    img.onload = () => setBgLarge(large);
  }, [movie]);

  const backgroundImage = bgLarge || bgSmall || placeholderImage;

  if (loading || !movie) {
    return (
      <header className="banner banner-skeleton" aria-busy="true">
        <div className="banner_contents-skeleton">
          <div className="skeleton-title" />
          <div className="skeleton-buttons" />
          <div className="skeleton-description" />
        </div>
        <div className="banner_fadeBottom" />
      </header>
    );
  }

  return (
    <header
      className={`banner ${
        imageLoaded ? "image-loaded kenburns" : "image-loading"
      }`}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition: "center",
        transform: `translateY(${scrollY * 0.2}px)`,
      }}
    >
      {/* Dark overlay */}
      <div className="banner_overlay" />

      {/* Preload image */}
      <img
        src={backgroundImage}
        alt={movie.title || movie.name || "Movie Background"}
        style={{ display: "none" }}
        onLoad={() => setImageLoaded(true)}
        decoding="async"
        loading="eager"
      />

      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name || "Unknown Title"}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1
          className={`banner_description ${
            movie.overview?.length > 150 ? "scroll" : ""
          }`}
        >
          {truncate(movie.overview || "No description available.", 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
