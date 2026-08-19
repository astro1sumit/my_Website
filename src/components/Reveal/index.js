import React from "react";
import { motion } from "framer-motion";
import { viewportOnce } from "../../utils/motion";

// Generic scroll-triggered fade/slide-up wrapper. Drop it around a
// section title, paragraph, or block and it animates in once when it
// scrolls into view. Doesn't touch `transform` on hover-sensitive
// elements since it only ever wraps them, never merges onto them.
const Reveal = ({
    children,
    delay = 0,
    y = 30,
    duration = 0.6,
    amount = 0.2,
    once = true,
    as,
    ...rest
}) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount }}
        transition={{ duration, delay, ease: "easeOut" }}
        {...rest}
    >
        {children}
    </motion.div>
);

export default Reveal;
