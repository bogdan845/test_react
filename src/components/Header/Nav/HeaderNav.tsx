import React, {SetStateAction, useState} from "react";
import {APP_NAV} from "../../../utils/constants/appNav/headerNav/headerNav";
import {Link} from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";


export function HeaderNav() {

    const [sideBar, setSideBar] = useState(false);
    const sidebarHandler = () => {
        setSideBar(!sideBar);
        !sideBar
            ? document.body.classList.add("locked")
            : document.body.classList.remove("locked")
    }

    const renderMenu = APP_NAV.map((item, index) => (
        <li className="menu__item" key={index}>
            <Link className="menu__item-link" to={item.route}>{item.label}</Link>
        </li>
    ))

    return (
        <>
            <span onClick={sidebarHandler} className="sidebarBtn">
                {!sideBar ? <BiMenuAltRight/> : <IoMdClose/>}
            </span>
            <div className="menu-wrapper">
                <ul className={`menu ${sideBar ? 'active' : ''}`}>
                    {renderMenu}
                </ul>
            </div>
        </>
    )
}