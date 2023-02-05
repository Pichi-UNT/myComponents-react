import React from "react";
import "./Card.css"

export function CardText({text=""}) {

    return (
        <p className={`card-text`}>{text}</p>
    );
}
