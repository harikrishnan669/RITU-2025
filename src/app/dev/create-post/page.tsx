"use client"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Calendar} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {CalendarIcon, Copy, Plus, Trash2} from "lucide-react"
import {format} from "date-fns"
import {cn} from "@/lib/utils"
import {IEventData} from "@/types/event"


export default function EventDataBuilder() {
    const [eventData, setEventData] = useState<IEventData>({
        image: "",
        date: "",
        title: "",
        description: "",
        location: "Online",
        createdDate: new Date().toISOString(),
    })

    const [contacts, setContacts] = useState<{ name: string; number: string }[]>([])
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [createdDate, setCreatedDate] = useState<Date>()
    const [startTime, setStartTime] = useState<string>("")
    const [endTime, setEndTime] = useState<string>("")
    const [createdTime, setCreatedTime] = useState<string>("")

    const updateEventData = (field: keyof IEventData, value: any) => {
        setEventData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const formatDateTime = (date: Date | undefined, time: string): string => {
        if (!date) return ""

        const timeValue = time || "00:00"
        const [hours, minutes] = timeValue.split(":").map(Number)

        const dateTime = new Date(date)
        dateTime.setHours(hours, minutes, 0, 0)

        // Build YYYY-MM-DDTHH:mm:ss+05:30 manually
        const pad = (n: number) => n.toString().padStart(2, "0")

        const year = dateTime.getFullYear()
        const month = pad(dateTime.getMonth() + 1)
        const day = pad(dateTime.getDate())
        const hour = pad(dateTime.getHours())
        const minute = pad(dateTime.getMinutes())
        const second = pad(dateTime.getSeconds())

        return `${year}-${month}-${day}T${hour}:${minute}:${second}+05:30`
    }


    // const parseUTCToIST = (utcString: string): { date: Date; time: string } => {
    //     if (!utcString) return { date: new Date(), time: "" }
    //
    //     const utcDate = new Date(utcString)
    //     // Convert UTC to IST (UTC+5:30)
    //     const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000)
    //
    //     const hours = istDate.getHours().toString().padStart(2, "0")
    //     const minutes = istDate.getMinutes().toString().padStart(2, "0")
    //
    //     return {
    //         date: new Date(istDate.getFullYear(), istDate.getMonth(), istDate.getDate()),
    //         time: `${hours}:${minutes}`,
    //     }
    // }

    const handleStartDateChange = (date: Date | undefined) => {
        setStartDate(date)
        const isoString = formatDateTime(date, startTime)
        updateEventData("date", isoString)
    }

    const handleStartTimeChange = (time: string) => {
        setStartTime(time)
        const isoString = formatDateTime(startDate, time)
        updateEventData("date", isoString)
    }

    const handleEndDateChange = (date: Date | undefined) => {
        setEndDate(date)
        const isoString = formatDateTime(date, endTime)
        updateEventData("endDate", isoString || undefined)
    }

    const handleEndTimeChange = (time: string) => {
        setEndTime(time)
        const isoString = formatDateTime(endDate, time)
        updateEventData("endDate", isoString || undefined)
    }

    const handleCreatedDateChange = (date: Date | undefined) => {
        setCreatedDate(date)
        const isoString = formatDateTime(date, createdTime)
        updateEventData("createdDate", isoString || undefined)
    }

    const handleCreatedTimeChange = (time: string) => {
        setCreatedTime(time)
        const isoString = formatDateTime(createdDate, time)
        updateEventData("createdDate", isoString || undefined)
    }

    const addContact = () => {
        setContacts((prev) => [...prev, {name: "", number: ""}])
    }

    const updateContact = (index: number, field: "name" | "number", value: string) => {
        const updatedContacts = contacts.map((contact, i) => (i === index ? {...contact, [field]: value} : contact))
        setContacts(updatedContacts)
        updateEventData("contact", updatedContacts.length > 0 ? updatedContacts : undefined)
    }

    const removeContact = (index: number) => {
        const updatedContacts = contacts.filter((_, i) => i !== index)
        setContacts(updatedContacts)
        updateEventData("contact", updatedContacts.length > 0 ? updatedContacts : undefined)
    }

    const generateObject = (): IEventData => {
        const result: IEventData = {
            image: eventData.image,
            date: eventData.date,
            title: eventData.title,
            description: eventData.description,
            location: eventData.location,
        }

        if (eventData.instagram) result.instagram = eventData.instagram
        if (eventData.url) result.url = eventData.url
        if (contacts.length > 0) result.contact = contacts
        if (eventData.endDate) result.endDate = eventData.endDate
        if (eventData.badge) result.badge = eventData.badge
        if (eventData.club) result.club = eventData.club
        if (eventData.createdDate) result.createdDate = eventData.createdDate

        return result
    }

    const copyToClipboard = async () => {
        const objectString = JSON.stringify(generateObject(), null, 2)
        try {
            await navigator.clipboard.writeText(objectString)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen bg-background p-4">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">Event Data Builder</h1>
                    <p className="text-muted-foreground">Build your IEventData object with this simple form</p>
                    <p className="text-sm text-muted-foreground">Times are displayed in IST but stored as UTC</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Form Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Event Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Required Fields */}
                            <div className="space-y-2">
                                <Label htmlFor="image">Image URL *</Label>
                                <Input
                                    id="image"
                                    placeholder="https://example.com/image.jpg"
                                    value={eventData.image}
                                    onChange={(e) => updateEventData("image", e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="title">Title *</Label>
                                <Input
                                    id="title"
                                    placeholder="Event title"
                                    value={eventData.title}
                                    onChange={(e) => updateEventData("title", e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description *</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Event description"
                                    value={eventData.description}
                                    onChange={(e) => updateEventData("description", e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Start Date & Time (IST) *</Label>
                                <div className="flex gap-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "flex-1 justify-start text-left font-normal",
                                                    !startDate && "text-muted-foreground",
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4"/>
                                                {startDate ? format(startDate, "PPP") : "Pick a date"}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar mode="single" selected={startDate}
                                                      onSelect={handleStartDateChange} initialFocus/>
                                        </PopoverContent>
                                    </Popover>
                                    <Input
                                        type="time"
                                        value={startTime}
                                        onChange={(e) => handleStartTimeChange(e.target.value)}
                                        className="w-32"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="location">Location *</Label>
                                <Select value={eventData.location}
                                        onValueChange={(value) => updateEventData("location", value)}>
                                    <SelectTrigger>
                                        <SelectValue/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Online">Online</SelectItem>
                                        <SelectItem value="RIT">RIT</SelectItem>
                                        <SelectItem value="custom">Custom Location</SelectItem>
                                    </SelectContent>
                                </Select>
                                {eventData.location === "custom" && (
                                    <Input
                                        placeholder="Enter custom location"
                                        onChange={(e) => updateEventData("location", e.target.value)}
                                    />
                                )}
                            </div>

                            {/* Optional Fields */}
                            <div className="pt-4 border-t">
                                <h3 className="font-semibold mb-4">Optional Fields</h3>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Created Date & Time (IST)</Label>
                                        <div className="flex gap-2">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "flex-1 justify-start text-left font-normal",
                                                            !createdDate && "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4"/>
                                                        {createdDate ? format(createdDate, "PPP") : "Pick a date"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={createdDate}
                                                        onSelect={handleCreatedDateChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <Input
                                                type="time"
                                                value={createdTime}
                                                onChange={(e) => handleCreatedTimeChange(e.target.value)}
                                                className="w-32"
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground">Defaults to current date/time,
                                            stored as UTC</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>End Date & Time (IST)</Label>
                                        <div className="flex gap-2">
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "flex-1 justify-start text-left font-normal",
                                                            !endDate && "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4"/>
                                                        {endDate ? format(endDate, "PPP") : "Pick a date"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar mode="single" selected={endDate}
                                                              onSelect={handleEndDateChange} initialFocus/>
                                                </PopoverContent>
                                            </Popover>
                                            <Input
                                                type="time"
                                                value={endTime}
                                                onChange={(e) => handleEndTimeChange(e.target.value)}
                                                className="w-32"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="instagram">Instagram</Label>
                                        <Input
                                            id="instagram"
                                            placeholder="@username or URL"
                                            value={eventData.instagram || ""}
                                            onChange={(e) => updateEventData("instagram", e.target.value || undefined)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="url">URL</Label>
                                        <Input
                                            id="url"
                                            placeholder="https://example.com"
                                            value={eventData.url || ""}
                                            onChange={(e) => updateEventData("url", e.target.value || undefined)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Badge</Label>
                                        <Select
                                            value={eventData.badge || "none"}
                                            onValueChange={(value) => updateEventData("badge", value || undefined)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select badge"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">None</SelectItem>
                                                <SelectItem value="new">New</SelectItem>
                                                <SelectItem value="workshop">Workshop</SelectItem>
                                                <SelectItem value="competition">Competition</SelectItem>
                                                <SelectItem value="talk">Talk</SelectItem>
                                                <SelectItem value="exhibition">Exhibition</SelectItem>
                                                <SelectItem value="performance">Performance</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Club</Label>
                                        <Select
                                            value={eventData.club || "none"}
                                            onValueChange={(value) => updateEventData("club", value || undefined)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select club"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">None</SelectItem>
                                                <SelectItem value="Tinkerhub">Tinkerhub</SelectItem>
                                                <SelectItem value="IEEE">IEEE</SelectItem>
                                                <SelectItem value="ISTE">ISTE</SelectItem>
                                                <SelectItem value="IEDC">IEDC</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Contacts Section */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label>Contacts</Label>
                                            <Button type="button" variant="outline" size="sm" onClick={addContact}>
                                                <Plus className="h-4 w-4 mr-1"/>
                                                Add Contact
                                            </Button>
                                        </div>
                                        {contacts.map((contact, index) => (
                                            <div key={index} className="flex gap-2 items-end">
                                                <div className="flex-1">
                                                    <Input
                                                        placeholder="Name"
                                                        value={contact.name}
                                                        onChange={(e) => updateContact(index, "name", e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <Input
                                                        placeholder="Phone number"
                                                        value={contact.number}
                                                        onChange={(e) => updateContact(index, "number", e.target.value)}
                                                    />
                                                </div>
                                                <Button type="button" variant="outline" size="sm"
                                                        onClick={() => removeContact(index)}>
                                                    <Trash2 className="h-4 w-4"/>
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Preview Section */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Generated Object</CardTitle>
                                <Button onClick={copyToClipboard} size="sm">
                                    <Copy className="h-4 w-4 mr-2"/>
                                    Copy
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-auto max-h-96 whitespace-pre-wrap">
                {JSON.stringify(generateObject(), null, 2)}
              </pre>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
