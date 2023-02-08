import React from "react";
import {CardProject} from "./CardProject";
import Carousel, {CarouselItem} from "./carousel/Carousel";
import zeus from '../assets/zeus.jpg'
import mano from '../assets/mano.jpg'

export function CardSelector() {
    let text = "Description of project. Lorem ipsum dolor sit amet consectetur  " +
        ".asperiores illo ullam et incidunt ab non fugiat voluptates quasi tenetur nihil reprehenderit repellendus, " +
        "excepturi fugit sunt facere dolor doloribus? Placeat minima ex voluptates.";

    const datos = [{
        imgSrc: 'src/assets/zeus.jpg', title: "prueba 1", header: "29 enero - 2023",
        text: text
    }, {
        imgSrc: 'src/assets/mano.jpg', title: "prueba 2", header: "29 enero - 2023",
        text: text
    }];

    return (
        <>
            <section className={"prueba2"}>

                    <Carousel autoplay={false}>
                        <CarouselItem>
                            <CardProject imgSrc={zeus} title={"cv digital"} header={"29 enero - 2023"}
                                         text={"Description of project. Lorem ipsum dolor sit amet " +
                                             "consectetur  .asperiores illo ullam et incidunt ab non fugiat voluptates " +
                                             "quasi tenetur nihil reprehenderit repellendus, excepturi fugit sunt " +
                                             "facere dolor doloribus? Placeat minima ex voluptates."}/>
                        </CarouselItem>
                        <CarouselItem>
                            <CardProject imgSrc={zeus} title={"cv digital"} header={"29 enero - 2023"}
                                         text={"hola2"}/>
                        </CarouselItem>
                        <CarouselItem>
                            <CardProject imgSrc={mano} title={"cv digital"} header={"29 enero - 2023"}
                                         text={"hola3"}/>
                        </CarouselItem>
                    </Carousel>
            </section>
            <section>
                <CardProject imgSrc={zeus} title={"cv digital"} header={"29 enero - 2023"}
                             text={text}/>
            </section>
        </>
    )
}