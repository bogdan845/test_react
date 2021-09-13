import React from "react";

interface IProps {
    img: string;
    fullName: string;
    description: string;
}

export function SingleBoardItem({img, fullName, description}: IProps) {
    return (
        <div className="col-12 col-md-4">
            <img src={img} alt={""}/>
            <h5 className="board__name">{fullName}</h5>
            <p>{description}</p>
        </div>
    )
}