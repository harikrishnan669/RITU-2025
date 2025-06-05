"use client";

import BlurFade from "@/components/magicui/blurr-fade";
import {useEffect, useRef, useState} from "react";

export default function Test() {
    const images = [...Array(20)].map((_, i) => {
        const isLandscape = i % 2 === 0;
        const width = isLandscape ? 800 : 600;
        const height = isLandscape ? 600 : 800;
        return `https://picsum.photos/seed/${i + 10}/${width}/${height}`;
    });

    const ImageRef = useRef(null)
    const [titleHeight, setTitleHeight] = useState(0);
    useEffect(() => {
        const updateHeight = () => {
            if (ImageRef.current) {
                setTitleHeight(ImageRef.current.clientHeight);
            }
        };
        updateHeight();

        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <div className="relative">
            <div className="relative z-0">
                <img className="absolute top-0 left-0 w-full object-cover object-center z-0 max-h-[100vh] min-h-[400px]"
                     src={'/gallery.png'}
                     alt=""
                     ref={ImageRef}
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none"/>
            </div>
            <div
                className={`relative flex flex-col items-center justify-center text-left z-30 ${titleHeight} bg-black/20 transition-all duration-300 ease-in-out`}
                style={{ minHeight: titleHeight || '100vh' }}
            >
            <div className="min-w-[50%] max-w-[50%] max-md:min-w-[90%]">
                    <h2 className="text-7xl mb-8 max-md:mb-4 text-left text-white tracking-widest max-w-fit max-md:text-2xl">
                        Gallery
                    </h2>
                    <p className="text-xl text-left max-md:text-sm">
                        Every photo tells a story — not just of light and shadow, but of emotion, time, and perspective.
                        A gallery is where moments become memories, frozen in beauty.
                    </p>
                </div>
            </div>
            <div className="columns-2 gap-4 sm:columns-3 md:columns-4 px-22 mb-20 py-2 max-md:px-6 pt-20">
                {images.map((imageUrl, index) => (
                    <BlurFade key={imageUrl} delay={0.25 + index * 0.05} inView>
                        <img
                            className="mb-4 size-full rounded-lg object-contain hover:scale-95 transition-transform duration-300 ease-in-out"
                            src={imageUrl}
                            alt=''
                        />
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}