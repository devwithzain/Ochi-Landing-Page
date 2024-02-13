export const navVariants = {
    hidden: { y: "-100%" },
    vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 }, }
};

export const navVariants1 = {
    hidden: { y: "-100%" },
    vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 }, }
};

export const footerVarient = {
    hidden: { y: 150, opacity: 0 },
    vissible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }, },
};


export const animation = {
    initial: { y: "100%" },
    enter: (index: number) => ({
        y: "0",
        transition: {
            duration: 0.75,
            ease: [0.33, 1, 0.68, 1],
            delay: index * 0.5,
        },
    }),
};


// navbar
// MENUSLIDE
export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
        x: "calc(100% + 100px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};
// SLIDE
export const slide = {
    initial: { x: 80 },
    enter: (i: number) => ({
        x: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
    exit: (i: number) => ({
        x: 80,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
};

// SCALE
export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } },
};

// CURVE
let initialPath = "";
let targetPath = "";

if (typeof window !== "undefined") {
    initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
        } Q-100 ${window.innerHeight / 2} 100 0`;
    targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
        } Q100 ${window.innerHeight / 2} 100 0`;
}

export const curve = {
    initial: {
        d: initialPath,
    },
    enter: {
        d: targetPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        d: initialPath,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};

