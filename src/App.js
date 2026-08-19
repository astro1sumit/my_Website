import { ThemeProvider } from "styled-components";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import ProjectDetails from "./components/ProjectDetails";
import FeatureDetails from "./components/FeatureDetails";
import FeaturedProjects from "./components/Feature/index.js";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Stats from "./components/Stats";
import TechMarquee from "./components/TechMarquee";
import BackToTop from "./components/BackToTop";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  transform-origin: 0%;
  background: linear-gradient(90deg, #854ce6, #ff7eb3);
  z-index: 999;
`;

function App() {
    const [darkMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    console.log(openModal);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Preloader />
            <SmoothScroll />
            <CustomCursor />
            <BackToTop />
            <Router>
                <ProgressBar style={{ scaleX }} />
                <Navbar />
                <Body>
                    <HeroSection />
                    <Stats />
                    <TechMarquee />
                    <FeaturedProjects openModal={openModal} setOpenModal={setOpenModal} />
                    <Wrapper>
                        <Experience />
                    </Wrapper>
                    <Projects openModal={openModal} setOpenModal={setOpenModal} />
                    <Skills />
                    <Wrapper>
                        <Education />
                        <Achievements />
                        <Contact />
                    </Wrapper>
                    <Footer />

                    <AnimatePresence>
                        {openModal.state && openModal.project?.slug ? (
                            <FeatureDetails key="feature-details" openModal={openModal} setOpenModal={setOpenModal} />
                        ) : openModal.state ? (
                            <ProjectDetails key="project-details" openModal={openModal} setOpenModal={setOpenModal} />
                        ) : null}
                    </AnimatePresence>
                </Body>
            </Router>
        </ThemeProvider>
    );
}

export default App;
