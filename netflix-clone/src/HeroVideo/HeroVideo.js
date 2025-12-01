import React from "react";
import "./HeroVideo.css"

function HeroVideo() {
  return (
    <div className="hero-video">
      <video
        className="hero-video-bg"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* <div className="hero-video-overlay">
        <h1>Top Comedy Specials</h1>
        <p>Laugh out loud with the best stand-up comedians worldwide.</p>
        <div className="hero-video-buttons">
          <button className="play-btn">Play</button>
          <button className="info-btn">More Info</button>
        </div>
      </div> */}
    </div>
  );
}

export default HeroVideo;
