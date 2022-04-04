export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2 },
  },
};

export const moverighttVariants = {
  hidden: {
    opacity: 0,
    x: "-5vw",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const moveLeftVariants = {
  hidden: {
    opacity: 0,
    x: "5vw",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const zoomoutVariants = {
  hidden: {
    opacity: 0,
    transform: "scale(0.5)",
  },
  visible: {
    opacity: 1,
    transform: "scale(1)",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const scrollVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};
