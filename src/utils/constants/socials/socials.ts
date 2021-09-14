import {FaGooglePlusG, FaTwitter, FaFacebookF, FaInstagram} from "react-icons/fa";
import {IconType} from "react-icons";

interface ISocials {
    url: string;
    icon: IconType
}

export const SOCIALS : ISocials[] = [
    {
        url: "/",
        icon: FaGooglePlusG
    },
    {
        url: "/",
        icon: FaTwitter
    },
    {
        url: "/",
        icon: FaFacebookF
    },
    {
        url: "/",
        icon: FaInstagram
    },
]