import React, {useEffect, useRef, useState} from "react";
import {CardProject} from "../CardProject.jsx";
import "./carousel.css"

// export default function CarouselOld({children, data = [], autoplay = true}) {
//     let text = "Description of project. Lorem ipsum dolor sit amet consectetur  " +
//         ".asperiores illo ullam et incidunt ab non fugiat voluptates quasi tenetur nihil reprehenderit repellendus, " +
//         "excepturi fugit sunt facere dolor doloribus? Placeat minima ex voluptates."
//
//     // const [index, setIndex] = useState(0);
//     // const carousel =useRef()
//     const [index, setIndex] = useState(0);
//     const [translateValue, setTranslateValue] = useState(0);
//     const [slideWidth, setSlideWidth] = useState(0);
//     const [isDragging, setIsDragging] = useState(false);
//     const [startX, setStartX] = useState(0);
//
//     const carouselRef = useRef();
//
//     useEffect(() => {
//         setSlideWidth(carouselRef.current.offsetWidth)
//     }, []);
//
//
// let onclickHandle = (delta) => {
//
//     if (index + delta > data.length - 1) {
//         setIndex(0);
//     } else if (index + delta < 0) {
//         setIndex(data.length - 1);
//     } else {
//         setIndex(index + delta)
//     }
// }
//
//
//     return (
//         <div className={"carousel-container"}
//              ref={`carousel`}
//              className="carousel"
//
//
//         >
//             <div className={"carousel-item"} style={{
//                 transform: `translateX(${translateValue - index * slideWidth}px)`,
//             }}>
//                 <CardProject imgSrc={data[index].imgSrc} title={data[index].title} header={data[index].header}
//                              text={data[index].text}/>
//
//             </div>
//             <div onClick={(e) => {
//                 onclickHandle(1)
//             }} className="carousel-btn right-btn"/>
//             <div onClick={(e) => {
//                 onclickHandle(-1)
//             }}
//                  className="carousel-btn  left-btn"/>
//
//         </div>
//     );
// }

const CarouselOld = ({data}) => {
    const carousel = useRef();
    const [count, setCount] = useState(0);
    const [offsetWidth, setoffsetWidth] = useState(0);

    useEffect(() => {
        setoffsetWidth(carouselRef.current.offsetWidth)
    }, []);

    const incrementCarousel = delta => {
        if (!carousel.current) return;

        const width = carousel.current.offsetWidth;

        if (count + delta > images.length - 1) {
            setCount(0);
            carousel.current.scrollTo(0, 0);
            return;
        } else if (count + delta < 0) {
            setCount(images.length - 1);
            console.log(width, carousel.current.scrollLeft);
            carousel.current.scrollTo(width * images.length - 1, 0);
            return;
        }

        carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta,
            0
        );
        setCount(c => c + delta);
    };

    return (
        <div className={"carousel-container"} ref={`carousel`} className="carousel">
            <div className={"carousel-item"}>
                {data.map((el, index) => {
                    return (<CardProject key={index} imgSrc={el.imgSrc} title={el.title} header={el.header}
                                         text={el.text}/>);
                })}


            </div>
            <div onClick={(e) => {
                incrementCarousel(1)
            }} className="carousel-btn right-btn"/>
            <div onClick={(e) => {
                incrementCarousel(-1)
            }}
                 className="carousel-btn  left-btn"/>

        </div>

    );
};

export default CarouselOld;