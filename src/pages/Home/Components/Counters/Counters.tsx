import React, {} from "react";
import {COUNTERS} from "../../../../utils/constants/counters/counters";
import {SingleCounter} from "./SingleCounter";


export function Counters() {

    const renderCounters = COUNTERS.map((item, index) => (
        <SingleCounter
            key={index}
            number={item.number}
            label={item.label}
        />
    ))

    return (
        <section className="counters">
            <div className="container">
                <div className="row">
                    {renderCounters}
                </div>
            </div>
        </section>
    )
}