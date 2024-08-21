import { BookText, BriefcaseBusiness, Mail, UserRound } from "lucide-svelte"

let sidebar = [
    {
        name: 'About me',
        url: '/about',
        icon: UserRound
    },
    {
        name: 'Contact',
        url: '/contact',
        icon: Mail
    },
    {
        name: 'Portfolio',
        url: '/portfolio',
        icon: BriefcaseBusiness
    },
    {
        name: 'Resume',
        url: '/resume',
        icon: BookText
    }
]

export default sidebar