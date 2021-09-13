import React from "react";
import {APP_NAV} from "../../../utils/constants/appNav/appNav";
import {Link} from "react-router-dom";


export function Nav() {
    const renderMenu = APP_NAV.map((item, index) => (
        <li className="menu__item" key={index}>
            <Link className="menu__item-link" to={item.route}>{item.label}</Link>
        </li>
    ))

    return (
        <ul className="menu">
            {renderMenu}
        </ul>
    )
}