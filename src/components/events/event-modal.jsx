"use client"

import {Calendar, MapPin} from "lucide-react"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"


export default function EventModal({event, isOpen, onClose}) {
    if (!event) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="max-md:min-w-[90%] max-md:overflow-auto min-w-fit h-fit max-w-fit bg-white/95 backdrop-blur-sm border-white/20 text-black p-0 overflow-hidden">
                <div className="flex flex-col md:flex-row h-full max-h-[80vh] max-w-full">
                    <div className="relative flex-1">
                        <img
                            className="h-full aspect-[4/5]"
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
                                <DialogTitle className="text-2xl font-bold text-black pr-4">{event.title}</DialogTitle>
                            </div>
                        </DialogHeader>

                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-3 text-black/70">
                                <Calendar className="size-5"/>
                                <span className="text-lg">{event.date}</span>
                            </div>

                            <div className="flex items-center gap-3 text-black/70">
                                <MapPin className="size-5"/>
                                <span className="text-lg">{event.location}</span>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-black">About this event</h3>
                                <p className="text-black/80 leading-relaxed">{event.description}</p>
                            </div>
                        </div>

                        {event.url &&
                            <div className="mt-8 pt-6 border-t border-black/10">
                                <a className="block px-4 py-3 rounded-lg text-center w-full bg-black text-white hover:bg-black/80" href={event.url}>Get
                                    Tickets</a>
                            </div>
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
