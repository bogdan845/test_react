import React from "react";

export enum TitleColor {
    ORANGE = "orange",
    DEFAULT = "default"
}

export enum ContentColor {
    GRAY = "gray",
    WHITE = "white",
    DEFAULT = "default"
}


interface IProps {
    title: string;
    titleColor?: TitleColor.ORANGE | TitleColor.DEFAULT;
    content: string;
    contentColor?: ContentColor.GRAY | ContentColor.DEFAULT | ContentColor.WHITE;
}

export function TitleContent(
    {
        titleColor = TitleColor.DEFAULT,
        title,
        content,
        contentColor = ContentColor.DEFAULT
    }: IProps) {
    return (
        <div className={`r-content ${contentColor}`}>
            <h2 className={`r-content__title ${titleColor}`}>{title}</h2>
            <p>{content}</p>
        </div>
    )
}