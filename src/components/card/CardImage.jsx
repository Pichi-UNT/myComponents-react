import React from "react";
import "./Card.css"

export function CardImage({src}) {
    return (
        <div className={"card-img"}>
            <div className={"photo"} style={{backgroundImage: `url("${src}")`}}/>
        </div>
    );

}