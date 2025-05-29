"use client";
import {motion, useAnimation, useInView} from "motion/react";
import {memo, useEffect, useRef} from "react";


function getVariants(dir) {
    switch (dir) {
        case 0:
            return {
                hidden: {left: 0},
                visible: {left: "100%"},
            }
        case 1:
            return {
                hidden: {right: 0},
                visible: {right: "100%"},
            }
        case 2:
            return {
                hidden: {top: 0},
                visible: {top: "100%"},
            }
        case 3:
            return {
                hidden: {bottom: 0},
                visible: {bottom: "100%"},
            }
        default:
            return {
                hidden: {left: 0},
                visible: {left: "100%"},
            }

    }
}

const BoxReveal = ({
                              children,
                              width = "fit-content",
                              boxColor = "#5046e6",
                              duration,
                              direction = 0 // 0: left to right, 1: right to left, 2: top to bottom, 3: bottom to top
                          }) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            slideControls.start("visible");
            mainControls.start("visible");
        } else {
            slideControls.start("hidden");
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, slideControls]);


    return (
        <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: duration ? duration : 0.5, delay: 0.25}}>
                {children}
            </motion.div>
            <motion.div
                variants={getVariants(direction)}
                initial="hidden"
                animate={slideControls}
                transition={{duration: duration ? duration : 0.5, ease: "easeIn"}}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    background: boxColor,
                }}/>
        </div>
    );
};


export default memo(BoxReveal);