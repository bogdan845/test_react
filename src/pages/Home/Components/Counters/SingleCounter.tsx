import React from "react"
import {ICounters} from "../../../../utils/interface/counters/counters";
import CountUp from "react-countup";

export function SingleCounter({number, label}: ICounters) {
    return (
        <div className="col-12 col-md-3">
            <div className="counters__item">
                <CountUp className="counters__item-num" end={number} duration={3}/>
                <p>{label}</p>
            </div>
        </div>
    )
}