import React from "react";
import {TopSection} from "../../components/TopSection/TopSection";
import {Leaders} from "./Components/Leaders/Leaders";
import {Counters} from "./Components/Counters/Counters";
import {Contacts} from "../Contacts/Contacts";
import {AboutUs} from "./Components/AboutUs/AboutUs";
import {ContactsUs} from "./Components/ContactUs/ContactUs";
import {Placeholder} from "./Components/Placeholder/Placeholder";

export function Home() {
    return (
        <>
            <TopSection/>
            <Leaders/>
            <Counters/>
            <Placeholder/>
            <ContactsUs/>
            <AboutUs/>
        </>
    )
}