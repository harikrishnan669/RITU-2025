export interface IProshows {
    img: string;
    pageLink?: string;
    href?: string;
    placeholder: boolean;
}

const PROSHOWS: IProshows[] = [
    {
        img: "/placeholder/coming-soon-proshow.webp",
        placeholder: true
    }, {
        img: "/posters/proshows/jobkurian.webp",
        placeholder: true,
    }, {
        img: "/posters/events/job-fair.webp",
        placeholder: true,
        pageLink: "/jobfair"
    }
]

export default PROSHOWS;