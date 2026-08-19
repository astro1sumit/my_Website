import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animate, useInView } from "framer-motion";
import { projects, experiences, featuredProjects, skills } from "../../data/constants";
import Reveal from "../Reveal";

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 16px 56px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
`;

const StatCard = styled.div`
  flex: 1 1 180px;
  max-width: 220px;
  text-align: center;
  padding: 24px 16px;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.card},
    ${({ theme }) => theme.card_light}
  );
  border: 1px solid rgba(133, 76, 230, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 24px rgba(133, 76, 230, 0.2);
  }
`;

const Number = styled.div`
  font-size: 40px;
  font-weight: 700;
  background: linear-gradient(90deg, #854ce6, #ff7eb3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Label = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

// Counts up from 0 to `to` once it scrolls into view, using framer-motion's
// imperative `animate()` to tween a plain number into local state.
const Counter = ({ to, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return undefined;
        const controls = animate(0, to, {
            duration: 1.4,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, to]);

    return (
        <Number ref={ref}>
            {value}
            {suffix}
        </Number>
    );
};

// All figures are derived straight from the data in constants.js, not
// hand-typed, so they can't drift out of sync with the actual content.
const uniqueTechCount = new Set(
    skills.flatMap((category) => category.skills.map((s) => s.name))
).size;

const STATS = [
    { label: "Projects Built", value: projects.length, suffix: "+" },
    { label: "Internships", value: experiences.length },
    { label: "Technologies", value: uniqueTechCount, suffix: "+" },
    { label: "Featured Work", value: featuredProjects.length },
];

const Stats = () => (
    <Section>
        <Grid>
            {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.1} y={20}>
                    <StatCard>
                        <Counter to={stat.value} suffix={stat.suffix || ""} />
                        <Label>{stat.label}</Label>
                    </StatCard>
                </Reveal>
            ))}
        </Grid>
    </Section>
);

export default Stats;
