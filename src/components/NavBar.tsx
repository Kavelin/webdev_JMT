import { NavLink } from "react-router-dom";
import jmTorresLogo from "../assets/icons/jm-torres.svg";
import homeIcon from "../assets/icons/home.svg";
import aboutIcon from "../assets/icons/about.svg";
import demosIcon from "../assets/icons/demos.svg";
import contactIcon from "../assets/icons/contact.svg";
import "./NavBar.css";

type NavItemProps = {
  to: string;
  icon: string;
  label: string;
};

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `navbar__item${isActive ? " navbar__item--active" : ""}`
      }
    >
      <span className="navbar__icon" aria-hidden="true">
        <img src={icon} alt="" />
      </span>
      <span className="navbar__label">{label}</span>
    </NavLink>
  );
}

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Primary">
      <NavItem to="/" icon={homeIcon} label="HOME" />
      <NavItem to="/about" icon={aboutIcon} label="ABOUT" />

      <NavLink to="/" className="navbar__logo" aria-label="JM Torres — Home">
        <img src={jmTorresLogo} alt="JM Torres" />
      </NavLink>

      <NavItem to="/demos" icon={demosIcon} label="DEMOS" />
      <NavItem to="/contact" icon={contactIcon} label="CONTACT" />
    </nav>
  );
}
