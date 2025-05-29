"use client";

import {cn} from "@/lib/utils";
import {AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll, useTransform,} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {Grip} from "lucide-react";


const Reveal = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [height, setHeight] = useState(0);
    const [mounted, setMounted] = useState(false);
    const {scrollY} = useScroll();
    const lastYRef = useRef(0);
    const navbarWidth = useMotionValue(65);
    const routesOpacity = useTransform(navbarWidth, [65, 500], [0, 1]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (y) => {
        const difference = y - lastYRef.current;

        if (difference > 50) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }

        setHeight(difference);
    });

    const firstNavVariants = {
        hidden: {
            width: 65,
            background: "transparent",
        },
        vissible: {
            width: 500,
            background: "rgb(0,0,0,0.5)",
        },
    };

    const routes = ["Home", "About", "Pricing", "FAQ"];

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useMotionValueEvent(navbarWidth, "change", (latest) => {
        setIsNavbarOpen(latest > 65); // open when wider than collapsed width
    });


    if (!mounted) return <div>Loading...</div>;

    console.log("Hidden", isHidden, navbarWidth, height, routesOpacity, isNavbarOpen);

    return (
        <motion.nav
            animate={height > 50 && !isHidden ? "vissible" : "hidden"}
            whileHover="vissible"
            initial="hidden"
            exit="hidden"
            onFocusCapture={() => setIsHidden(false)}
            variants={firstNavVariants}
            transition={{duration: 0.25}}
            className={cn(
                "p-[10px] z-[10000000000] h-[65px] overflow-hidden rounded-lg flex items-center justify-between pr-6",
            )}
            style={{
                width: navbarWidth,
            }}
        >
            {!isNavbarOpen &&
                <div
                    className="h-[50px] bg-black rounded-lg max-w-[50px] min-w-[50px] flex items-center justify-center"
                >
                    <Grip className="text-white"/>
                </div>
            }
            <div className="mr-10"/>
            <AnimatePresence>
                {(height >= 0 || !isHidden) && (
                    <motion.ul className="flex items-center gap-10">
                        {routes.map((route) => (
                            <motion.li
                                key={route}
                                className="text-white text-xl cursor-pointer"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                style={{
                                    opacity: routesOpacity,
                                }}
                            >
                                {route}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            <motion.div
                animate={{
                    height: 50,
                }}
                className="bg-black rounded-lg max-w-[50px] min-w-[50px] flex items-center justify-center"
            >
                <Grip className="text-white"/>
            </motion.div>
        </motion.nav>
    );
};

export default Reveal;
