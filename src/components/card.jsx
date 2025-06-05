export default function Card({ imgSource, buttonColor }) {
    return (
        <div
            className={`bg-white w-[24vw] h-content rounded-[3rem] `}
        >
            
            <img
                src={imgSource || "https://via.placeholder.com/150"}
                alt="Event"
                className="w-full max-h-full object-contain" />


            <div className="flex flex-col items-center justify-center h-24">

            <button className="w-24 h-10 rounded-lg" style={{ backgroundColor: buttonColor }}>Book now</button>
            </div>
        </div>
    );
}