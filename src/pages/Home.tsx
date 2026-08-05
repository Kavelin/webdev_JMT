import { useState } from "react";
import visualReel from "/JM Torres Live Action VISUAL NETFLIX REEL.mp4";
import playTriangle from "../assets/icons/play-triangle.svg";
import "./Home.css";

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <main className="home">
      <h1 className="home__tagline">
        VOICE ACTING, DUB, &amp; VOICE OVER TALENT
      </h1>

      <div className="home__reel">
        {playing ? (
          <video
            src={visualReel}
            controls
            autoPlay
            playsInline
            onEnded={() => setPlaying(false)}
          />
        ) : (
          <button
            type="button"
            className="home__play"
            aria-label="Play featured reel"
            onClick={() => setPlaying(true)}
          >
            <img src={playTriangle} alt="" className="home__play-icon" />
          </button>
        )}
      </div>

      <div className="home__credits">
        <p>Stranger Things — Eng to Fil Dub</p>
        <ul>
          <li>Venca</li>
          <li>Dr. Brenner</li>
          <li>Officer Powell</li>
        </ul>

        <p>The Daltons — French to Eng Dub</p>
        <ul>
          <li>Averell Dalton</li>
          <li>Melvin Peabody</li>
        </ul>

        <p>Nimona — Eng to Fil Dub — Todd</p>
      </div>

      {/* Figma reference: rounded pink "Union" background element on the home page.
          Reproduced as a soft circular accent so the design intent survives without
          pulling the proprietary SVG. */}
      <div className="home__bg" aria-hidden="true">
        <svg viewBox="0 0 1440 600" preserveAspectRatio="none">
          <ellipse
            cx="720"
            cy="300"
            rx="900"
            ry="180"
            fill="rgba(255,255,255,0.08)"
          />
        </svg>
      </div>
    </main>
  );
}
