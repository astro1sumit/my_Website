import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Bio } from "../../data/constants";

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 20000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  background: #1c1c27;
`;

const Name = styled(motion.div)`
  font-size: clamp(26px, 6vw, 46px);
  font-weight: 700;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #854ce6, #ff7eb3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BarTrack = styled.div`
  width: 180px;
  height: 3px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
`;

const BarFill = styled(motion.div)`
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #854ce6, #ff7eb3);
`;

// Brief branded loading screen. Dismisses itself on a fixed timer rather
// than window "load" — CRA's dev hot-reload makes "load" fire at odd
// times, a fixed timer is predictable and keeps this short either way.
const Preloader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const timer = setTimeout(() => setVisible(false), 1400);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!visible) {
            document.body.style.overflow = "";
        }
    }, [visible]);

    return (
        <AnimatePresence>
            {visible && (
                <Overlay
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Name
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {Bio.name}
                    </Name>
                    <BarTrack>
                        <BarFill
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                        />
                    </BarTrack>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
