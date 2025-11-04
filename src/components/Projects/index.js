import React from "react";
import { useState } from "react";
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


const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to crms. Here
                    are some of my projects.
                </Desc>
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
                    {projects
                        .filter(
                            (project) =>
                                toggle === "all" ||
                                project.category.toLowerCase() === toggle.toLowerCase()
                        )
                        .map((project,index) => (
                            <ProjectCard key={index}
                                         project={project}
                                         openModal={openModal}
                                         setOpenModal={setOpenModal}
                            />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
