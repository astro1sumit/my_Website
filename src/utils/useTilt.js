import { useMotionValue, useSpring } from "framer-motion";

// Pointer-following 3D tilt, spring-smoothed. Returns motion values to
// drop into a `style` prop plus the two handlers to wire up — same
// mechanism the hero photo already uses, generalized for reuse on cards.
// The parent needs `perspective` in its own CSS for the tilt to read as
// 3D depth rather than a flat skew.
export const useTilt = (maxTilt = 10, spring = { stiffness: 150, damping: 18 }) => {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRotateX = useSpring(rotateX, spring);
    const springRotateY = useSpring(rotateY, spring);

    const handleTiltMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * maxTilt);
        rotateX.set(-py * maxTilt);
    };

    const resetTilt = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return { rotateX: springRotateX, rotateY: springRotateY, handleTiltMove, resetTilt };
};
