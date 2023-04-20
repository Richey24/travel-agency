import React from "react";
import star1 from "../../../../assets/images/star1.png";
import star2 from "../../../../assets/images/star2.png";
import Image from "next/image";
import { StarCount } from "../../../StarCount/StarCount";
export const StarRating = () => {
     return (
          <div className="star_rating_wrapper">
               <div className="title">Star Rating</div>
               <div className="content">
                    <div className="star_rating">
                         <form>
                              <div>
                                   <input
                                        id="checkbox-1"
                                        className="checkbox1-custom"
                                        name="checkbox-1"
                                        type="checkbox"
                                        defaultChecked
                                   />
                                   <label htmlFor="checkbox-1" className="checkbox1-custom-label">
                                        <StarCount rateCount={5} />
                                        <span>5 Stars</span>
                                   </label>
                              </div>
                              <div>
                                   <input
                                        id="checkbox-2"
                                        className="checkbox1-custom"
                                        name="checkbox-2"
                                        type="checkbox"
                                   />
                                   <label htmlFor="checkbox-2" className="checkbox1-custom-label">
                                        <StarCount rateCount={4} />

                                        <span>4 Stars</span>
                                   </label>
                              </div>
                              <div>
                                   <input
                                        id="checkbox-3"
                                        className="checkbox1-custom"
                                        name="checkbox-3"
                                        type="checkbox"
                                        defaultChecked
                                   />
                                   <label htmlFor="checkbox-3" className="checkbox1-custom-label">
                                        <StarCount rateCount={3} />
                                        <span>3 Stars</span>
                                   </label>
                              </div>
                              <div>
                                   <input
                                        id="checkbox-4"
                                        className="checkbox1-custom"
                                        name="checkbox-4"
                                        type="checkbox"
                                   />
                                   <label htmlFor="checkbox-4" className="checkbox1-custom-label">
                                        <StarCount rateCount={2} />
                                        <span>2 Stars</span>
                                   </label>
                              </div>
                              <div>
                                   <input
                                        id="checkbox-5"
                                        className="checkbox1-custom"
                                        name="checkbox-5"
                                        type="checkbox"
                                   />
                                   <label htmlFor="checkbox-5" className="checkbox1-custom-label">
                                        <StarCount rateCount={1} />
                                        <span>1 Stars</span>
                                   </label>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};
