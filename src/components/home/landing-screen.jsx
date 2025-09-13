import BoxReveal from "@/components/magicui/box-reveal";
import Wave from "@/components/wave/wave";

export default function LandingScreen() {
    return (
        <main className="relative flex items-center justify-center h-screen text-white container-cont">
            <div className="size-full flex flex-col justify-center max-sm:items-center">
                <div
                    className="pt-10 flex items-end justify-end space-y-4 text-4xl flex-col max-sm:pt-0 max-sm:order-2 max-sm:text-3xl max-sm:items-center">
                    <BoxReveal boxColor="#1f8cb7">Best season is</BoxReveal>
                    <BoxReveal boxColor="#4e9f46">
                        <div className="font-secondary text-7xl max-sm:text-6xl">Man Made</div>
                    </BoxReveal>
                </div>
                <div className="flex items-center justify-center w-full relative max-sm:order-1">
                    <img src="/ritu-ballon.png" draggable={false} className="select-none sm:hidden relative z-1 w-[90%]" alt="RITU 3D Logo"/>
                    <div
                        className="w-full h-fit p-0 text-[15vw]/[1] flex justify-between font-bold text-center blur-lg max-sm:blur-xs max-sm:hidden"
                    >
                        <span>R</span>
                        <span>I</span>
                        <span>T</span>
                        <span>U</span>
                        <span>T</span>
                        <span>S</span>
                        <span>A</span>
                        <span>V</span>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center max-sm:order-3 max-sm:items-center max-sm:mt-4">
                    <div className="max-w-[400px] space-y-3 max-sm:max-w-full max-sm:w-full max-sm:text-center">
                        <Wave/>

                        <BoxReveal boxColor="#d9252e" direction={1} className="max-sm:mx-auto">
                            <div className="flex items-center gap-6 text-4xl max-sm:text-xl max-sm:gap-3">
                                <div className="font-secondary text-6xl max-sm:text-3xl">October</div>
                                16 to 19
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor="#f7ac1d" direction={1} className="max-sm:mx-auto">
                            <div className="max-sm:hidden">
                                RITU is the vibrant techno-cultural fest of Rajiv Gandhi Institute of Technology,
                                Kottayam,
                                Where innovation meets celebration.
                            </div>
                            <div className="text-xl font-semibold flex items-center gap-4 max-sm:text-lg">
                                Grab your
                                <div>
                                    <img src="/ticket.webp" alt="Ticket image" className="h-[90px] max-sm:h-[30px]"/>
                                </div>
                            </div>
                        </BoxReveal>
                    </div>

                    <BoxReveal boxColor="#ffffff" className="max-sm:hidden">
                        <div className="flex flex-col gap-5">
                            <img src="/sponsors/kerala-paints-poison.webp" alt="Kerala Paints" className="w-[100px]"/>
                            {/*<a href="">*/}
                            {/*    <img src="/icons/instagram.png" alt=""/>*/}
                            {/*</a>*/}
                            {/*<a href="">*/}
                            {/*    <img src="/icons/youtube.png" alt=""/>*/}
                            {/*</a>*/}
                            {/*<a href="">*/}
                            {/*    <img src="/icons/facebook.png" alt=""/>*/}
                            {/*</a>*/}
                        </div>
                    </BoxReveal>
                </div>

            </div>
            <img src="/ritu-ballon.png" className="absolute w-[40%] max-sm:w-[90%] max-sm:hidden" alt="RITU 3D Logo"/>
        </main>
    );
}