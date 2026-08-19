import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { skills } from "../../data/constants";
import { viewportOnce } from "../../utils/motion";

const Wrap = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 4px 0 4px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Label = styled.div`
  width: 100px;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 600px) {
    width: 76px;
    font-size: 12px;
  }
`;

const Track = styled.div`
  flex: 1;
  height: 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.card};
  overflow: hidden;
`;

const Fill = styled(motion.div)`
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(90deg, #854ce6, #ff7eb3);
`;

const Count = styled.div`
  width: 60px;
  flex-shrink: 0;
  text-align: right;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 600px) {
    width: 46px;
    font-size: 11px;
  }
`;

// Bar length reflects how many technologies are listed under that
// category in constants.js — a real, verifiable count, not a
// self-rated proficiency score.
const categories = skills.map((category) => ({
    title: category.title,
    count: category.skills.length,
}));
const maxCount = Math.max(...categories.map((c) => c.count));

const SkillOverview = () => (
    <Wrap>
        {categories.map((category, i) => (
            <Row key={category.title}>
                <Label>{category.title}</Label>
                <Track>
                    <Fill
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(category.count / maxCount) * 100}%` }}
                        viewport={viewportOnce}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    />
                </Track>
                <Count>{category.count} techs</Count>
            </Row>
        ))}
    </Wrap>
);

export default SkillOverview;
