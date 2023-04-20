import React, { FC } from "react";
import { TeamCardProps } from "./types";

export const TeamCard: FC<TeamCardProps> = ({ name, role, image, description }) => {
     return (
          <div className="thumb3 animated" data-animation="flipInY" data-animation-delay={300}>
               <div className="thumbnail clearfix">
                    <figure className="">
                         <img
                              src={image}
                              alt=""
                              className="img-responsive"
                              style={{ height: 310 }}
                         />
                         <div className="over">{role}</div>
                    </figure>
                    <div className="caption">
                         <div className="txt1">{name}</div>
                         <div className="txt2">{description}</div>
                         <div className="social_sm_wrapper">
                              <ul className="social_sm clearfix">
                                   <li>
                                        <a href="#">
                                             <i className="fa fa-facebook-square" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa fa-twitter" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa fa-google-plus" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa fa-dribbble" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa fa-vimeo-square" />
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             <i className="fa fa-instagram" />
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     );
};
