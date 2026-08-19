import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { achievements } from "../../data/constants";
import Reveal from "../Reveal";
import { fadeUpCard, viewportOnce } from "../../utils/motion";
import { spotlightOverlay, handleSpotlightMove } from "../../utils/spotlight";
import SectionTag from "../SectionTag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 20px 16px 60px;
  @media (max-width: 960px) {
    padding: 16px 8px 40px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  padding: 20px 0;
  gap: 16px;
  @media (max-width: 960px) {
    padding: 16px 0;
    gap: 12px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 320px;
  background: linear-gradient(135deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.backgroundAlt});
  border: 1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, rgb(176, 76, 230), rgb(32, 40, 190));
    box-shadow: rgba(23, 92, 230, 0.3) 0px 6px 32px;
  }

  ${spotlightOverlay()}
`;

const Tag = styled.span`
  align-self: flex-start;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #854ce6;
  border: 1px solid #854ce6;
  border-radius: 20px;
  padding: 4px 12px;

  ${Card}:hover & {
    color: #ffffff;
    border-color: #ffffff;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text_primary};

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const CardDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: ${({ theme }) => theme.text_secondary};
  transition: color 0.3s ease-in-out;

  ${Card}:hover & {
    color: #ffffff;
  }
`;

const MotionCard = motion(Card);

const Achievements = () => {
    return (
        <Container id="achievements">
            <Wrapper>
                <Reveal>
                    <SectionTag>06 — Achievements</SectionTag>
                </Reveal>
                <Reveal delay={0.05}>
                    <Title>Achievements & Certifications</Title>
                </Reveal>
                <Reveal delay={0.1}>
                    <Desc>
                        A few milestones and certifications from my journey so far.
                    </Desc>
                </Reveal>
                <Grid>
                    {achievements.map((achievement, index) => {
                        const content = (
                            <>
                                <Tag>{achievement.tag}</Tag>
                                <CardTitle>{achievement.title}</CardTitle>
                                <CardDesc>{achievement.desc}</CardDesc>
                            </>
                        );
                        return (
                            <MotionCard
                                key={achievement.id}
                                custom={index}
                                variants={fadeUpCard}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportOnce}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                onMouseMove={handleSpotlightMove}
                            >
                                {achievement.link ? (
                                    <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </MotionCard>
                        );
                    })}
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default Achievements;
