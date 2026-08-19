import React from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(24px, -26px) scale(1.06); }
`;

const Wrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const Blob = styled.div`
  position: absolute;
  top: ${({ $top }) => $top};
  bottom: ${({ $bottom }) => $bottom};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: radial-gradient(circle, ${({ $color }) => $color}, transparent 70%);
  filter: blur(70px);
  animation: ${float} ${({ $duration }) => $duration} ease-in-out infinite;

  @media (max-width: 768px) {
    width: calc(${({ $size }) => $size} * 0.7);
    height: calc(${({ $size }) => $size} * 0.7);
  }
`;

// A pair of slow-floating blurred gradient blobs, dropped behind a
// section's content to echo the hero's background treatment elsewhere
// on the page. The parent must have `position: relative` (and ideally
// `overflow: hidden` or a clip-path) so the blobs stay contained.
const AmbientGlow = ({
    colorOne = "rgba(133, 76, 230, 0.45)",
    colorTwo = "rgba(255, 126, 179, 0.35)",
}) => (
    <Wrap>
        <Blob
            $top="0%"
            $left="4%"
            $size="280px"
            $color={colorOne}
            $duration="15s"
        />
        <Blob
            $bottom="0%"
            $right="6%"
            $size="240px"
            $color={colorTwo}
            $duration="18s"
        />
    </Wrap>
);

export default AmbientGlow;
