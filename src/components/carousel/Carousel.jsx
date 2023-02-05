import {useEffect, useState, useRef, Children} from "react";
import "./carousel.css"


export function CarouselItem({children}) {
    return (
        <div className="carousel-item">
            {children}
        </div>

    );
}


export default function Carousel({children}) {
    const carouselRef = useRef();
    const [index, setIndex] = useState(0)
    const [startX, setStartX] = useState(0);
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        setWidth(carouselRef.current.offsetWidth)
    }, []);


    let nextItem = (delta) => {

        if (index + delta > Children.count(children) - 1) { //
            setIndex(0);
        } else if (index + delta < 0) {
            setIndex(Children.count(children) - 1); //
        } else {
            setIndex(index + delta)
        }
    }

    let printStart = (e) => {
        setIsDragging(true)
        setStartX(e.touches[0].clientX);
    }

    let printEnd = (e) => {
        setIsDragging(false)
        const endX = e.changedTouches[0].clientX
        // console.log(endX-startX)
        if (endX - startX <  -(width / 3)) {
            nextItem(1)
        } else if (endX - startX  > (width / 3)) {
            nextItem(-1)
        }
        setOffset(0)

    }
    let printMove = (e) => {
        if (!isDragging) return;

        let moveOffset = (100*(e.changedTouches[0].clientX - startX))/width
        setOffset(moveOffset);
    }

    // style={{transform: `translateX(${translateValue - index * width}px)`}}
    return (
        <>
            <div className="carousel" onTouchStart={printStart} onTouchEnd={printEnd} onTouchMove={printMove} >
                <div className="carousel-item-container" ref={carouselRef}
                     style={{transform: `translateX(-${index * 100 - offset}%)`}}

                >
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