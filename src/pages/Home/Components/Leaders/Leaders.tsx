import React from "react";
import {Board} from "./Board/Board";

export function Leaders() {
    return (
        <section className="leaders">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h2 className="leaders__title">OUR TEAM LEADERS</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        </p>
                    </div>
                </div>
                <Board/>
            </div>

        </section>
    )
}
