import { useState } from "react";
import playTriangle from "../assets/icons/play-triangle.svg";
// Background from /public/bg-demos.svg (verbatim Figma node 21:172)
import "./Demos.css";

type Demo = {
  id: string;
  title: string;
  src: string;
  type: "video" | "audio";
};

const DEMOS: Demo[] = [
  {
    id: "visual-2023",
    title: "Visual Reel 2023",
    src: "/JM Torres - Visual Reel 2023.mp4",
    type: "video",
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
  { name: "Netflix", accent: "#e50914", src: "/clients/netflix.png"},
  { name: "Xilam", accent: "#0072c6", src: "/clients/xilam.png" },
  { name: "Hit Productions", accent: "#2c3170" , src: "/clients/hitproductions.png"},
  { name: "Iyuno SDI Group", accent: "#fdb913" , src: "/clients/iyunosdigroup.png"},
  { name: "Sound Weavers", accent: "#2c3170", src: "/clients/soundweavers.jpg" },
  { name: "SOUNDESIGN", accent: "#222" , src: "/clients/soundesignmanila.jpg"},
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
            className="demos__audio"
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
    <section className="demos">
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
              { /* <span className="demos__client-logo">{client.name}</span> */ }
              <img src={client.src} alt={client.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Background from Figma node 21:172 — three rotated rounded
          rectangles with peach-to-pink gradient. */}
      <div className="demos__bg" aria-hidden="true">
        <img src="/bg-demos.svg" alt="" />
      </div>
    </section>
  );
}
