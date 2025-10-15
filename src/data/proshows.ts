export interface IProshows {
    img: string;
    pageLink?: string;
    href?: string;
    placeholder: boolean;
    highlight?: boolean;
}

const PROSHOWS: IProshows[] = [
    {
        img: "/posters/proshows/mqube.webp",
        pageLink: "/tickets",
        placeholder: true,
    },
    {
        img: "/posters/proshows/jobkurian.webp",
        placeholder: true,
        pageLink: "/tickets"
        // href: "https://www.yepdesk.com/embed/buy-tickets/68e66bda46e0fb000166b829/private/7klucegivq"
    },
    {
        img: "/posters/proshows/laqshay.webp",
        placeholder: true,
        highlight: true,
        pageLink: "/tickets"
        // href: "https://www.yepdesk.com/embed/buy-tickets/68e66bda46e0fb000166b829/private/7klucegivq"
    },
    // {
    //     img: "/posters/proshows/day-pass.webp",
    //     placeholder: true,
    //     href: "https://www.yepdesk.com/embed/buy-tickets/68e66bda46e0fb000166b829/private/7klucegivq"
    // },
    {
        img: "/posters/events/job-fair.webp",
        placeholder: true,
        pageLink: "/jobfair"
    },

]


export default PROSHOWS;