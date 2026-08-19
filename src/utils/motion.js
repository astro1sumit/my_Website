// Reusable framer-motion variants shared across the site.
// Keeping them centralized keeps the animation feel consistent
// (same easing/duration language) wherever it's used.

export const viewportOnce = { once: true, amount: 0.2 };

// Simple fade + slide up, used for section titles/descriptions.
export const fadeUp = (delay = 0, distance = 40) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay } },
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  },
});

// Entrance for a container whose children stagger in one after another.
export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// Item to use inside a staggerContainer.
export const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Grid/list cards: index-aware so `.map((item, i) => ...)` can pass
// `custom={i}` and get a natural stagger without a shared parent variant.
// Deliberately fades opacity only (no transform) so it never fights with
// a card's existing CSS `:hover { transform: ... }` rules.
export const fadeInCard = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

// Same idea, but also slides up. Only use this on a card whose hover
// effect is expressed with `whileHover` (motion) rather than CSS
// `:hover { transform }` — otherwise the two fight over the transform.
export const fadeUpCard = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};
