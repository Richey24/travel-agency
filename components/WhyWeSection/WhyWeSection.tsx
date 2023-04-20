import Image from "next/image";
import React from "react";
import why from "../../assets/images/why1.png";
import why2 from "../../assets/images/why2.png";
import whyHover from "../../assets/images/why1_hover.png";
import why2Hover from "../../assets/images/why2_hover.png";
import why3 from "../../assets/images/why3.png";
import why3Hover from "../../assets/images/why3_hover.png";
import why4 from "../../assets/images/why4.png";
import why4Hover from "../../assets/images/why4_hover.png";

export const WhyWeSection = () => {
     return (
          <div id="why1">
               <div className="container">
                    <h2 className="animated">WHY WE ARE THE BEST</h2>
                    <div className="title1 animated">
                         Welcome to our revolutionary new booking site that is dedicated to serving
                         the needs of religious travelers. We're not your average travel provider -
                         we're partnering with major religious organizations to offer their members
                         a specialized and personalized booking experience. <br />
                         Our team understand and value your faith
                    </div>
                    <br />
                    <br />
                    <div className="row">
                         <div className="col-sm-3">
                              <div
                                   className="thumb2 animated"
                                   data-animation="flipInY"
                                   data-animation-delay={200}
                              >
                                   <div className="thumbnail clearfix">
                                        <a href="#">
                                             <figure className="">
                                                  <Image
                                                       src={why}
                                                       alt=""
                                                       className="img1 img-responsive"
                                                  />
                                                  <Image
                                                       src={whyHover}
                                                       alt=""
                                                       className="img2 img-responsive"
                                                  />
                                             </figure>
                                             <div className="caption">
                                                  <div className="txt1">Amazing Travel</div>
                                                  <div className="txt2">
                                                       Exclusive partnership with major religious
                                                       organizations, providing members with access
                                                       to specialized accommodation and amenities
                                                  </div>
                                                  <div className="txt3">Read More</div>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-3">
                              <div
                                   className="thumb2 animated"
                                   data-animation="flipInY"
                                   data-animation-delay={300}
                              >
                                   <div className="thumbnail clearfix">
                                        <a href="#">
                                             <figure className="">
                                                  <Image
                                                       src={why2}
                                                       alt=""
                                                       className="img1 img-responsive"
                                                  />
                                                  <Image
                                                       src={why2Hover}
                                                       alt=""
                                                       className="img2 img-responsive"
                                                  />
                                             </figure>
                                             <div className="caption">
                                                  <div className="txt1">Discover</div>
                                                  <div className="txt2">
                                                       A personalized booking experience that cater
                                                       to the unique needs of religious travelers.
                                                  </div>
                                                  <div className="txt3">Read More</div>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-3">
                              <div
                                   className="thumb2 animated"
                                   data-animation="flipInY"
                                   data-animation-delay={400}
                              >
                                   <div className="thumbnail clearfix">
                                        <a href="#">
                                             <figure className="">
                                                  <Image
                                                       src={why3}
                                                       alt=""
                                                       className="img1 img-responsive"
                                                  />
                                                  <Image
                                                       src={why3Hover}
                                                       alt=""
                                                       className="img2 img-responsive"
                                                  />
                                             </figure>
                                             <div className="caption">
                                                  <div className="txt1">Book Your Trip</div>
                                                  <div className="txt2">
                                                       Affordable rate and exclusive deals for
                                                       members of religious organizations, ensuring
                                                       that our guests can travel with ease and
                                                       comfort.
                                                  </div>
                                                  <div className="txt3">Read More</div>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-3">
                              <div
                                   className="thumb2 animated"
                                   data-animation="flipInY"
                                   data-animation-delay={500}
                              >
                                   <div className="thumbnail clearfix">
                                        <a href="#">
                                             <figure className="">
                                                  <Image
                                                       src={why4}
                                                       alt=""
                                                       className="img1 img-responsive"
                                                  />
                                                  <Image
                                                       src={why4Hover}
                                                       alt=""
                                                       className="img2 img-responsive"
                                                  />
                                             </figure>
                                             <div className="caption">
                                                  <div className="txt1">Nice Support</div>
                                                  <div className="txt2">
                                                       A commitment to respect, and cultural
                                                       sensitivity, creating a welcoming and save
                                                       environment for all guest regardless of their
                                                       faith.
                                                  </div>
                                                  <div className="txt3">Read More</div>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
