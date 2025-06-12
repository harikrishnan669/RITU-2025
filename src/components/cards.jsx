import {Calendar, MapPin} from "lucide-react";
import React from "react";

export default function EventCard({event}) {
    return (
        <div
            className="bg-white/10 border border-white/20 rounded-xl shadow-lg overflow-hidden max-w-sm w-full flex flex-col">
            <div className="relative">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                />
                {event.badge && (
                    <span
                        className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {event.badge}
          </span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-white-500 mb-1">
                    <span className="mr-2"><Calendar className="size-5"/></span> {event.date}
                </div>
                <h2 className="text-lg font-semibold text-white-800 mb-1">
                    {event.title}
                </h2>
                <p className="text-white-600 mb-3 flex-grow text-sm">{event.description}</p>
                <div className="flex items-center text-sm text-white-500 mb-3">
                    <span className="mr-2"><MapPin className="size-5"/></span> {event.location}
                </div>
                <button
                    className="bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition self-end">
                    Book Now
                </button>
            </div>
        </div>
    );
}