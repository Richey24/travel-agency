import React, { FC } from "react";
import { CarouselProps } from "./types";

export const Carousel: FC<CarouselProps> = ({ data, card: Card }) => {
     return (
          <div
               id="popular_wrapper"
               className="animated"
               data-animation="fadeIn"
               data-animation-delay={300}
          >
               <div id="popular_inner">
                    <div className="">
                         <div id="popular">
                              <div className="">
                                   <div className="carousel-box">
                                        <div className="inner">
                                             <div className="carousel main">
                                                  <ul>
                                                       {data.map((cardItem, idx) => (
                                                            <li key={idx}>
                                                                 <Card {...cardItem} />
                                                            </li>
                                                       ))}
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="popular_pagination" />
                         </div>
                    </div>
               </div>
          </div>
     );
};
