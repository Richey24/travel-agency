import React, { FC } from "react";
import { TourCardProps } from "./types";
import star1 from "../../assets/images/star1.png";
import star2 from "../../assets/images/star2.png";
import Image from "next/image";

export const TourCard: FC<TourCardProps> = ({
     city,
     offerCount,
     tours,
     description,
     rateCount,
     reviewsCount,
     image,
}) => {
     return (
          <div className="popular">
               <div className="popular_inner">
                    <figure>
                         <img src={image} alt="" className="img-responsive" />
                         <div className="over">
                              <div className="v1">
                                   {city} <span>{offerCount} Deal Offers</span>
                              </div>
                              <div className="v2">Lorem ipsum dolor sit amet, concateus.</div>
                         </div>
                    </figure>
                    <div className="caption">
                         <div className="txt1">
                              <span>{city}</span> {tours}
                         </div>
                         <div className="txt2">{description}</div>
                         <div className="txt3 clearfix">
                              <div className="left_side">
                                   <div className="stars1">
                                        {[...Array(5)].map((_, count) => {
                                             if (count < rateCount) {
                                                  return <Image src={star1} alt="" key={count} />;
                                             }
                                             return <Image src={star2} alt="" key={count} />;
                                        })}
                                   </div>
                                   <div className="nums">- {reviewsCount} Reviews</div>
                              </div>
                              <div className="right_side">
                                   <a href="#" className="btn-default btn1">
                                        See All
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
