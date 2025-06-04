import Header from "@/components/header";

export default function Accommodation() {
    return (
        <div className="flex flex-col lg:justify-center gap-8 min-h-screen items-center px-2 lg:m-5 lg:px-20 j">
            <Header title="Accommodation"/>
            <div className="lg:max-w-5xl lg:space-y-5 text-start text-xl font-sans">
                <p className="">
                    During the event days, attendees have the opportunity to stay in paid hostel facilities which are
                    available for both boys and girls. These hostel facilities are a great option for those who are
                    traveling from out of town and need a convenient and affordable place to stay during the event.
                </p>
                <p>
                    To secure a spot in the hostel, attendees can book ahead of time using the given link. This allows
                    them
                    to reserve their spot and ensure that they have a comfortable and secure place to stay throughout
                    the
                    duration of the event.
                </p>
            </div>


            <button
                className="bg-white text-black rounded-xl p-6 font-semibold text-lg hover:bg-[#011f55] max-w-xl hover:text-white cursor-pointer transition-colors duration-200 shadow-lg">
                Book Accommodation
            </button>
        </div>
    );
}