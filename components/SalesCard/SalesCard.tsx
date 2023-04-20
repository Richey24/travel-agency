import React, { FC } from "react";
import { SalesCardProps } from "./types";

export const SalesCard: FC<SalesCardProps> = ({ city, country, price, image }) => {
     return (
          <div className="thumb4">
               <div className="thumbnail clearfix">
                    <figure>
                         <img src={image} alt="" className="img-responsive" />
                    </figure>
                    <div className="caption">
                         <div className="txt1">
                              {city} - {country}
                         </div>
                         <div className="txt3 clearfix">
                              <div className="left_side">
                                   <div className="price">{price}</div>
                                   <div className="nums">avg/person</div>
                              </div>
                              <div className="right_side">
                                   <a href="search-flights.html" className="btn-default btn1">
                                        Details
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
