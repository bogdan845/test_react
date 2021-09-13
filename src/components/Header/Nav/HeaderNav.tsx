import React from "react";
import {APP_NAV} from "../../../utils/constants/appNav/headerNav/headerNav";
import {Link} from "react-router-dom";


export function HeaderNav() {
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