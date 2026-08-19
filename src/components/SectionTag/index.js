import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Small uppercase "01 — Label" eyebrow that sits above a section title,
// the recurring "designed portfolio" motif tying every section header
// together.
const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #854ce6;
`;

// The little accent dash "draws in" from the left the first time it
// scrolls into view, instead of just popping in with the rest of the tag.
const Line = styled(motion.span)`
  display: inline-block;
  width: 24px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #854ce6, #ff7eb3);
  transform-origin: left center;
`;

const SectionTag = ({ children, ...rest }) => (
    <TagWrapper {...rest}>
        <Line
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {children}
    </TagWrapper>
);

export default SectionTag;
