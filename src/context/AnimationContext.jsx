import { React, createContext } from "react";
const AnimationContext = createContext();

export function AnimationProvider({ children }) {
    const textAnimation1 = {
        initial: { opacity: 0, top: -30 },
        whileInView: { opacity: 1, top: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true }
    }
    const textAnimation2 = {
        initial: { opacity: 0, top: -40 },
        whileInView: { opacity: 1, top: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        viewport: { once: true }
    }
    const mainTextAnimation = {
        initial: { opacity: 0, top: -60 },
        whileInView: { opacity: 1, top: 0 },
        transition: { duration: 0.5, delay: 0.3 },
        viewport: { once: true }
      }

    return (
        <AnimationContext.Provider value={{ textAnimation1, textAnimation2, mainTextAnimation }}>
            {children}
        </AnimationContext.Provider>
    )
}

export default AnimationContext