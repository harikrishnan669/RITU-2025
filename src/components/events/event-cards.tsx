import {Calendar, MapPin} from "lucide-react";
import React from "react";
import {IEventData} from "@/types/event";
import {Instagram} from "@/components/logos/social";
import {cn, showTimeToGo} from "@/lib/utils";


function showEventTime(date) {
    const dateObj = new Date(date);
    if (!isNaN(dateObj.getTime())) {
        return showTimeToGo(date)
    }
    return date;
}

export default function EventCard({event, onClick}: {
    event: IEventData,
    onClick: Function,
}) {
    const endDate = event.endDate && new Date(event.endDate);
    let eventEnded = false;

    if (endDate) {
        eventEnded = new Date() >= endDate;
    }


    return (
        <div
            className={cn(
                "bg-white/10 border border-white/20 rounded-xl shadow-lg overflow-hidden max-w-sm w-full flex flex-col cursor-pointer",
                eventEnded && 'grayscale-100 cursor-not-allowed'
            )}
            onClick={() => {
                if (!eventEnded)
                    onClick(event);
            }}
        >
            <div className="relative">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-60 object-cover"
                />
                {event.badge && (
                    eventEnded ?
                        <span
                            className="absolute top-2 right-2 bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                        >
                            Event Ended
                        </span> :
                        <span
                            className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {event.badge}
                    </span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                    <Calendar className="size-4"/>
                    <span>{showEventTime(event.date)}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 capitalize">
                    {(event.title || '').toLowerCase()}
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-3">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-white/70 justify-between w-full">
                    <div className="flex items-center gap-2 max-w-[90%]">
                        <MapPin className="size-4"/>
                        <span>{event.location}</span>
                    </div>
                    {event.instagram &&
                        <a href={event.instagram}>
                            <Instagram className="fill-white opacity-70" width='16px'/>
                        </a>
                    }
                </div>
            </div>
        </div>
    );
}