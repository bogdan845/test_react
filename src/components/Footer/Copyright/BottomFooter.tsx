import React from "react"
import {SOCIALS} from "../../../utils/constants/socials/socials";

export function BottomFooter() {
    const date = new Date();
    const renderSocials = SOCIALS.map((item, index) => (
        <li key={index} className="footer-socials__item">
            <a href={item.url}>
                <item.icon/>
            </a>
        </li>
    ))
    return (
        <div className="container">
            <div className="row">
                <div className="order-2 order-md-1 col-12 col-md-6 align-self-center">
                    <h6 className="footer__copyright">{`Copyright © ${date.getFullYear()} . Your companyname  All rights reserved`}</h6>
                </div>

                <div className="order-1 order-md-2 col-12 col-md-6 align-self-center">
                    <ul className="footer-socials">
                        {renderSocials}
                    </ul>
                </div>
            </div>
        </div>
    )
}