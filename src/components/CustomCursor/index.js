import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Dot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  border-radius: 50%;
  background: #ffffff;
  pointer-events: none;
  z-index: 10000;
  mix-blend-mode: difference;
`;

const Ring = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 34px;
  height: 34px;
  margin: -17px 0 0 -17px;
  border-radius: 50%;
  border: 1.5px solid rgba(133, 76, 230, 0.7);
  pointer-events: none;
  z-index: 9999;
`;

const HOVER_SELECTOR =
    "a, button, input, textarea, select, [role='button'], .cursor-hover";

// A magnetic-feeling two-part cursor (a tight dot + a lagging ring) that
// grows over interactive elements. Only activates on fine-pointer (mouse)
// devices — touch/coarse-pointer visitors keep the native cursor and never
// pay for the mousemove listeners.
const CustomCursor = () => {
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
    const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });

    useEffect(() => {
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!isFinePointer) return undefined;

        setEnabled(true);
        document.body.classList.add("custom-cursor-active");

        const handleMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        const handleOver = (e) => {
            if (e.target.closest?.(HOVER_SELECTOR)) setHovering(true);
        };
        const handleOut = (e) => {
            if (e.target.closest?.(HOVER_SELECTOR)) setHovering(false);
        };

        window.addEventListener("mousemove", handleMove, { passive: true });
        document.addEventListener("mouseover", handleOver);
        document.addEventListener("mouseout", handleOut);

        return () => {
            document.body.classList.remove("custom-cursor-active");
            window.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseover", handleOver);
            document.removeEventListener("mouseout", handleOut);
        };
    }, [x, y]);

    if (!enabled) return null;

    return (
        <>
            <Dot
                style={{ x, y }}
                animate={{ scale: hovering ? 0 : 1 }}
                transition={{ duration: 0.2 }}
            />
            <Ring
                style={{ x: ringX, y: ringY }}
                animate={{ scale: hovering ? 1.9 : 1, opacity: hovering ? 1 : 0.6 }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
};

export default CustomCursor;
