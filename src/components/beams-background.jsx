"use client";
import {memo, useEffect, useRef, useState} from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import {useIsLtMaxWidth} from "@/hooks/use-is-lt-max-width";

function createBeam(width, height) {
    const isMobile = false;
    const angle = -35 + Math.random() * 10
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: isMobile ? 20 + Math.random() * 40 : 30 + Math.random() * 60,
        length: height * (isMobile ? 1.5 : 2.5),
        angle: angle,
        speed: (isMobile ? 0.4 : 0.6) + Math.random() * (isMobile ? 0.8 : 1.2),
        opacity: 0.08 + Math.random() * (isMobile ? 0.08 : 0.16),
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
    };
}

function BeamsBackground({
                                            className,
                                            intensity = "strong"
                                        }) {

    const canvasRef = useRef(null)
    const beamsRef = useRef([])
    const animationFrameRef = useRef(0)
    const lastFrameTime = useRef(0)
    const [isVisible, setIsVisible] = useState(true)
    const isMobile = useIsLtMaxWidth();


    // Detect mobile and visibility
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        }
        document.addEventListener('visibilitychange', handleVisibilityChange)

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange)
        }
    }, [])

    const MINIMUM_BEAMS = isMobile ? 18 : 20
    const TARGET_FPS = isMobile ? 30 : 60
    const FRAME_INTERVAL = 1000 / TARGET_FPS

    // const opacityMap = {
    //     subtle: isMobile ? 0.5 : 0.7,
    //     medium: isMobile ? 0.6 : 0.85,
    //     strong: isMobile ? 0.8 : 1,
    // }
    const opacityMap = {
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    }


    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Optimize canvas context
        ctx.imageSmoothingEnabled = false

        const updateCanvasSize = () => {
            const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2)
            const width = window.innerWidth
            const height = window.innerHeight + 100

            canvas.width = width * dpr
            canvas.height = height * dpr
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`
            ctx.scale(dpr, dpr)

            const totalBeams = MINIMUM_BEAMS * (isMobile ? 1 : 1.5)
            beamsRef.current = Array.from({length: totalBeams}, () =>
                createBeam(width, height, isMobile)
            )
        }

        updateCanvasSize()
        // TODO - At a corner here; In mobile the screen height can change according to scroll. This means the function will cause the canvas to rerender
        // window.addEventListener("resize", updateCanvasSize)

        function resetBeam(beam, index, totalBeams) {
            if (!canvas) return beam

            const column = index % 3
            const spacing = canvas.width / 3

            beam.y = canvas.height + 100
            beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
            beam.width = isMobile ? 60 + Math.random() * 60 : 100 + Math.random() * 100
            beam.speed = (isMobile ? 0.3 : 0.5) + Math.random() * 0.4
            beam.hue = 190 + (index * 70) / totalBeams
            beam.opacity = (isMobile ? 0.15 : 0.2) + Math.random() * 0.1
            return beam
        }

        function drawBeam(ctx, beam) {
            ctx.save()
            ctx.translate(beam.x, beam.y)
            ctx.rotate((beam.angle * Math.PI) / 180)

            // Simplified pulsing for mobile
            const pulsingOpacity = isMobile
                ? beam.opacity * opacityMap[intensity]
                : beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity]

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)

            // if (isMobile) {
            //     // Simplified gradient for mobile
            //     gradient.addColorStop(0, `hsla(${beam.hue}, 70%, 60%, 0)`)
            //     gradient.addColorStop(0.5, `hsla(${beam.hue}, 70%, 60%, ${pulsingOpacity})`)
            //     gradient.addColorStop(1, `hsla(${beam.hue}, 70%, 60%, 0)`)
            // } else {
                // Full gradient for desktop
                gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`)
                gradient.addColorStop(0.1, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
                gradient.addColorStop(0.4, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
                gradient.addColorStop(0.6, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`)
                gradient.addColorStop(0.9, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
                gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`)
            // }

            ctx.fillStyle = gradient
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
            ctx.restore()
        }

        function animate(currentTime) {
            if (!isVisible) {
                animationFrameRef.current = requestAnimationFrame(animate)
                return
            }

            // Frame rate limiting
            if (currentTime - lastFrameTime.current < FRAME_INTERVAL) {
                animationFrameRef.current = requestAnimationFrame(animate)
                return
            }
            lastFrameTime.current = currentTime

            if (!canvas || !ctx) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Reduced blur for mobile
            ctx.filter = `blur(${isMobile ? '15px' : '35px'})`

            const totalBeams = beamsRef.current.length
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed
                if (!isMobile) {
                    beam.pulse += beam.pulseSpeed
                }

                // Reset beam when it goes off screen
                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams)
                }

                drawBeam(ctx, beam)
            })

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animationFrameRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("resize", updateCanvasSize)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [intensity, isMobile, isVisible])

    return (
        <div className={cn("relative min-h-screen w-full overflow-hidden bg-neutral-950", className)}>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 h-[calc(100vh+60px)] w-[100vw]"
                style={{
                    filter: isMobile ? "blur(8px)" : "blur(15px)",
                    willChange: "transform"
                }}
            />
            {!isMobile && (
                <motion.div
                    className="absolute inset-0 bg-neutral-950/5"
                    animate={{
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 10,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{
                        backdropFilter: "blur(50px)",
                    }}
                />
            )}
        </div>
    )
}

export default memo(BeamsBackground);