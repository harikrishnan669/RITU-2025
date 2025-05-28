"use client";


import {MorphingText} from "@/components/magicui/morphing-text";

export default function Home() {

    return <main className="overflow-y-auto size-full">
        <div className="w-full h-full flex items-center justify-center">
            <MorphingText texts={["റിതു", "RITU", "ரிது", "ऋतु", "ಋತು"]} className="text-white"/>
        </div>
    </main>
}
