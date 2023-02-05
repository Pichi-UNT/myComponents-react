import React from "react";
import {Card} from "./card/Card.jsx";
import {CardProject} from "./CardProject";
import CarouselOld from "./carousel/CarouselOld.jsx";
import Carousel, {CarouselItem} from "./carousel/Carousel";


export function CardSelector() {
    let text = "Description of project. Lorem ipsum dolor sit amet consectetur  " +
        ".asperiores illo ullam et incidunt ab non fugiat voluptates quasi tenetur nihil reprehenderit repellendus, " +
        "excepturi fugit sunt facere dolor doloribus? Placeat minima ex voluptates.";

    const datos = [{imgSrc:'src/assets/zeus.jpg', title:"prueba 1", header: "29 enero - 2023",
        text: text},{imgSrc:'src/assets/mano.jpg', title:"prueba 2", header: "29 enero - 2023",
        text: text}];

    return (
        <>
            <section>
                <Carousel>
                    <CarouselItem>
                        <CardProject imgSrc={'src/assets/zeus.jpg'} title={"cv digital"} header={"29 enero - 2023"}
                                     text={"Description of project. Lorem ipsum dolor sit amet " +
                                         "consectetur  .asperiores illo ullam et incidunt ab non fugiat voluptates " +
                                         "quasi tenetur nihil reprehenderit repellendus, excepturi fugit sunt " +
                                         "facere dolor doloribus? Placeat minima ex voluptates."}/>
                    </CarouselItem>
                    <CarouselItem>
                        <CardProject imgSrc={'src/assets/zeus.jpg'} title={"cv digital"} header={"29 enero - 2023"}
                                     text={"hola2"}/>
                    </CarouselItem>
                    <CarouselItem>
                        <CardProject imgSrc={'src/assets/zeus.jpg'} title={"cv digital"} header={"29 enero - 2023"}
                                     text={"hola3"}/>
                    </CarouselItem>
                    <CarouselItem>
                        <h1>Hola1</h1>
                    </CarouselItem>
                    <CarouselItem>
                        <h1>Hola2</h1>
                    </CarouselItem>
                    <CarouselItem>
                        <h1>Hola3</h1>
                    </CarouselItem>
                </Carousel>
            </section>
            <section>
                <CardProject imgSrc={'src/assets/zeus.jpg'} title={"cv digital"} header={"29 enero - 2023"}
                             text={text}/>
            </section>
        </>
    )
}