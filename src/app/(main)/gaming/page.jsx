import Header from "@/components/header";

export default function Gaming() {
    return (
        <div
            className="relative flex justify-center items-center h-screen bg-cover bg-center px-4 sm:px-8"
            style={{ backgroundImage: "url('/gaming.webp')" }}
        >

            <div className="flex flex-col justify-start items-start lg:m-20 w-full relative gap-1">
                <Header title="Gaming" />
                <p className="text-white text-base sm:text-lg leading-relaxed max-w-xl mt-2">
                    Get ready to battle it out in the ultimate test of skill, speed, and strategy! Our gaming
                    competitions feature a variety of popular titles and thrilling challenges designed for both casual
                    players and pro-level contenders. Compete for glory, prizes, and bragging rights—let the games
                    begin!
                </p>
            </div>
        </div>
    );
}
