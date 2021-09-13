import React from "react";
import {IBoard} from "../../../../../utils/interface/board/board";


export function SingleBoardItem({img, fullName, description}: IBoard) {
    return (
        <div className="col-12 col-md-4">
            <div className="board-item">
                <div className="board-item__img-wrapper">
                    {img ? <img className="board-item__img" src={img} alt={""}/> : ""}
                </div>
                <h5 className="board-item__name">{fullName}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}