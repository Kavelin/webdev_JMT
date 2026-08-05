import { useState } from "react";
import playTriangle from "../assets/icons/play-triangle.svg";
import "./Demos.css";

type Demo = {
  id: string;
  title: string;
  src: string;
  type: "video" | "audio";
  poster?: string;
};

const DEMOS: Demo[] = [
  {
    id: "visual-2023",
    title: "Visual Reel 2023",
    src: "/JM Torres - Visual Reel 2023.mp4",
    type: "video",
    poster: undefined,
  },
  {
    id: "live-action",
    title: "Live Action Netflix Reel",
    src: "/JM Torres Live Action VISUAL NETFLIX REEL.mp4",
    type: "video",
  },
  {
    id: "animation-hyz",
    title: "Hyz — Animation Character Demo Reel",
    src: "/Hyz - ANIMATION Character Demo Reel.wav",
    type: "audio",
  },
  {
    id: "feature-bonus",
    title: "Feature Demo Reel",
    src: "/JM Torres Live Action VISUAL NETFLIX REEL.mp4",
    type: "video",
  },
];

const CLIENTS = [
  { name: "Netflix", accent: "#e50914" },
  { name: "Xilam", accent: "#0072c6" },
  { name: "Hit Productions", accent: "#2c3170" },
  { name: "Iyuno SDI Group", accent: "#fdb913" },
  { name: "Casting Call Club", accent: "#2c3170" },
  { name: "MZA Talent", accent: "#222" },
];

function DemoCard({ demo }: { demo: Demo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="demos__card">
      {playing ? (
        demo.type === "video" ? (
          <video
            src={demo.src}
            controls
            autoPlay
            playsInline
            onEnded={() => setPlaying(false)}
          />
        ) : (
          <audio
            src={demo.src}
            controls
            autoPlay
            onEnded={() => setPlaying(false)}
            style={{ width: "80%" }}
          />
        )
      ) : (
        <>
          <button
            type="button"
            className="demos__play"
            aria-label={`Play ${demo.title}`}
            onClick={() => setPlaying(true)}
          >
            <img src={playTriangle} alt="" className="demos__play-icon" />
          </button>
          <span className="demos__card-label">{demo.title}</span>
        </>
      )}
    </article>
  );
}

export default function Demos() {
  return (
    <main className="demos">
      <h2 className="demos__heading">DEMO VIDEOS:</h2>
      <div className="demos__grid">
        {DEMOS.map((demo) => (
          <DemoCard key={demo.id} demo={demo} />
        ))}
      </div>

      <section className="demos__clients">
        <h2>CLIENTS:</h2>
        <div className="demos__clients-grid">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="demos__client"
              style={{ borderTop: `4px solid ${client.accent}` }}
            >
              <span className="demos__client-logo">{client.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
