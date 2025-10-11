import {convertToIST} from "@/app/dev/events/utils";

interface SheetRow {
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

export default function parseCSV(csvData: string): SheetRow[] {
    // Split into lines (handle both \r\n and \n)
    const lines = csvData.trim().split(/\r?\n/)

    // Extract header row and data rows
    const headers = lines[0].split(",").map(h => h.trim())
    const dataLines = lines.slice(1)

    const rows: SheetRow[] = []

    for (let i = 0; i < dataLines.length; i++) {
        const line = dataLines[i].trim()

        // Skip empty lines
        if (!line) continue

        // Handle quoted fields (like multi-line descriptions)
        // Join lines until number of quotes is even
        let combined = line
        while ((combined.match(/"/g) || []).length % 2 !== 0 && i + 1 < dataLines.length) {
            combined += "\n" + dataLines[++i]
        }

        // Match CSV fields (handles commas inside quotes)
        const regex = /("([^"]*)"|[^,]+)/g
        const values = [...combined.matchAll(regex)].map(match =>
            match[2] ? match[2].trim() : match[0].trim()
        )

        // Map header → value
        const row: any = {}

        headers.forEach((h, idx) => {
            row[h] = values[idx] || ""
        })

        // console.log("Parsed row:", row)

        // Map to SheetRow structure

        rows.push({
            timestamp: convertToIST(row["Timestamp"]) || "",
            title: row["Title"] || "",
            eventDate: convertToIST(row["Event date"]) || "",
            eventEndDate: convertToIST(row["Event End Date"]) || "",
            description: row["Description"] || "",
            location: row["Location"] || "",
            url: row["URL (Registration link)"] || "",
            contactName1: row["Contact Name 1"] || "",
            contactNumber1: row["Contact Phone Number 1"] || "",
            contactName2: row["Contact Name 2"] || "",
            contactNumber2: row["Contact Phone Number 2"] || ""
        })
    }

    return rows
}