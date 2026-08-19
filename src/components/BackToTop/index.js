import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { KeyboardArrowUp } from "@mui/icons-material";
import { getLenis } from "../SmoothScroll";

const Button = styled(motion.button)`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  background: linear-gradient(135deg, #854ce6, #ff7eb3);
  box-shadow: 0 8px 20px rgba(133, 76, 230, 0.45);
  z-index: 998;

  @media (max-width: 640px) {
    right: 16px;
    bottom: 16px;
    width: 42px;
    height: 42px;
  }
`;

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 500);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {visible && (
                <Button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                >
                    <KeyboardArrowUp fontSize="medium" />
                </Button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
