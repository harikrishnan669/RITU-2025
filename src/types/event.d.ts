

export interface EventData {
    image: string;
    date: string;
    title: string;
    description: string;
    instagram?: string;
    url?: string;
    contact?: { name: string; number: string }[];
    location: 'Online' | 'RIT' | string;
    endDate?: string;
    badge?: 'new' | 'workshop' | 'competition' | 'talk' | 'exhibition' | 'performance' | 'other';
}