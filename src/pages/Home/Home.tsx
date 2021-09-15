import React from "react";
import {TopSection} from "../../components/TopSection/TopSection";
import {Leaders} from "./Components/Leaders/Leaders";
import {Counters} from "./Components/Counters/Counters";
import {AboutUs} from "./Components/AboutUs/AboutUs";
import {ContactsUs} from "./Components/ContactUs/ContactUs";
import {Placeholder} from "../../components/Reusable/Placeholder/Placeholder";
import {Gallery} from "./Components/Gallery/Gallery";

export function Home() {
    return (
        <>
            <TopSection/>
            <Leaders/>
            <Counters/>
            <Placeholder title={"Lorem title"}/>
            <ContactsUs/>
            <AboutUs/>
            <Gallery/>
        </>
    )
}