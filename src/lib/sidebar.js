import { BookText, BriefcaseBusiness, Mail, UserRound } from "lucide-svelte"
import { base } from '$app/paths';

let sidebar = [
    {
        name: 'About me',
        url: base + '/about',
        icon: UserRound
    },
    {
        name: 'Contact',
        url: base + '/contact',
        icon: Mail
    },
    {
        name: 'Portfolio',
        url: base + '/portfolio',
        icon: BriefcaseBusiness
    },
    {
        name: 'Resume',
        url: base + '/resume',
        icon: BookText
    }
]

export default sidebar