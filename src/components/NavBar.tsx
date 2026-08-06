import { NavLink } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
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

const navbarVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 18,
      mass: 0.6,
    },
  },
};

const logoVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    scale: 0.7,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 17,
      mass: 0.8,
    },
  },
};

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <motion.div
      variants={navItemVariants}
      whileHover={{
        y: -6,
        scale: 1.08,
        rotate: -3,
      }}
      whileTap={{
        scale: 0.9,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 18,
      }}
    >
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          `navbar__item${isActive ? " navbar__item--active" : ""}`
        }
      >
        <motion.span
          className="navbar__icon"
          aria-hidden="true"
          whileHover={{
            rotate: [0, -8, 8, -4, 0],
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <img src={icon} alt="" />
        </motion.span>

        <motion.span
          className="navbar__label"
          whileHover={{
            scaleX: 1.08,
            scaleY: 0.94,
          }}
        >
          {label}
        </motion.span>
      </NavLink>
    </motion.div>
  );
}

export default function NavBar() {
  return (
    <motion.nav
      className="navbar"
      aria-label="Primary"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <NavItem to="/" icon={homeIcon} label="HOME" />
      <NavItem to="/about" icon={aboutIcon} label="ABOUT" />

      <motion.div
        className="navbar__logo"
        variants={logoVariants}
        whileHover={{
          scale: 1.04,
          rotate: -1,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 16,
        }}
      >
        <NavLink to="/" aria-label="JM Torres — Home">
          <img src={jmTorresLogo} alt="JM Torres" />
        </NavLink>
      </motion.div>

      <NavItem to="/demos" icon={demosIcon} label="DEMOS" />
      <NavItem to="/contact" icon={contactIcon} label="CONTACT" />
    </motion.nav>
  );
}
