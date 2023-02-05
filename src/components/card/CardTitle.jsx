import React from "react";
import  "./Card.css";

export function CardTitle({
                              title = "Title", header = "",
                              colorFontHeader = "#565669",
                              colorFontTitle = "#0d0925"
                          }) {
    return (
        <>
            <span className={`card-header`} style={{color:`${colorFontHeader}`}}>{header}</span>
            <h2 className={`card-title`} style={{color:`${colorFontTitle}`}}>{title}</h2>
        </>
    );

}