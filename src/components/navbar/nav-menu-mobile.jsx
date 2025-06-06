import React, {useState} from 'react';
import {Menu, X} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {ScrollLocker} from "@/hooks/use-lock-scroll";

const navLinks = [
    {title: 'Home', url: '/'},
    {title: 'About', url: '/about'},
    {title: 'Services', url: '/services'},
    {title: 'Contact', url: '/contact'}
];

export default function NavMenuMobile() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const linkItemVariants = {
        hidden: {opacity: 0, y: '50%'},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"

            },
        },
        exit: {
            opacity: 0,
            y: '50%',
            transition: {
                duration: 0.1,
                ease: "easeOut" // Add ease-out easing function
            }
        },
    };


    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };


    return (
        <>
            <button className="p-3 footer-background rounded-lg glass-border" onClick={toggleModal}>
                <Menu/>
            </button>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center bg-gray-900/98"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <ScrollLocker/>
                        <button
                            className="absolute top-10 right-7 text-white cursor-pointer"
                            onClick={toggleModal}
                        >
                            <X className="size-9"/>
                        </button>
                        <motion.div
                            className="relative w-full"
                            variants={navLinksVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"

                        >
                            <div className="flex flex-col gap-8 items-center justify-center h-full ">
                                {navLinks.map((link, index) => (
                                    <motion.span
                                        key={index}
                                        className="text-white font-light text-2xl cursor-pointer"
                                        variants={linkItemVariants}
                                    >
                                        <Link href={link.url}>
                                            {link.title}
                                        </Link>
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

