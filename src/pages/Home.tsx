import { useState } from "react";
import visualReel from "/JM Torres Live Action VISUAL NETFLIX REEL.mp4";
import playTriangle from "../assets/icons/play-triangle.svg";
import SocialRow from "../components/SocialRow";
// Background from /public/bg-home.svg (verbatim Figma node 14:86)
import "./Home.css";

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="home">
      <h1 className="home__tagline">
        VOICE ACTING, DUB, &amp; VOICE OVER TALENT
      </h1>

      <section className="home__split" aria-label="Featured reel and credits">
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
      </section>

      <SocialRow />

      {/* Background from Figma node 14:86 — verbatim SVG with the original
          peach-to-pink gradient. Anchored to the bottom of the page. */}
      <div className="home__bg" aria-hidden="true">
        <img src="/bg-home.svg" alt="" />
      </div>
    </section>
  );
}
