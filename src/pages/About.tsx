import resumeIcon from "../assets/icons/resume.svg";
//import 
import "./About.css";

export default function About() {
  return (
    <main className="about">
      <section className="about__layout">
        <div className="about__photo" aria-hidden="true">
          <img
            src="/jmtorres.png"
            alt=""
          />
        </div>
        <p className="about__bio">
          Jose Manuel Torres is a Filipino Voice Actor centered in Apollo
          Beach, Florida with over 8 years of experience. He graduated from De
          la Salle University in 2015, and he has established a strong network
          of influential directors, actors, and casting agents ever since. <br/><br/>He
          has provided several performances and voice overs for large and small
          clients, including Netflix, Xilam, Hit Productions, and many more. He
          has experience recording for streaming shows, animations, video
          games, commercials and dubbing.<br/><br/> He continuously offers his services
          to a variety of studios back in the Philippines as well, due to his
          dynamic and versatile range of skill that he strives to provide for
          his local community.
        </p>
      </section>

      <a
        className="about__cta"
        href="/Jose Manuel Torres Voice Acting Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="about__cta-icon" aria-hidden="true">
          <img src={resumeIcon} alt="" />
        </span>
        <span className="about__cta-label">Voice Acting Résumé</span>
      </a>

      <div className="about__bg" aria-hidden="true">
        <svg viewBox="0 0 1440 1080" preserveAspectRatio="none">
          <circle cx="1200" cy="540" r="540" fill="#fdb3cd" opacity="0.45" />
          <ellipse
            cx="200"
            cy="900"
            rx="500"
            ry="300"
            fill="#fdb3cd"
            opacity="0.35"
          />
        </svg>
      </div>
    </main>
  );
}
