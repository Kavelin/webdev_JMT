import resumeIcon from "../assets/icons/resume.svg";
import bg from "../assets/backgrounds/bg-about.svg";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <section className="about__layout">
        <div className="about__photo-block">
          <div className="about__photo">
            <img src="/jmtorres.png" alt="Jose Manuel Torres" />
          </div>

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
        </div>

        <p className="about__bio"><br />
          Jose Manuel Torres is a Filipino Voice Actor centered in Apollo
          Beach, Florida with over 8 years of experience. He graduated from De
          la Salle University in 2015, and he has established a strong network
          of influential directors, actors, and casting agents ever since. <br /><br />He
          has provided several performances and voice overs for large and small
          clients, including Netflix, Xilam, Hit Productions, and many more. He
          has experience recording for streaming shows, animations, video
          games, commercials and dubbing. <br /><br />He continuously offers his services
          to a variety of studios back in the Philippines as well, due to his
          dynamic and versatile range of skill that he strives to provide for
          his local community.
        </p>
      </section>

      {/* Background from Figma node 17:45 — verbatim SVG. */}
      <div className="about__bg" aria-hidden="true">
        <img src={bg} alt="" />
      </div>
    </section>
  );  
}
