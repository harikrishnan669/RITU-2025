import BoxReveal from "@/components/magicui/box-reveal";

export default function LandingScreen() {
    return (
        <main className="relative flex items-center justify-center h-screen text-white px-20 max-sm:px-5">
            <div className="size-full flex flex-col justify-center max-sm:justify-end">
                <div
                    className="pt-10 flex items-end justify-end space-y-4 text-4xl flex-col max-sm:pb-30 max-sm:pt-0 max-sm:items-center">
                    <BoxReveal boxColor="#1f8cb7">Best season is</BoxReveal>
                    <BoxReveal boxColor="#4e9f46">
                        <div className="font-secondary text-7xl">Man Made</div>
                    </BoxReveal>
                </div>
                <div
                    className="h-fit p-0 text-[15vw]/[1] flex justify-between font-bold text-center blur-lg max-sm:hidden"
                >
                    {[..."RITUTSAV"].map((char, index) => <span className="" key={index}>{char}</span>)}
                </div>
                <div className="flex w-full justify-between items-center max-sm:hidden">
                    <div className="max-w-[400px] space-y-3">
                        <BoxReveal boxColor="#d9252e" direction={1}>
                            <div className="flex items-center gap-6 text-4xl">
                                <div className="font-secondary text-6xl">October</div>
                                19 & 20
                            </div>
                        </BoxReveal>
                        <BoxReveal boxColor="#f7ac1d" direction={1}>
                            <div>
                                RITU is the vibrant techno-cultural fest of Rajiv Gandhi Institute of Technology,
                                Kottayam,
                                Where innovation meets celebration.
                            </div>
                            <div className="text-xl font-semibold flex items-center gap-4">
                                Grab your
                                <div>
                                    <img src="/ticket.webp" className="h-[90px]"/>
                                </div>
                            </div>
                        </BoxReveal>
                    </div>

                    <BoxReveal boxColor="#ffffff">
                        <div className="flex flex-col gap-5">
                            <a href="">
                                <img src="/icons/instagram.png" alt=""/>
                            </a>
                            <a href="">
                                <img src="/icons/youtube.png" alt=""/>
                            </a>
                            <a href="">
                                <img src="/icons/facebook.png" alt=""/>
                            </a>
                        </div>
                    </BoxReveal>
                </div>

            </div>
            <img src="/ritu-ballon.png" className="absolute w-[40%] max-sm:w-[90%]"/>
        </main>
    );
}