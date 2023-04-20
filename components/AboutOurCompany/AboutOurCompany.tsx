import React from "react";
import companyImg from "../../assets/images/company1.png";
import Image from "next/image";

export const AboutOurCompany = () => {
     return (
          <div id="company1">
               <div className="container">
                    <h2 className="animated">ABOUT OUR COMPANY</h2>
                    <div className="title1 animated">
                         Our company was founded by a preacher's kid from a small town, who was
                         raised with strong values of honesty, integrity, and community. As a
                         result, we bring these small town values to the business travel industry,
                         providing a personalized and ethical approach to our services. We believe
                         that by treating our customers with respect and honesty, we can create
                         long- lasting relationships built on trust and mutual respect.
                    </div>
                    <br />
                    <div className="row">
                         <div className="col-sm-12 col-md-6 col-md-push-6">
                              <div className="content">
                                   <div className="txt1 animated">TRAVEL AGENCY</div>
                                   <div className="txt2 animated">
                                        Our aim is to provide great service at an affordable price,
                                        ensuring that everyone can enjoy a comfortable and enjoyable
                                        travel experience without breaking the bank.
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
                              </div>
                         </div>
                         <div className="col-sm-12 col-md-6 col-md-pull-6">
                              <Image
                                   src={companyImg}
                                   alt=""
                                   className="img1 img-responsive animated"
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};
