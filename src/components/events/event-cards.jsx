import {Calendar, MapPin} from "lucide-react";
import React from "react";

export default function EventCard({event, onClick}) {
    return (
        <div
            className="bg-white/10 border border-white/20 rounded-xl shadow-lg overflow-hidden max-w-sm w-full flex flex-col"
            onClick={() => onClick(event)}
        >
            <div className="relative">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-60 object-cover"
                />
                {event.badge && (
                    <span
                        className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {event.badge}
                    </span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                    <Calendar className="size-4"/>
                    <span>{event.date}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-3">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="size-4"/>
                    <span>{event.location}</span>
                </div>

                {event.url &&
                    <a
                        href={event.url}
                        className="bg-purple-900 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition self-end">
                        Book Now
                    </a>
                }
            </div>
        </div>
    );
}