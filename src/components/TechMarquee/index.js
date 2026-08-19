import React from "react";
import styled, { keyframes } from "styled-components";
import { skills } from "../../data/constants";

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Wrap = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 18px 0;
  background: ${({ theme }) => theme.card_light};
  border-top: 1px solid rgba(133, 76, 230, 0.15);
  border-bottom: 1px solid rgba(133, 76, 230, 0.15);
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 10%,
    #000 90%,
    transparent
  );
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  gap: 48px;
  animation: ${scroll} 32s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

// De-dupe by name (several skills repeat across categories), then
// double the list so translateX(-50%) loops seamlessly.
const uniqueSkills = Array.from(
    new Map(skills.flatMap((category) => category.skills).map((s) => [s.name, s])).values()
);
const loopSkills = [...uniqueSkills, ...uniqueSkills];

const TechMarquee = () => (
    <Wrap>
        <Track>
            {loopSkills.map((skill, i) => (
                <Item key={`${skill.name}-${i}`}>
                    <Icon src={skill.image} alt={skill.name} />
                    {skill.name}
                </Item>
            ))}
        </Track>
    </Wrap>
);

export default TechMarquee;
