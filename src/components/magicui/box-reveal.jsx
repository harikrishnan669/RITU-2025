"use client";

import { memo, useEffect, useRef, useState } from "react";


const BoxReveal = ({
                       children,
                       width = "fit-content",
                       boxColor = "#5046e6",
                       duration = 0.5,
                       direction = 0 // 0: left to right, 1: right to left, 2: top to bottom, 3: bottom to top
                   }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const getSlideDirection = () => {
        switch (direction) {
            case 0: return "translate-x-full"; // left to right
            case 1: return "-translate-x-full"; // right to left
            case 2: return "-translate-y-full"; // top to bottom
            case 3: return "translate-y-full"; // bottom to top
            default: return "translate-x-full";
        }
    };

    const slideClass = getSlideDirection();

    return (
        <div
            ref={ref}
            className="relative overflow-hidden"
            style={{ width }}
        >
            {/* Content */}
            <div
                className={`transition-all duration-500 ease-out delay-250 ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                }`}
            >
                {children}
            </div>

            {/* Sliding overlay */}
            <div
                className={`absolute inset-0 top-1 bottom-1 z-20 transition-transform duration-500 ease-in ${
                    isVisible ? slideClass : "translate-x-0 translate-y-0"
                }`}
                style={{
                    backgroundColor: boxColor,
                    transitionDuration: `${duration}s`
                }}
            />
        </div>
    );
};

export default memo(BoxReveal);
