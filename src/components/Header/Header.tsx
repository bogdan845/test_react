import React from "react";
import {HeaderNav} from "./Nav/HeaderNav";
import {Logo} from "./Logo/Logo";




export function Header() {
    return (
        <header className="header">
            <div className="container-fluid px-0">
                <div className="row mx-0">
                    <div className="col-12">
                        <Logo/>
                    </div>
                    <div className="col-12">
                        <HeaderNav/>
                    </div>
                </div>
            </div>
        </header>
    )
}