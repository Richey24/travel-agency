import React from "react";

export const AboutOurCompany = () => {
     return (
          <div id="company1">
               <div className="container">
                    <h2 className="animated">ABOUT OUR COMPANY</h2>
                    <div className="title1 animated">
                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                         nibh euismod <br />
                         tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </div>
                    <br />
                    <div className="row">
                         <div className="col-sm-12 col-md-6 col-md-push-6">
                              <div className="content">
                                   <div className="txt1 animated">TRAVEL AGENCY</div>
                                   <div className="txt2 animated">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                        quis nostrud exerci tation ullamcorper suscipit.
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
                                                  data-num={45}
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
                         <div className="col-sm-12 col-md-6 col-md-pull-6">
                              <img
                                   src="images/company1.png"
                                   alt=""
                                   className="img1 img-responsive animated"
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};
