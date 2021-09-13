import React from "react"

export function Copyright() {
    const date = new Date();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h6>{`Copyright © ${date.getFullYear()} . Your companyname  All rights reserved`}</h6>
                </div>
                <div className="col-12 col-md-6"></div>
            </div>
        </div>
    )
}