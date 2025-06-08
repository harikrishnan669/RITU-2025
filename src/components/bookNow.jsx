export default function BookNow({ onClick, btnColor = "bg-blue-500" }) {
	return (
		<div className="flex flex-col items-center justify-center h-24">
			<button
				style={{ backgroundColor: btnColor }}
				className={`w-24 h-10 rounded-lg text-white `}
				onClick={onClick}
			>
				Book now
			</button>
		</div>
	);
}
