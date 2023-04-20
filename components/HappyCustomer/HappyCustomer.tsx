import Image from "next/image";
import React from "react";
import people from "../../assets/images/people.png";

export const HappyCustomer = () => {
     return (
          <div id="happy1">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-12 col-md-6 col-md-push-6">
                              <div className="content">
                                   <div
                                        className="txt1 animated"
                                        data-animation="fadeIn"
                                        data-animation-delay={100}
                                   >
                                        HAPPY CUSTOMERS
                                   </div>
                                   <div
                                        className="txt2 animated"
                                        data-animation="fadeIn"
                                        data-animation-delay={150}
                                   >
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        set amet.
                                   </div>
                                   <div
                                        className="txt3 animated"
                                        data-animation="fadeIn"
                                        data-animation-delay={200}
                                   >
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetuer adipiscing
                                             elit, sed diam nonummy nibh oui- sod tincidunt ut
                                             laoreet dolore magna aliquam erat volutpat. Ut wisi
                                             enim ad minim veniam, quis nostrud exerci tation
                                             ullamcorper suscipit dolore magna aliquam erat voutpat.
                                             Ut wisi enim ad minim veniam, quis nostrud exerci
                                             tation ullamcorper suscipit..
                                        </p>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetuer adipiscing
                                             elit, sed diam nonummy nibh euisod tincidunt ut laoreet
                                             dolore magna aliquam erat volutpat. Ut wisi enim ad
                                             minim veniam, quis nostrud exerci tation ullamcorper
                                             suscipit.
                                        </p>
                                   </div>
                                   <div
                                        className="distance1 animated"
                                        data-animation="fadeInUp"
                                        data-animation-delay={0}
                                   >
                                        <div className="txt">Flights</div>
                                        <div className="bg">
                                             <div
                                                  className="animated-distance"
                                                  data-num={94}
                                                  data-duration={1300}
                                                  data-animation-delay={0}
                                             >
                                                  <span />
                                             </div>
                                        </div>
                                   </div>
                                   <div
                                        className="distance1 animated"
                                        data-animation="fadeInUp"
                                        data-animation-delay={100}
                                   >
                                        <div className="txt">Hotels</div>
                                        <div className="bg">
                                             <div
                                                  className="animated-distance"
                                                  data-num={87}
                                                  data-duration={1300}
                                                  data-animation-delay={100}
                                             >
                                                  <span />
                                             </div>
                                        </div>
                                   </div>
                                   <div
                                        className="distance1 animated"
                                        data-animation="fadeInUp"
                                        data-animation-delay={200}
                                   >
                                        <div className="txt">Cars</div>
                                        <div className="bg">
                                             <div
                                                  className="animated-distance"
                                                  data-num={48}
                                                  data-duration={1300}
                                                  data-animation-delay={200}
                                             >
                                                  <span />
                                             </div>
                                        </div>
                                   </div>
                                   <div
                                        className="distance1 animated"
                                        data-animation="fadeInUp"
                                        data-animation-delay={300}
                                   >
                                        <div className="txt">Cruises</div>
                                        <div className="bg">
                                             <div
                                                  className="animated-distance"
                                                  data-num={51}
                                                  data-duration={1300}
                                                  data-animation-delay={300}
                                             >
                                                  <span />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="col-sm-12 col-md-6 col-md-pull-6 animated"
                              data-animation="fadeInLeft"
                              data-animation-delay={200}
                         >
                              <Image src={people} alt="" className="img1 img-responsive" />
                         </div>
                    </div>
               </div>
          </div>
     );
};
