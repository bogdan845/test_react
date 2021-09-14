import React from "react";
import {FOOTER_NAV} from "../../../utils/constants/appNav/fooerNav/footerNav";
import {Link} from "react-router-dom";
import {FaPhoneAlt} from "react-icons/fa"
import {ImLocation} from "react-icons/im";


export function FooterNav() {
    const renderNav = FOOTER_NAV.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md">
            <h6 className="footer__menu-label">{item.label}</h6>
            {item.menu && item.menu.length
                ? <ul className="footer__menu-nav">
                    {item.menu.map((sub, subIndex) => (
                        <li key={subIndex}
                            className="footer__menu-nav-item">
                            <Link className="footer__menu-nav-item-link" to={sub.route}>{sub.label}</Link>
                        </li>
                    ))}
                </ul>
                : ""
            }
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                {renderNav}
                <div className="col-12 col-md">
                    <div className="footer__contacts">
                        <div className="footer__phone-wrapper">
                            <span className="footer__location-icon"><FaPhoneAlt/></span>
                            <div className="footer__phone">
                                <a href="tel:3-6000-0000">3-6000-0000</a>
                                <a href="tel:6000-000-0000">6000-000-0000</a>
                            </div>
                        </div>
                        <div className="footer__location-wrapper">
                            <div className="footer__location">
                                <span className="footer__phone-icon"><ImLocation/></span>
                                <div className="footer__location-text">67700 Dagenham St England, GB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}