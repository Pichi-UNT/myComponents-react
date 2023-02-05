import React from "react";
import {Card} from "./card/Card";
import {CardImage} from "./card/CardImage.jsx";
import {CardContent} from "./card/CardContent.jsx";
import {CardTitle} from "./card/CardTitle.jsx";
import {CardText} from "./card/CardText.jsx";
import {Button} from "./buttom/Button.jsx";

export function CardProject({imgSrc,title,header,text}) {
    return (
       <Card>
           <CardImage src={imgSrc}/>
           <CardContent>
               <CardTitle title={title}  header={header}/>
               <CardText text={text}/>
               <Button/>
           </CardContent>
       </Card>
    );
}