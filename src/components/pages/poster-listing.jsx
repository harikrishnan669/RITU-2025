"use client"

import {Funnel} from "lucide-react"
import {useState} from "react"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import EventModal from "@/components/events/event-modal";
import EventCard from "@/components/events/event-cards";

/**
 *
 * @param events {{image: string, date: string, title: string, description: string, location: string, badge: string}[]}
 * @param maxVisibleCount
 * @constructor
 */
export default function PosterListing({events, maxVisibleCount = 3}) {
    const [visibleCount, setVisibleCount] = useState(maxVisibleCount)
    const [selectedBadges, setSelectedBadges] = useState(new Set())
    const [selectedLocations, setSelectedLocations] = useState(new Set())
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCardClick = (event) => {
        setSelectedEvent(event)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedEvent(null)
    }

    const toggleMoreLess = () => {
        if (visibleCount === maxVisibleCount) setVisibleCount(filteredEvents.length)
        else setVisibleCount(maxVisibleCount)
    }

    const uniqueBadges = [...new Set(events.map((event) => event.badge))]
    const uniqueLocations = [...new Set(events.map((event) => event.location))]

    const filteredEvents = events.filter((event) => {
        const badgeMatch = selectedBadges.size === 0 || selectedBadges.has(event.badge)
        const locationMatch = selectedLocations.size === 0 || selectedLocations.has(event.location)
        return badgeMatch && locationMatch
    })

    const toggleBadgeFilter = (badge) => {
        const newSelected = new Set(selectedBadges)
        if (newSelected.has(badge)) {
            newSelected.delete(badge)
        } else {
            newSelected.add(badge)
        }
        setSelectedBadges(newSelected)
    }

    const toggleLocationFilter = (location) => {
        const newSelected = new Set(selectedLocations)
        if (newSelected.has(location)) {
            newSelected.delete(location)
        } else {
            newSelected.add(location)
        }
        setSelectedLocations(newSelected)
    }

    const clearAllFilters = () => {
        setSelectedBadges(new Set())
        setSelectedLocations(new Set())
    }

    return (
        <div>
            <div className="w-full flex justify-end pr-6 mt-10">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="bg-white/20 border border-white/30 text-white px-6 py-2 rounded-lg transition flex items-center gap-2 hover:bg-white hover:text-black"
                        >
                            Filter
                            <Funnel className="size-5"/>
                            {(selectedBadges.size > 0 || selectedLocations.size > 0) && (
                                <span className="ml-1 bg-white/30 text-xs px-2 py-1 rounded-full">
                  {selectedBadges.size + selectedLocations.size}
                </span>
                            )}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                        <div className="px-2 py-1.5 text-sm font-semibold">Filter by Category</div>
                        {uniqueBadges.map((badge) => (
                            <DropdownMenuCheckboxItem
                                key={badge}
                                checked={selectedBadges.has(badge)}
                                onCheckedChange={() => toggleBadgeFilter(badge)}
                            >
                                {badge}
                            </DropdownMenuCheckboxItem>
                        ))}

                        <DropdownMenuSeparator/>

                        <div className="px-2 py-1.5 text-sm font-semibold">Filter by Location</div>
                        {uniqueLocations.map((location) => (
                            <DropdownMenuCheckboxItem
                                key={location}
                                checked={selectedLocations.has(location)}
                                onCheckedChange={() => toggleLocationFilter(location)}
                            >
                                {location}
                            </DropdownMenuCheckboxItem>
                        ))}

                        {(selectedBadges.size > 0 || selectedLocations.size > 0) && (
                            <>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem onClick={clearAllFilters}>Clear all filters</DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="w-full max-w-[1200px] px-4 flex flex-col items-center py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-items-center">
                    {filteredEvents.slice(0, visibleCount).map((event, idx) => (
                        <EventCard key={idx} event={event} onClick={() => handleCardClick(event)}/>
                    ))}
                </div>
                {filteredEvents.length > maxVisibleCount && (
                    <button
                        onClick={toggleMoreLess}
                        className="mt-10 bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
                    >
                        {visibleCount === maxVisibleCount ? "View All" : "View Less"}
                    </button>
                )}
                {filteredEvents.length === 0 && (
                    <div className="text-white/70 text-center py-10">No events match your current filters.</div>
                )}
            </div>

            <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    )
}
