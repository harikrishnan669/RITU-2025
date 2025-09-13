import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen px-4 md:px-0">
            <div className="flex flex-col items-center md:items-start md:ml-20">
                <p className="text-[3rem] md:text-[6rem] text-white text-center md:text-left">
                    ERROR
                </p>
                <Link href="/" className="hidden md:inline-block mt-6 px-4 py-2 bg-white text-black rounded hover:bg-[#5C032F] hover:text-white w-max">
                    Go Back Home
                </Link>
            </div>
            <div className="flex flex-col items-center mt-8 md:mt-0 md:ml-20">
                <Image
                    src="/error-404.webp"
                    alt="Error 404"
                    width={250}
                    height={250}
                    className="md:w-[350px] md:h-[350px]"
                />
                <p className="text-[2rem] text-white text-center ">Page Not Found</p>
                <Link href="/" className="mt-6 px-4 py-2 text-black bg-white rounded hover:bg-[#5C032F] hover:text-white w-max md:hidden"> {/*only visible on mobile*/}
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
