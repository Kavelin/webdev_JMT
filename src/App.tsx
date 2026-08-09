import { lazy, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
const Demos = lazy(() => import("./pages/Demos"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
import "./App.css";

// Stable route indices determine transition direction.
const ROUTE_INDEX: Record<string, number> = {
  "/": 0,
  "/about": 1,
  "/demos": 2,
  "/contact": 3,
};

const pageVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 0.97,
    x: direction > 0 ? 50 : -50,
  }),

  center: {
    opacity: 1,
    scale: 1,
    x: 0,
  },

  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.97,
    x: direction > 0 ? -50 : 50,
  }),
};

const pageTransition = {
  type: "spring" as const,
  stiffness: 420,
  damping: 32,
  mass: 0.35,
};

// Home page animation on the first application load.
const introVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    x: 35,
  },

  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 24,
      mass: 0.5,
    },
  },
};

function PageWrapper({
  children,
  direction,
  intro,
}: {
  children: React.ReactNode;
  direction: number;
  intro: boolean;
}) {
  return (
    <motion.main
      className="app__page"
      custom={direction}
      variants={intro ? introVariants : pageVariants}
      initial={intro ? "hidden" : "enter"}
      animate={intro ? "visible" : "center"}
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  const currentIndex = ROUTE_INDEX[location.pathname] ?? 0;

  const previousIndexRef = useRef(currentIndex);
  const isFirstMountRef = useRef(true);

  const direction =
    currentIndex >= previousIndexRef.current ? 1 : -1;

  const isFirstMount = isFirstMountRef.current;

  useEffect(() => {
    previousIndexRef.current = currentIndex;
    isFirstMountRef.current = false;
  }, [currentIndex]);

  const renderPage = () => {
    switch (location.pathname) {
      case "/about":
        return <About />;

      case "/demos":
        return <Demos />;

      case "/contact":
        return <Contact />;

      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <NavBar />

      <AnimatePresence
        mode="wait"
        custom={direction}
      >
        <PageWrapper
          key={location.pathname}
          direction={direction}
          intro={isFirstMount}
        >
          {renderPage()}
        </PageWrapper>
      </AnimatePresence>
    </div>
  );
}