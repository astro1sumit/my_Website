import React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
    Container,
    Wrapper,
    Title,
    Desc,
    CardContainer,
    ToggleButtonGroup,
    ToggleButton,
    Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import Reveal from "../Reveal";
import AmbientGlow from "../AmbientGlow";
import SectionTag from "../SectionTag";


const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container id="projects">
            <AmbientGlow />
            <Wrapper>
                <Reveal>
                    <SectionTag>03 — Projects</SectionTag>
                </Reveal>
                <Reveal delay={0.05}>
                    <Title>Projects</Title>
                </Reveal>
                <Reveal delay={0.1}>
                    <Desc>
                        I have worked on a wide range of projects. From web apps to crms. Here
                        are some of my projects.
                    </Desc>
                </Reveal>
                <ToggleButtonGroup>
                    {toggle === "all" ? (
                        <ToggleButton active value="all" onClick={() => setToggle("all")}>
                            All
                        </ToggleButton>
                    ) : (
                        <ToggleButton value="all" onClick={() => setToggle("all")}>
                            All
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === "Website" ? (
                        <ToggleButton
                            active
                            value="Website"
                            onClick={() => setToggle("Website")}
                        >
                            Website
                        </ToggleButton>
                    ) : (
                        <ToggleButton value="Website" onClick={() => setToggle("Website")}>
                            Website
                        </ToggleButton>
                    )}
                    <Divider/>
                    {toggle === "Backend" ? (
                        <ToggleButton
                            active
                            value="Backend"
                            onClick={() => setToggle("Backend")}
                        >
                            Backend
                        </ToggleButton>
                    ) : (
                        <ToggleButton value="Backend" onClick={() => setToggle("Backend")}>
                            Backend
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === "App" ? (
                        <ToggleButton active value="App" onClick={() => setToggle("App")}>
                            App
                        </ToggleButton>
                    ) : (
                        <ToggleButton value="App" onClick={() => setToggle("App")}>
                            App
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === "Figma" ? (
                        <ToggleButton
                            active
                            value="Figma"
                            onClick={() => setToggle("Figma")}
                        >
                            Figma
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            value="Figma"
                            onClick={() => setToggle("Figma")}
                        >
                            Figma
                        </ToggleButton>
                    )}
                </ToggleButtonGroup>
                <CardContainer>
                    <AnimatePresence mode="popLayout">
                        {projects
                            .filter(
                                (project) =>
                                    toggle === "all" ||
                                    project.category.toLowerCase() === toggle.toLowerCase()
                            )
                            .map((project, index) => (
                                <ProjectCard key={project.id}
                                             project={project}
                                             index={index}
                                             openModal={openModal}
                                             setOpenModal={setOpenModal}
                                />
                            ))}
                    </AnimatePresence>
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
