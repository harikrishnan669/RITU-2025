import Timer from "@/components/timer";
import {MorphingText} from "@/components/magicui/morphing-text";


export default function ComingSoon() {
    return (
        <main className="flex items-center justify-center h-screen text-white">
            <div className="text-center">
                <div className="w-full text-center mb-3">
                    <img src="/ritu-oil.webp" className="mx-auto w-[70%] max-w-[400px]" alt="RITU Logo"/>
                </div>
                {/*<h1 className="text-4xl font-bold mb-4 max-sm:mt-10">RITU 2025</h1>*/}
                <MorphingText texts={["ഋതു 25", "RITU 25", "ரிது 25", "ऋतु 25", "ಋತು 25"]} className="text-white"/>
                <h2 className="text-3xl font-secondary mt-3">Coming Soon</h2>
                <Timer/>
            </div>
        </main>
    );
}