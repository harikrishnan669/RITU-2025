"use client";


import {MorphingText} from "@/components/magicui/morphing-text";

export default function Home() {

    return <main className="overflow-y-auto size-full">
        <div className="w-full h-full flex items-center justify-center">
            <MorphingText texts={["ഋതു 25", "RITU 25", "ரிது 25", "ऋतु 25", "ಋತು 25"]} className="text-white"/>
        </div>
    </main>
}
