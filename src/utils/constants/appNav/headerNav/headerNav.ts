import {Home} from "../../../../pages/Home/Home";
import {About} from "../../../../pages/About/About";
import {OurServices} from "../../../../pages/OurServices/OurServices";
import {Portfolio} from "../../../../pages/Portfolio/Portfolio";
import {Contacts} from "../../../../pages/Contacts/Contacts";
import {Testimonials} from "../../../../pages/Testimonials/Testimonials";

interface IHeaderNav {
    label: string;
    route: string;
    component: () => JSX.Element;
}


export const APP_NAV : IHeaderNav[] = [
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
        component: OurServices,
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