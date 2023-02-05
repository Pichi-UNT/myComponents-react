import React from "react";
import "./Card.css"

export function CardContent({children}) {
    return (
        <div className={"card-content"}>
            {children}
        </div>
    );
}