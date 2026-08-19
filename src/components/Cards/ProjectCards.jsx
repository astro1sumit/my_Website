import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeUpCard, viewportOnce } from "../../utils/motion";
import { spotlightOverlay, handleSpotlightMove } from "../../utils/spotlight";
import { useTilt } from "../../utils/useTilt";

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  width: 90%;
  padding: 12px;
  background: linear-gradient(135deg, #854ce6, #5d3fd3);
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #5d3fd3, #854ce6);
    box-shadow: 0 4px 10px rgba(133, 76, 230, 0.5);
  }
`;

const Card = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  background: linear-gradient(135deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.backgroundAlt});
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: box-shadow 0.3s ease-in-out, filter 0.3s ease-in-out;

  /* The lift itself is handled by framer-motion (whileHover) on the
     motion-wrapped card so it composes with the scroll-in entrance. */
  &:hover {
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.4);
    filter: brightness(1.1);
  }

  &:hover ${Button} {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  ${spotlightOverlay()}
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.07);
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  background: linear-gradient(135deg, #854ce6, #5d3fd3);
  padding: 4px 10px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(133, 76, 230, 0.4);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Date = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.card};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const MotionCard = motion(Card);

const ProjectCards = ({ project, setOpenModal, index = 0 }) => {
    const { rotateX, rotateY, handleTiltMove, resetTilt } = useTilt(8);

    return (
        <MotionCard
            custom={index}
            variants={fadeUpCard}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{ rotateX, rotateY }}
            onClick={() => setOpenModal({ state: true, project: project })}
            onMouseMove={(e) => {
                handleSpotlightMove(e);
                handleTiltMove(e);
            }}
            onMouseLeave={resetTilt}
        >
            <Image src={project.image} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img} />
                ))}
            </Members>
            <Button>View Project</Button>
        </MotionCard>
    );
};

export default ProjectCards;
