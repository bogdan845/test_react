import React from "react";
import {IAboutUs} from "./aboutUs";

export function AboutUsItem({img, label}: IAboutUs) {
    return (
        <div className="col-12 col-md-4">
            <div className="about-us__item">
                <div className="about-us__item-img-wrapper">
                    <img className="about-us__item-img" src={img} alt={""}/>
                </div>
                <h6 className="about-us__item-label">{label}</h6>
            </div>
        </div>
    )
}