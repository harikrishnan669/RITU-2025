"use client"

import {Calendar, MapPin, Phone} from "lucide-react"
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {IEventData} from "@/types/event";
import {Instagram} from "@/components/logos/social";


export default function EventModal({event, isOpen, onClose}: {
    event: IEventData;
    isOpen: boolean;
    onClose: Function;
}) {
    if (!event) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="max-md:min-w-[90%] max-sm:w-[100dvw] max-sm:max-w-[100dvw] max-md:overflow-auto min-w-fit h-fit bg-white/95 backdrop-blur-sm max-w-full max-sm:max-h-full max-sm:min-h-full border-white/20 text-black p-0 overflow-hidden">
                <div
                    className="flex flex-col md:flex-row h-full max-h-[80vh] max-w-full max-sm:max-h-full max-sm:min-h-full max-sm:overflow-x-hidden">
                    <div className="relative flex-1">
                        <img
                            className="h-full max-sm:w-[100vw] max-sm:min-w-full aspect-[4/5]"
                            src={event.image}
                            alt={event.title}
                        />
                        {event.badge && (
                            <span
                                className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {event.badge}
                            </span>
                        )}
                    </div>

                    {/* Right side - Event details */}
                    <div className="flex-1 p-8 flex flex-col">
                        <DialogHeader className="mb-6">
                            <div className="flex justify-between items-start">
                                <DialogTitle
                                    className="text-2xl font-bold text-black pr-4 capitalize">{event.title.toLowerCase()}</DialogTitle>
                            </div>
                        </DialogHeader>

                        <div className="flex-1 space-y-1 text-sm">
                            <div className="flex items-center gap-3 text-black/70">
                                <Calendar className="size-5"/>
                                {event.date}
                            </div>

                            <div className="flex items-center gap-3 text-black/70">
                                <MapPin className="size-5"/>
                                {event.location}
                            </div>

                            {event.instagram &&
                                <a href={event.instagram} className="flex items-center gap-3 text-black/70">
                                    <Instagram className="size-5 opacity-70"/>
                                    {event.instagram}
                                </a>}

                            {event.contact && event.contact.length > 0 &&
                                <div className="flex items-center gap-3 text-black/70">
                                    <Phone className="size-5"/>
                                    <div>
                                        {event.contact.map((contact, idx) => (
                                            <div key={idx}>
                                                {contact.name}: <a href={`tel:${contact.number}`}
                                                                   className="underline">{contact.number}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>}

                            <hr className="mt-3 mb-3"/>

                            <h3 className="text-lg font-semibold mb-3 text-black">About this event</h3>
                            <p className="text-black/80 leading-relaxed line-clamp-6">{event.description}</p>
                            {event.club && <>
                                    <hr className="mt-3 mb-3"/>
                                    <p className="text-lg">By <b>{event.club}</b></p>
                                </>
                            }
                        </div>

                        {event.url &&
                            <div className="mt-8 pt-6 border-t border-black/10">
                                <a className="block px-4 py-3 rounded-lg text-center w-full bg-black text-white hover:bg-black/80"
                                   href={event.url}>Get
                                    Tickets</a>
                            </div>
                        }

                        <div className="hidden max-sm:flex mt-5">
                            <DialogClose
                                className="block px-4 py-3 rounded-lg text-center w-full bg-red-600 text-white hover:bg-black/80">
                                Close
                            </DialogClose>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
