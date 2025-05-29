"use client";
import {useState} from "react";
import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import {Grip} from "lucide-react";
import navCSS from "./navbar.module.css";

export default function Menu() {
    const [open, setOpen] = useState(false);

    const navItems = [
        "Home",
        "Events",
        "Culturals",
        "Accommodation",
        "Gallery",
        "Contact",
    ];

    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: -10},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -10},
    };

    return (
        <AnimatePresence>

            <motion.div layout className="nav-bar-glass rounded-2xl flex items-center justify-between px-7 py-2 h-fit gap-8">
                {open && (
                    <motion.div
                        className="flex gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="open"
                        exit="closed"
                    >
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <Link href="/" className={navCSS.navbar_item}>
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                <button onClick={() => setOpen((prev) => !prev)} className="text-white">
                    <Grip/>
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
