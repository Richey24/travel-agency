import React from "react";
import { images } from "./data";

export const BottomGallary = () => {
     return (
          <div id="partners">
               <div className="container">
                    <div className="row">
                         {images.map((image) => (
                              <div className="col-sm-4 col-md-2 col-xs-6">
                                   <div className="thumb1 animated">
                                        <div className="thumbnail clearfix">
                                             <a href="#">
                                                  <figure>
                                                       <img
                                                            src="http://placehold.it/170x95"
                                                            alt=""
                                                            className="img1 img-responsive"
                                                       />
                                                       <img
                                                            src="http://placehold.it/170x95"
                                                            alt=""
                                                            className="img2 img-responsive"
                                                       />
                                                  </figure>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};
