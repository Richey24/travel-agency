import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo1.png";

export const Footer = () => {
     return (
          <div className="bot1_wrapper">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-3">
                              <div className="logo2_wrapper">
                                   <a href="index.html" className="logo2">
                                        <Image src={logo} alt="" className="img-responsive" />
                                   </a>
                              </div>
                              <p>
                                   Welcome to our revolutionary new booking site that is dedicated
                                   to serving the needs of religious travelers. We're not your
                                   average travel provider - we're partnering with major religious
                                   organizations to offer their members a specialized and
                                   personalized booking experience. <br />
                                   Our team understand and value your faith
                              </p>
                              <p>
                                   <a href="#" className="btn-default btn2">
                                        Read More
                                   </a>
                              </p>
                         </div>
                         <div className="col-sm-3">
                              <div className="bot1_title">Travel Specialists</div>
                              <ul className="ul1">
                                   <li>
                                        <a href="#">First Class Flights</a>
                                   </li>
                                   <li>
                                        <a href="#">Accessible Travel</a>
                                   </li>
                                   <li>
                                        <a href="#">Amazing Cruises</a>
                                   </li>
                              </ul>
                              <div className="social2_wrapper">
                                   <ul className="social2 clearfix">
                                        <li className="nav1">
                                             <a href="#" />
                                        </li>
                                        <li className="nav2">
                                             <a href="#" />
                                        </li>
                                        <li className="nav3">
                                             <a href="#" />
                                        </li>
                                        <li className="nav4">
                                             <a href="#" />
                                        </li>
                                        <li className="nav5">
                                             <a href="#" />
                                        </li>
                                        <li className="nav6">
                                             <a href="#" />
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="col-sm-3">
                              <div className="bot1_title">Our Twitter</div>
                              <div className="twits1">
                                   <div className="twit1">
                                        <a href="#"> @travel</a> Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit
                                        <div className="date">5 minutes ago</div>
                                   </div>
                                   <div className="twit1">
                                        <a href="#">@leo</a> Nam liber tempor cum soluta nobis
                                        option congue nihil imperdiet doming id quod mazim.
                                        <div className="date">2 days ago</div>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-3">
                              <div className="bot1_title">Newsletter</div>
                              <div className="newsletter_block">
                                   <div className="txt1">
                                        Inspiration, ideas, news and your feedback.
                                   </div>
                                   <div className="newsletter-wrapper clearfix">
                                        <form className="newsletter" action="javascript:;">
                                             <input
                                                  type="text"
                                                  name="s"
                                                  defaultValue="Email Address"
                                                  onBlur={(event) => {
                                                       if (event.target.value === "")
                                                            event.target.value = "Email Address";
                                                  }}
                                                  onFocus={(event) => {
                                                       if (event.target.value === "Email Address")
                                                            event.target.value = "";
                                                  }}
                                             />
                                             <a href="#" className="btn-default btn3">
                                                  SUBMIT
                                             </a>
                                        </form>
                                   </div>
                              </div>
                              <div className="phone2">+858 384.6488</div>
                              <div className="support1">
                                   <a href="#">support@ezbooking.world</a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
