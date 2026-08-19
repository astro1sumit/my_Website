// components/FeaturedProjects/index.js
import React from "react";
import { motion } from "framer-motion";
import {
    FeaturedSection,
    FeaturedTitle,
    ProjectsGrid,
    ProjectCard,
    ProjectImageSlider,
    ProjectInfo,
    ProjectName,
    ProjectDescription,
    ProjectStack,
    StackItem,
    ViewButton,
} from "./style";

import { featuredProjects } from "../../data/constants";
import Reveal from "../Reveal";
import SectionTag from "../SectionTag";
import { fadeUpCard, viewportOnce } from "../../utils/motion";
import { handleSpotlightMove } from "../../utils/spotlight";
import { useTilt } from "../../utils/useTilt";

const MotionProjectCard = motion(ProjectCard);

// Its own component (rather than inlined in the .map()) so it can hold
// its own tilt motion values — hooks can't be called from inside a loop.
const FeaturedCard = ({ project, index, setOpenModal }) => {
    const { rotateX, rotateY, handleTiltMove, resetTilt } = useTilt(6);

    return (
        <MotionProjectCard
            custom={index}
            variants={fadeUpCard}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ rotateX, rotateY }}
            onMouseMove={(e) => {
                handleSpotlightMove(e);
                handleTiltMove(e);
            }}
            onMouseLeave={resetTilt}
        >
            <ProjectImageSlider>
                {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`slide-${i}`} />
                ))}
            </ProjectImageSlider>
            <ProjectInfo>
                <ProjectName>{project.title}</ProjectName>
                <ProjectDescription>
                    {project.description.split("\n")[0].slice(0, 150)}...
                </ProjectDescription>
                <ProjectStack>
                    {project.stack.map((tech, i) => (
                        <StackItem key={i}>{tech}</StackItem>
                    ))}
                </ProjectStack>
                <ViewButton onClick={() => setOpenModal({ state: true, project })}>
                    View Project
                </ViewButton>
            </ProjectInfo>
        </MotionProjectCard>
    );
};

const FeaturedProjects = ({ setOpenModal }) => {
    return (
        <FeaturedSection id="featured">
            <Reveal>
                <SectionTag>01 — Featured Work</SectionTag>
            </Reveal>
            <Reveal delay={0.05}>
                <FeaturedTitle>🚀 top Projects</FeaturedTitle>
            </Reveal>
            <ProjectsGrid>
                {featuredProjects.map((project, index) => (
                    <FeaturedCard
                        key={project.slug}
                        project={project}
                        index={index}
                        setOpenModal={setOpenModal}
                    />
                ))}
            </ProjectsGrid>
        </FeaturedSection>
    );
};

export default FeaturedProjects;
