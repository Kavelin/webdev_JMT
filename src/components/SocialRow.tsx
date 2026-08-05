import phoneIcon from "../assets/icons/phone.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import emailIcon from "../assets/icons/email.svg";
import xIcon from "../assets/icons/x-twitter.svg";
import "./SocialRow.css";

const SOCIALS = [
  {
    label: "Call",
    href: "tel:+1-813-000-0000",
    icon: phoneIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/josemanueltorres",
    icon: linkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:hello@jm-torres.com",
    icon: emailIcon,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/jm_torres",
    icon: xIcon,
  },
];

export default function SocialRow() {
  return (
    <div className="social-row" role="list">
      {SOCIALS.map(({ label, href, icon }) => (
        <a
          key={label}
          role="listitem"
          href={href}
          aria-label={label}
          className="social-row__btn"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <span className="social-row__icon">
            <img src={icon} alt="" />
          </span>
        </a>
      ))}
    </div>
  );
}
