import React, {useEffect, useState, useRef, Children, useLayoutEffect} from "react";
import "./carousel.css"
import {Button} from "../button/Button";


export function CarouselItem({children}) {
    return (
        <div className="carousel-item">
            {children}
        </div>

    );
}

function CarouselIndicators({numberOfButtons, updateIndex, activeIndex}) {
    const buttons = []
    for (let index = 1; index <= numberOfButtons; index++) {
        buttons.push(<li key={index}>
            <button onClick={() => {
                updateIndex(index);
            }} className={`${index === activeIndex ? "indicator-active" : ""}`}>
                {index + 1}
            </button>
        </li>);
    }

    return (
        <ul className={"carousel-indicators"}>
            {buttons}
        </ul>
    );
}

function CarouselButtons({showButtons, onClickRight, onClickLeft}) {
    return (
        <div className={showButtons ? "" : "deactivate"}>
            <div className={"carousel-btn left-btn"}
                 onClick={(e) => {
                     onClickLeft(e)
                 }}/>
            <div className={"carousel-btn right-btn"}
                 onClick={(e) => {
                     onClickRight(e)
                 }}/>
        </div>
    );
}

export default function Carousel({children, autoplay = false, timeout = 1000, showButtons = true}) {
    const quantityChildren = Children.count(children);
    const childrenArray = Children.toArray(children);
    const allItems = [childrenArray[quantityChildren - 1], ...childrenArray, childrenArray[0]];
    const quantityItems = quantityChildren + 2;

    const carouselRef = useRef();


    const [items, setItems] = useState(allItems)
    const [activeIndex, setActiveIndex] = useState(1);
    const [startX, setStartX] = useState(0);
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isPause,setIsPause]=useState(false);

    // useEffect to obtain width of a carousel Item even if the windows change size
    useEffect(() => {
        setWidth(carouselRef.current.offsetWidth);
        const handleResize = () => {
            setWidth(carouselRef.current.offsetWidth);
        };
        window.addEventListener("resize", handleResize);
        //retorno funcion para eliminar el listener al desmontar componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                if(!isDragging && !isPause){
                    nextItem(1);
                }
            }, timeout)
            return () => clearInterval(interval)
        }
    }, [activeIndex,isDragging,isPause])

    let nextItem = (delta) => {

        carouselRef.current.classList.add("container-animation");
        if (activeIndex + delta > quantityItems - 1) { //
            setActiveIndex(0);
        } else if (activeIndex + delta < 0) {
            setActiveIndex(quantityItems - 1); //
        } else {
            setActiveIndex(activeIndex + delta);
        }

    }

    let jump = () => {

        if (activeIndex === items.length - 1) {
            carouselRef.current.classList.remove("container-animation");
            setActiveIndex(1);

        } else if (activeIndex === 0) {
            carouselRef.current.classList.remove("container-animation");
            setActiveIndex(items.length - 2);
        }

    }

    let HandleTouchStart = (e) => {
        if (!e.touches || !e.touches[0]) return


        console.log(e.touches[0].clientX)
        setIsDragging(true)
        setStartX(e.touches[0].clientX);
        carouselRef.current.classList.remove("container-animation");

    }

    let HandleTouchEnd = (e) => {
        setIsDragging(false)
        let xDifPercent = offset
        let percentForMove = 50;
        if (xDifPercent < -percentForMove) {
            nextItem(1)
        } else if (xDifPercent > percentForMove) {
            nextItem(-1)
        }
        setOffset(0)
        carouselRef.current.classList.add("container-animation");


    }
    let HandleTouchMove = (e) => {
        if (!e.changedTouches || !e.changedTouches[0]) return;

        const positionNowX = e.changedTouches[0].clientX
        // let xDifPercent = (100 * (positionNowX - startX)) / width
        let xDifPercent = (positionNowX - startX)
        let moveOffset = Math.round(xDifPercent);
        setOffset(moveOffset);

    }

    //activeIndex === 1  ||activeIndex===items.length-2 + `${ animation? "":"disable-animation"}` onTransitionEnd={(e)=>{jump();}}
    return (
        <>
            <div className="carousel" onTouchStart={HandleTouchStart} onTouchEnd={HandleTouchEnd}
                 onTouchMove={HandleTouchMove}>
                <div onMouseOut={()=>setIsPause(false)} onMouseOver={()=>setIsPause(true)} onTransitionEnd={(e) => {
                    jump();
                }} className={"carousel-item-container"} ref={carouselRef}
                     style={{transform: `translate3d(-${activeIndex * width - offset}px,0,0)`}}>
                    {items.map((el, index) => {
                        return React.cloneElement(el, {key: index});
                    })}
                </div>
                <CarouselIndicators numberOfButtons={quantityChildren} updateIndex={setActiveIndex}
                                    activeIndex={activeIndex}/>
                <CarouselButtons onClickRight={() => {
                    nextItem(1)
                }} onClickLeft={() => {
                    nextItem(-1);
                }} showButtons={showButtons}/>
            </div>


        </>
    );
}