import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export function convertToIST(timestamp: string) {
    // Parse the date (assuming it's local or UTC — choose accordingly)
    const date = new Date(timestamp);

    // Convert to IST (Asia/Kolkata)
    const ist = new Date(date.getTime() + (5.5 * 60 * 60 * 1000));

    // Format as ISO string with +05:30 offset
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${ist.getFullYear()}-${pad(ist.getMonth() + 1)}-${pad(ist.getDate())}T${pad(ist.getHours())}:${pad(ist.getMinutes())}:${pad(ist.getSeconds())}+05:30`;
}


// export interface IEventData {
//     date: string;
//     title: string;
//     description: string;
//     url: string;
//     contact: { name: string; number: string }[];
//     location: string;
//     endDate?: string;
//     createdDate?: string;
// }

interface RawEvent {
    timestamp: string;
    title: string;
    eventDate: string;
    eventEndDate: string;
    description: string;
    location: string;
    url: string;
    contactName1: string;
    contactNumber1: string;
    contactName2?: string;
    contactNumber2?: string;
}

export interface IEventData {
    /** The image url*/
    image: string;
    /** Date: Use UTC*/
    date: string;
    title: string;
    description: string;
    instagram?: string;
    url?: string;
    contact?: { name: string; number: string }[];
    location: 'Online' | 'RIT' | string;
    /** UTC Date*/
    endDate?: string;
    badge?: 'new' | 'workshop' | 'competition' | 'talk' | 'exhibition' | 'performance' | string;
    club?: 'Tinkerhub' | 'IEEE' | 'ISTE' | 'IEDC' | string;
    createdDate?: string;
}

export const parseEvent = (data: RawEvent): IEventData => {
    const contacts = [];

    console.log("Parsing event:", data);

    if (data.contactName1) {
        contacts.push({ name: data.contactName1, number: data.contactNumber1! });
    }

    if (data.contactName2) {
        contacts.push({ name: data.contactName2, number: data.contactNumber2! });
    }

    return {
        image: "",
        date: data.eventDate,
        title: data.title,
        description: data.description,
        url: data.url,
        contact: contacts,
        location: data.location,
        endDate: data.eventEndDate,
        createdDate: data.timestamp,
    };
};
