import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Module-level so other components (e.g. a "back to top" button) can
// drive the same smooth-scroll instance instead of fighting it with a
// separate native `window.scrollTo`.
let lenisInstance = null;

export const getLenis = () => lenisInstance;

// Mounts once at the app root. Renders nothing — it just replaces native
// wheel/touch scrolling with Lenis's inertia-smoothed scroll, while still
// scrolling the real document (so position:sticky, anchor links, and
// screen readers keep working, per Lenis's own guarantees).
const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            anchors: true,
            duration: 1.1,
            respectReducedMotion: true,
        });
        lenisInstance = lenis;

        return () => {
            lenisInstance = null;
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;
