import {Home} from "../../../pages/Home/Home";
import {About} from "../../../pages/About/About";
import {Services} from "../../../pages/Services/Services";
import {Portfolio} from "../../../pages/Portfolio/Portfolio";
import {Contacts} from "../../../pages/Contacts/Contacts";
import {Testimonials} from "../../../pages/Testimonials/Testimonials";

interface IAppNav {
    label: string;
    route: string;
    component: () => JSX.Element;
}



export const APP_NAV : IAppNav[] = [
    {
        label: "Home",
        route: "/",
        component: Home,
    },
    {
        label: "About",
        route: "/about",
        component: About,
    },
    {
        label: "Services",
        route: "/services",
        component: Services,
    },
    {
        label: "Testimonials",
        route: "/testimonials",
        component: Testimonials,
    },
    {
        label: "Portfolio",
        route: "/portfolio",
        component: Portfolio,
    },
    {
        label: "Contacts",
        route: "/contacts",
        component: Contacts,
    }

];