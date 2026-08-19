import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import HeroBgAnimation from "../HeroBgAnimation";
import {
    HeroContainer,
    HeroBg,
    HeroOrbs,
    OrbOne,
    OrbTwo,
    AvailabilityBadge,
    StatusDot,
    HeroLeftContainer,
    Img,
    HeroRightContainer,
    HeroInnerContainer,
    TextLoop,
    Title,
    GradientText,
    Span,
    SubTitle,
    ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { staggerContainer, fadeUpItem } from "../../utils/motion";

const MotionLeft = motion(HeroLeftContainer);
const MotionBadge = motion(AvailabilityBadge);
const MotionTitle = motion(Title);
const MotionTextLoop = motion(TextLoop);
const MotionSubTitle = motion(SubTitle);
const MotionResumeButton = motion(ResumeButton);
const MotionImg = motion(Img);

const HeroSection = () => {
    // Subtle 3D tilt on the photo, following the pointer within the
    // right-hand column. Springs smooth it out so it never feels twitchy.
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 18 });
    const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 18 });

    const handleTilt = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * 18);
        rotateX.set(-py * 18);
    };

    const resetTilt = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroOrbs>
                    <OrbOne />
                    <OrbTwo />
                </HeroOrbs>
                <HeroInnerContainer>
                    <MotionLeft
                        id="Left"
                        variants={staggerContainer(0.2, 0.1)}
                        initial="hidden"
                        animate="visible"
                    >
                        <MotionBadge variants={fadeUpItem}>
                            <StatusDot />
                            Open to Remote Roles
                        </MotionBadge>
                        <MotionTitle variants={fadeUpItem}>
                            Hi, I am <br /> <GradientText>{Bio.name}</GradientText>
                        </MotionTitle>
                        <MotionTextLoop variants={fadeUpItem}>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </MotionTextLoop>
                        <MotionSubTitle variants={fadeUpItem}>
                            {Bio.description}
                        </MotionSubTitle>
                        <MotionResumeButton
                            variants={fadeUpItem}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            href={Bio.resume}
                            target="display"
                        >
                            Check Resume 📄
                        </MotionResumeButton>
                    </MotionLeft>

                    <HeroRightContainer
                        id="Right"
                        onMouseMove={handleTilt}
                        onMouseLeave={resetTilt}
                    >
                        <MotionImg
                            src={HeroImg}
                            alt="hero-image"
                            style={{ rotateX: springRotateX, rotateY: springRotateY }}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -14, 0],
                            }}
                            transition={{
                                opacity: { duration: 0.7, ease: "easeOut" },
                                scale: { duration: 0.7, ease: "easeOut" },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.7,
                                },
                            }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
