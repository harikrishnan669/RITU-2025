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
import EventModal from "@/components/events/event-modal"
import EventCard from "@/components/events/event-cards"
import type {IEventData} from "@/types/event"

export default function PosterListing({
                                          events,
                                          showFilter = true,
                                          maxVisibleCount = 3,
                                      }: {
    events: IEventData[],
    showFilter?: boolean,
    maxVisibleCount?: number
}) {
    const [visibleCount, setVisibleCount] = useState(maxVisibleCount);
    const [selectedBadges, setSelectedBadges] = useState(new Set())
    const [selectedLocations, setSelectedLocations] = useState(new Set())
    const [selectedClubs, setSelectedClubs] = useState(new Set())
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
        if (visibleCount === maxVisibleCount) setVisibleCount(filteredAndSortedEvents.length)
        else setVisibleCount(maxVisibleCount)
    }

    const uniqueBadges = [...new Set(events.map((event) => event.badge).filter(Boolean))]
    const uniqueLocations = [...new Set(events.map((event) => event.location).filter(Boolean))]
    const uniqueClubs = [...new Set(events.map((event) => event.club).filter(Boolean))]

    const filteredEvents = events.filter((event) => {
        const badgeMatch = selectedBadges.size === 0 || selectedBadges.has(event.badge)
        const locationMatch = selectedLocations.size === 0 || selectedLocations.has(event.location)
        const clubMatch = selectedClubs.size === 0 || selectedClubs.has(event.club)
        return badgeMatch && locationMatch && clubMatch
    })

    const filteredAndSortedEvents = filteredEvents.sort((a, b) => {
        const currentDate = new Date()
        const aEnded = a.endDate ? new Date(a.endDate) <= currentDate : false
        const bEnded = b.endDate ? new Date(b.endDate) <= currentDate : false

        // If one event has ended and the other hasn't, prioritize the active one
        if (aEnded && !bEnded) return 1
        if (!aEnded && bEnded) return -1

        // If both are active or both have ended, sort by createdDate (newest first)
        if (a.createdDate && b.createdDate) {
            return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
        }

        // If only one has createdDate, prioritize it
        if (a.createdDate && !b.createdDate) return -1
        if (!a.createdDate && b.createdDate) return 1

        // Fallback to date comparison
        return new Date(b.date).getTime() - new Date(a.date).getTime()
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

    const toggleClubFilter = (club) => {
        const newSelected = new Set(selectedClubs)
        if (newSelected.has(club)) {
            newSelected.delete(club)
        } else {
            newSelected.add(club)
        }
        setSelectedClubs(newSelected)
    }

    const clearAllFilters = () => {
        setSelectedBadges(new Set())
        setSelectedLocations(new Set())
        setSelectedClubs(new Set())
    }

    if (events.length === 0) {
        return <div className="w-full text-center py-10 text-white/70">No events available at the moment.</div>
    }

    return (
        <div>
            {showFilter && <div className="w-full flex justify-end pr-6 mt-10">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="bg-white/20 border border-white/30 text-white px-6 py-2 rounded-lg transition flex items-center gap-2 hover:bg-white hover:text-black"
                        >
                            Filter
                            <Funnel className="size-5"/>
                            {(selectedBadges.size > 0 || selectedLocations.size > 0 || selectedClubs.size > 0) && (
                                <span className="ml-1 bg-white/30 text-xs px-2 py-1 rounded-full">
                  {selectedBadges.size + selectedLocations.size + selectedClubs.size}
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

                        {uniqueClubs.length > 0 && (
                            <>
                                <DropdownMenuSeparator/>
                                <div className="px-2 py-1.5 text-sm font-semibold">Filter by Club</div>
                                {uniqueClubs.map((club) => (
                                    <DropdownMenuCheckboxItem
                                        key={club}
                                        checked={selectedClubs.has(club)}
                                        onCheckedChange={() => toggleClubFilter(club)}
                                    >
                                        {club}
                                    </DropdownMenuCheckboxItem>
                                ))}
                            </>
                        )}

                        {(selectedBadges.size > 0 || selectedLocations.size > 0 || selectedClubs.size > 0) && (
                            <>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem onClick={clearAllFilters}>Clear all filters</DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>}
            <div className="w-full max-w-[1200px] px-4 flex flex-col items-center py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-items-center">
                    {filteredAndSortedEvents.slice(0, visibleCount).map((event, idx) => (
                        <EventCard key={idx} event={event} onClick={() => handleCardClick(event)}/>
                    ))}
                </div>
                {filteredAndSortedEvents.length > maxVisibleCount && (
                    <button
                        onClick={toggleMoreLess}
                        className="mt-10 bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
                    >
                        {visibleCount === maxVisibleCount ? "View All" : "View Less"}
                    </button>
                )}
                {filteredAndSortedEvents.length === 0 && (
                    <div className="text-white/70 text-center py-10">No events match your current filters.</div>
                )}
            </div>
            <br/><br/><br/>
            <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    )
}
