import { css } from "styled-components";

// A cursor-following radial glow, meant to be interpolated into a card's
// styled-components template: `${spotlightOverlay()}`. It's painted as a
// negative-z-index ::after so it always sits between the card's own
// background and its content — never on top of text/images.
//
// Pair it with `onMouseMove={handleSpotlightMove}` on the same element so
// the --spot-x/--spot-y custom properties it reads are kept up to date.
export const spotlightOverlay = (rgb = "133, 76, 230", size = "260px") => css`
  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    border-radius: inherit;
    background: radial-gradient(
      ${size} circle at var(--spot-x, 50%) var(--spot-y, 50%),
      rgba(${rgb}, 0.32),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

// Writes the pointer position (relative to the hovered element) into CSS
// custom properties via a direct DOM mutation — not React state — so the
// glow tracks the cursor at 60fps without triggering re-renders.
export const handleSpotlightMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};
