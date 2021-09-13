import React from "react";
import {FOOTER_NAV} from "../../../utils/constants/appNav/fooerNav/footerNav";
import {Link} from "react-router-dom";

export function FooterNav() {
    const renderNav = FOOTER_NAV.map((item, index) => (
        <div key={index} className="col-12 col-md-2">
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
            </div>
        </div>
    )
}