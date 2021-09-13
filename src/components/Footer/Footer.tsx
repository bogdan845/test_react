import React from "react";
import {FooterNav} from "./Nav/FooterNav";
import {BottomFooter} from "./Copyright/BottomFooter";



export function Footer() {
    return (
        <footer>
            <div className="footer__top">
                <FooterNav/>
            </div>

            <div className="footer__bottom">
                <BottomFooter/>
            </div>
        </footer>
    )
}
