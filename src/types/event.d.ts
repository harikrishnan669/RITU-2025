

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