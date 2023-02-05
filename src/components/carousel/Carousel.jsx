import React, {useState} from "react";
import {CardProject} from "../CardProject.jsx";

export function CarouselItem({children}) {
    return (
        <div className="carousel-item">
            {children}
        </div>

    );
}


export default function Carousel({children}) {
    const [index, setIndex] = useState(0)
    let nextItem = (delta) => {

        if (index + delta > React.Children.count(children) - 1) { //
            setIndex(0);
        } else if (index + delta < 0) {
            setIndex(React.Children.count(children) - 1); //
        } else {
            setIndex(index + delta)
        }
    }


    return (
        <>
            <div className="carousel">
                <div className="carousel-item-container" style={{transform: `translateX(-${index * 100}%)`}}>
                    {children}
                </div>
                <div className={"carousel-btn left-btn"}
                     onClick={() => {
                         nextItem(-1)
                     }}/>

                <div className={"carousel-btn right-btn"}
                     onClick={() => {
                         nextItem(1)
                     }}/>
            </div>


        </>
    );
}