import Timer from "@/components/timer";


export default function ComingSoon() {
    return (
        <main className="flex items-center justify-center h-screen text-white">
            <div className="text-center">
                <div className="w-full text-center mb-3">
                    <img src="/ritu-oil.webp" className="mx-auto w-[70%] max-w-[400px]" alt="RITU Logo"/>
                </div>
                <h1 className="text-4xl font-bold mb-4">RITU 2025</h1>
                <h2 className="text-2xl">Coming Soon</h2>
                <Timer/>
            </div>
        </main>
    );
}