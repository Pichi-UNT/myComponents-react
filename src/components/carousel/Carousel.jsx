import {useEffect, useState, useRef, Children, useLayoutEffect} from "react";
import "./carousel.css"


export function CarouselItem({children}) {
    return (
        <div className="carousel-item">
            {children}
        </div>

    );
}


export default function Carousel({children, autoplay = false, timeout = 3000, showButtons = true}) {
    const carouselRef = useRef();
    const [index, setIndex] = useState(0)
    const [startX, setStartX] = useState(0);
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // useLayoutEffect?
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
                nextItem(1);
            }, timeout)
            return () => clearInterval(interval)
        }
    })


    let nextItem = (delta) => {

        if (index + delta > Children.count(children) - 1) { //
            setIndex(0);
        } else if (index + delta < 0) {
            setIndex(Children.count(children) - 1); //
        } else {
            setIndex(index + delta)
        }
    }

    let HandleTouchStart = (e) => {
        setIsDragging(true)
        setStartX(e.touches[0].clientX);

    }

    let HandleTouchEnd = (e) => {
        setIsDragging(false)
        let xDifPercent=offset
        let percentForMove=70;
        if (xDifPercent < -percentForMove) {
            nextItem(1)
        } else if (xDifPercent > percentForMove) {
            nextItem(-1)
        }
        setOffset(0)


    }
    let HandleTouchMove = (e) => {
        if (!isDragging) return;
        const positionNowX = e.changedTouches[0].clientX
        let xDifPercent=(100*(positionNowX - startX))/width
        let moveOffset =  2*Math.round(xDifPercent);
        setOffset(moveOffset);


    }

    return (
        <>
            <div className="carousel" onTouchStart={HandleTouchStart} onTouchEnd={HandleTouchEnd}
                 onTouchMove={HandleTouchMove}>
                <div className="carousel-item-container" ref={carouselRef}
                     style={{transform: `translate3d(-${index * 100 - offset}%,0,0)`}}

                >
                    {children}
                </div>
                <div className={showButtons? "":"deactivate"}>
                    <div className={"carousel-btn left-btn"}
                         onClick={() => {
                             nextItem(-1)
                         }}/>
                    <div className={"carousel-btn right-btn"}
                         onClick={() => {
                             nextItem(1)
                         }}/>
                </div>
            </div>


        </>
    );
}