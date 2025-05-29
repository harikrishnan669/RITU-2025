"use client";

import React, {useMemo} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Countdown from "react-countdown";

const animation = {
    hidden: (direction) => ({
        y: direction === 1 ? 30 : -30,
        opacity: 0,
        filter: "blur(4px)",
    }),
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {duration: 0.3},
    },
    exit: (direction) => ({
        y: direction === 1 ? -30 : 30,
        opacity: 0,
        filter: "blur(4px)",
        transition: {duration: 0.3},
    }),
};

const Completionist = () => <p>You are good to go!</p>;


function AnimatedCounter({value, direction = -1}) {
    return <AnimatePresence mode="popLayout" custom={direction}>
        <div className="flex">
            {value
                .toString()
                .padStart(2, "0")
                .split("")
                .map((value, index) => (
                    <motion.span
                        key={`${value}-${index}`}
                        variants={animation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={direction}
                        className="inline-block"
                    >
                        {value}
                    </motion.span>
                ))}
        </div>
    </AnimatePresence>
}

const Counter = () => {
    const direction = -1;
    const targetDate = "10-10-2025"; // Change this to your target date in "DD-MM-YYYY" format
    const parsedDate = useMemo(() => {
        const [day, month, year] = targetDate.split("-").map(Number);
        return new Date(year, month - 1, day);
    }, [targetDate]);

    return (
        <div className="h-[100px] flex items-center justify-center gap-4 text-4xl font-mono mt-3">
            <Countdown
                date={parsedDate}
                renderer={({days, hours, minutes, seconds, completed}) => {
                    if (completed) {
                        return <Completionist/>;
                    }
                    return (
                        <div className="max-sm:text-xl flex gap-3">
                                <span
                                    className="w-[100px] max-sm:w-[30px] text-right flex items-baseline gap-2 max-sm:flex-col max-sm:gap-0">
                                    <AnimatedCounter value={days} direction={direction}/>
                                    <div className="text-[#f0b830] text-sm max-sm:text-xs opacity-70">
                                        <span>Days</span>
                                    </div>
                                </span>
                            :
                            <span
                                className="w-[100px] max-sm:w-[30px] text-right flex items-baseline gap-2 max-sm:flex-col max-sm:gap-0">
                                    <AnimatedCounter value={hours} direction={direction}/>
                                    <div className="text-[#e62d36] text-sm max-sm:text-xs opacity-70">
                                        <span className="max-sm:hidden">Hours</span>
                                        <span className="sm:hidden">Hrs</span>
                                    </div>
                                </span>
                            :
                            <span
                                className="w-[120px] max-sm:w-[30px] text-right flex items-baseline gap-2 max-sm:flex-col max-sm:gap-0">
                                    <AnimatedCounter value={minutes} direction={direction}/>
                                    <div className="text-[#2895c4] text-sm max-sm:text-xs opacity-70">
                                        <span className="max-sm:hidden">Minutes</span>
                                        <span className="sm:hidden">Min</span>
                                    </div>
                                </span>
                            :
                            <span
                                className="w-[120px] max-sm:w-[30px] text-right flex items-baseline gap-2 max-sm:flex-col max-sm:gap-0">
                                    <AnimatedCounter value={seconds} direction={direction}/>
                                    <div className="text-[#6fb75f] text-sm max-sm:text-xs opacity-70">
                                        <span className="max-sm:hidden">Seconds</span>
                                        <span className="sm:hidden">Sec</span>
                                    </div>
                                </span>
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default Counter;
