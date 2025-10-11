import {SheetRow} from "@/app/dev/events/page";


export default function parseJSON(jsonData: any): SheetRow[] {
    if (!jsonData?.table?.rows) return [];
    return jsonData.table.rows.map((row: any) => {
        const c = row.c;
        return {
            timestamp: c[0]?.f || c[0]?.v || "",
            title: c[1]?.v || "",
            eventDate: c[2]?.f || c[2]?.v || "",
            eventEndDate: c[3]?.f || c[3]?.v || "",
            description: c[4]?.v || "",
            location: c[5]?.v || "",
            url: c[6]?.v || "",
            contactName1: c[7]?.v || "",
            contactNumber1: String(c[8]?.v || ""),
            contactName2: c[9]?.v || "",
            contactNumber2: String(c[10]?.v || ""),
        };
    });
}