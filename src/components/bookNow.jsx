import Link from "next/link";

export default function BookNow({
	onClk = () => console.log("Book now clicked"),
	btnColor = "bg-blue-500",
}) {
	return (
		<Link href="/">
			<button
				style={{ backgroundColor: btnColor }}
				className={`w-24 h-10 z-50 cursor-pointer hover:scale-105 transition-transform duration-200 rounded-lg text-white `}
				onClick={onClk}
			>
				Book now
			</button>
		</Link>
	);
}
