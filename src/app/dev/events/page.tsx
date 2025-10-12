"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, RefreshCw } from "lucide-react"
import { parseEvent } from "./utils"
import parseJSON from "./parse-json"

export interface SheetRow {
    timestamp: string
    title: string
    eventDate: string
    eventEndDate: string
    description: string
    location: string
    url: string
    contactName1: string
    contactNumber1: string
    contactName2: string
    contactNumber2: string
}

const getEventId = (event: SheetRow): string => {
    return `${event.timestamp}-${event.title}-${event.eventDate}`
}

export default function EventsPage() {
    const [events, setEvents] = useState<SheetRow[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedEvents, setSelectedEvents] = useState<Set<number>>(new Set())
    const [completedEvents, setCompletedEvents] = useState<Set<string>>(new Set())
    const [showAll, setShowAll] = useState(false)

    const SHEET_ID = "1fq6xNuMKlVVRQeRTMIsxK1LywEFSnIP_uaFjrgcetAA"
    // const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`

    const JSON_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`

    useEffect(() => {
        const stored = localStorage.getItem("completedEvents")
        if (stored) {
            try {
                const parsed = JSON.parse(stored)
                setCompletedEvents(new Set(parsed))
            } catch (error) {
                console.error("Error loading completed events:", error)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("completedEvents", JSON.stringify(Array.from(completedEvents)))
    }, [completedEvents])

    const fetchData = async () => {
        setLoading(true)
        try {
            const response_json = await fetch(JSON_URL)
            const text_json = await response_json.text()
            const main_json = text_json.substring(47).slice(0, -2)
            const parsed_json = JSON.parse(main_json)

            // console.log("Fetched JSON data:", main_json);
            // console.log("Raw JSON response:", );
            //
            // const response = await fetch(CSV_URL);
            // const csvText = await response.text();

            // const rows = parseCSV(csvText);
            const rows_json = parseJSON(parsed_json)
            // const rows_json = JSON.parse(main_json).table.rows.map((row: any) => {

            const sortedRows = rows_json.sort((a, b) => {
                const dateA = new Date(a.timestamp).getTime()
                const dateB = new Date(b.timestamp).getTime()
                return dateB - dateA
            })

            setEvents(sortedRows)
            setSelectedEvents(new Set())
        } catch (error) {
            console.error("Error fetching or parsing data:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const toggleEventSelection = (index: number) => {
        const newSelected = new Set(selectedEvents)
        if (newSelected.has(index)) {
            newSelected.delete(index)
        } else {
            newSelected.add(index)
        }
        setSelectedEvents(newSelected)
    }

    const toggleAllEvents = () => {
        if (selectedEvents.size === events.length) {
            setSelectedEvents(new Set())
        } else {
            setSelectedEvents(new Set(events.map((_, index) => index)))
        }
    }

    const toggleEventCompleted = (event: SheetRow) => {
        const eventId = getEventId(event)
        const newCompleted = new Set(completedEvents)
        if (newCompleted.has(eventId)) {
            newCompleted.delete(eventId)
        } else {
            newCompleted.add(eventId)
        }
        setCompletedEvents(newCompleted)
    }

    const generateJSON = () => {
        const eventsToExport = Array.from(selectedEvents)
            .sort((a, b) => a - b)
            .map((index) => parseEvent(events[index]))

        const jsonString = JSON.stringify(eventsToExport, null, 2)

        navigator.clipboard
            .writeText(jsonString)
            .then(() => {
                alert(`${eventsToExport.length} event(s) JSON copied to clipboard!`)
            })
            .catch(() => {
                alert("Failed to copy event JSON")
            })
    }

    const visibleEvents = showAll ? events : events.filter((event) => !completedEvents.has(getEventId(event)))

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="mx-auto max-w-7xl">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl">Event Data Viewer</CardTitle>
                                <CardDescription>
                                    Data from Google Sheet - Sorted by newest first
                                    {selectedEvents.size > 0 && ` • ${selectedEvents.size} selected`}
                                    {completedEvents.size > 0 && ` • ${completedEvents.size} completed`}
                                </CardDescription>
                            </div>
                            <div className="flex gap-2">
                                <Button variant={showAll ? "default" : "outline"} onClick={() => setShowAll(!showAll)}>
                                    {showAll ? "Hide Completed" : "View All"}
                                </Button>
                                <Button variant="outline" size="icon" onClick={fetchData} disabled={loading}>
                                    <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                                </Button>
                                <Button onClick={generateJSON} disabled={loading || selectedEvents.size === 0}>
                                    <Copy className="mr-2 h-4 w-4" />
                                    Copy JSON ({selectedEvents.size})
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="flex items-center justify-center py-8">
                                <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
                            </div>
                        ) : events.length === 0 ? (
                            <div className="py-8 text-center text-muted-foreground">No events found</div>
                        ) : (
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-12">
                                                <Checkbox
                                                    checked={selectedEvents.size === events.length && events.length > 0}
                                                    onCheckedChange={toggleAllEvents}
                                                    aria-label="Select all events"
                                                />
                                            </TableHead>
                                            <TableHead className="w-12">Done</TableHead>
                                            <TableHead>Created</TableHead>
                                            <TableHead>Title</TableHead>
                                            <TableHead>Event Date</TableHead>
                                            <TableHead>End Date</TableHead>
                                            <TableHead>Location</TableHead>
                                            <TableHead>Description</TableHead>
                                            <TableHead>URL</TableHead>
                                            <TableHead>Contact 1</TableHead>
                                            <TableHead>Contact 2</TableHead>
                                            <TableHead>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {visibleEvents.map((event) => {
                                            // Get the original index from the full events array
                                            const index = events.indexOf(event)
                                            const isCompleted = completedEvents.has(getEventId(event))

                                            return (
                                                <TableRow key={index} className={isCompleted ? "opacity-50" : ""}>
                                                    <TableCell>
                                                        <Checkbox
                                                            checked={selectedEvents.has(index)}
                                                            onCheckedChange={() => toggleEventSelection(index)}
                                                            aria-label={`Select ${event.title}`}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Checkbox
                                                            checked={isCompleted}
                                                            onCheckedChange={() => toggleEventCompleted(event)}
                                                            aria-label={`Mark ${event.title} as completed`}
                                                        />
                                                    </TableCell>
                                                    <TableCell className="whitespace-nowrap text-xs">
                                                        {new Date(event.timestamp).toLocaleString()}
                                                    </TableCell>
                                                    <TableCell className="font-medium">{event.title}</TableCell>
                                                    <TableCell className="whitespace-nowrap">{event.eventDate}</TableCell>
                                                    <TableCell className="whitespace-nowrap">{event.eventEndDate || "-"}</TableCell>
                                                    <TableCell className="max-w-[200px] truncate">{event.location}</TableCell>
                                                    <TableCell className="truncate max-w-[300px]">{event.description}</TableCell>
                                                    <TableCell className="max-w-[200px] truncate">
                                                        {event.url ? (
                                                            <a
                                                                href={event.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-primary hover:underline"
                                                            >
                                                                Link
                                                            </a>
                                                        ) : (
                                                            "-"
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="max-w-[200px] truncate">
                                                        {event.contactName1 && (
                                                            <div>
                                                                <div>{event.contactName1}</div>
                                                                <div className="text-muted-foreground">{event.contactNumber1}</div>
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="max-w-[200px] truncate">
                                                        {event.contactName2 && (
                                                            <div>
                                                                <div>{event.contactName2}</div>
                                                                <div className="text-muted-foreground">{event.contactNumber2}</div>
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button
                                                            variant="link"
                                                            size="sm"
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                navigator.clipboard
                                                                    .writeText(JSON.stringify(parseEvent(event), null, 2))
                                                                    .then(() => {
                                                                        alert("Event JSON copied to clipboard!")
                                                                    })
                                                                    .catch(() => {
                                                                        alert("Failed to copy event JSON")
                                                                    })
                                                            }}
                                                        >
                                                            <Copy />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
