import React from "react"
import {ICounters} from "../../../../utils/interface/counters/counters";

export function SingleCounter({number, label}: ICounters) {
    return (
        <div className="col-12 col-md-3">
            <div className="counters__item">
                <h2 className="counters__item-num">{number}</h2>
                <p>{label}</p>
            </div>
        </div>
    )
}