import React from "react";
import {Link} from "react-router-dom";

export function Logo() {
    return (
        <h1 className="h6 header-logo">
            <Link to="/">
                YOUR COMPANY NAME
            </Link>
        </h1>
    )
}