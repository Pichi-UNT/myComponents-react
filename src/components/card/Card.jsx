import React from "react";
import "./Card.css"


export function Card({children, backgroundColor="#f3f3f3"}) {
    return (

        <div className={"card"} style={{background:`${backgroundColor}`}}>
            {children}
        </div>
    );
}

/*
// <div className={style.card} style={{background:`${backgroundColor}`}}>
 <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt="">
      </div>

      <div class="blog-slider__content">
        <span class="blog-slider__code">26 December 2019</span>
        <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
 */

/*
                 <div class="card card-height">
                    <div class="card-container background-card-container">
                        <div class="card-title">
                            <h4>CV Digital </h4>
                            <h5>Enero 2023</h5>
                        </div>
                        <div class="card-description">
                            <p>
                                Descripcion of project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                                reiciendis vero labore repudiandae magni unde ipsa atque omnis consequuntur rem harum
                                obcaecati, soluta suscipit enim perspiciatis officia voluptate alias. Accusamus dolore
                                quis ex facilis, vel explicabo architecto officiis. Amet voluptatum odit numquam tempore
                                suscipit facilis neque asperiores illo ullam et incidunt ab non fugiat voluptates quasi
                                tenetur nihil reprehenderit repellendus, excepturi fugit sunt facere dolor doloribus?
                                Placeat minima ex voluptates.
                            </p>
                        </div>
                        <div class="card-img">
                            <img src="../resources/pag-prueba.jpg" alt="project img">
                            <!-- width="350px" height="280px" -->
                        </div>
                        <div class="card-btn">
                            <button class="btn">More Details</button>
                        </div>
                    </div>
                </div>
*/

/*
<div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">

        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">26 December 2019</span>
        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>


    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">26 December 2019</span>
        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>

  </div>
  <div class="blog-slider__pagination"></div>
</div>
*/