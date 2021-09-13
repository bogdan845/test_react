import React from "react";
import {SingleBoardItem} from "./SingleBoardItem";
import {BOARD} from "../../../../utils/constants/board/board";

export function Board() {

    const renderBoard = BOARD.map((item, index) => (
        <SingleBoardItem
            key={index}
            img={item.photo}
            fullName={item.fullName}
            description={item.description}
        />
    ))

    return (
        <div className="container">
            <div className="row">
                {renderBoard}
            </div>
        </div>
    )
}