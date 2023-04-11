import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Cars() {
     return (
          <div className={styles.container}>
               <div id="main">
                    <div className="top1_wrapper">
                         <div className="container">
                              <div className="top1 clearfix">
                                   <div className="email1">
                                        <a href="#">support@ezbooking.world</a>
                                   </div>
                                   <div className="phone1">+858 384.6488</div>
                                   <div className="social_wrapper">
                                        <ul className="social clearfix">
                                             <li>
                                                  <a href="#">
                                                       <i className="fa fa-facebook"></i>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="#">
                                                       <i className="fa fa-twitter"></i>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="#">
                                                       <i className="fa fa-google-plus"></i>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="#">
                                                       <i className="fa fa-instagram"></i>
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="#">
                                                       <i className="fa fa-vimeo-square"></i>
                                                  </a>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="lang1">
                                        <div className="dropdown">
                                             <button
                                                  className="btn btn-default dropdown-toggle"
                                                  type="button"
                                                  id="dropdownMenu1"
                                                  data-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="true"
                                             >
                                                  English<span className="caret"></span>
                                             </button>
                                             <ul
                                                  className="dropdown-menu"
                                                  aria-labelledby="dropdownMenu1"
                                             >
                                                  <li>
                                                       <a className="ge" href="#">
                                                            German
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a className="ru" href="#">
                                                            Russian
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="top2_wrapper">
                         <div className="container">
                              <div className="top2 clearfix">
                                   <header>
                                        <div className="logo_wrapper">
                                             <a href="index.html" className="logo">
                                                  <img
                                                       style={{
                                                            width: 200,
                                                            height: 50,
                                                            marginTop: 20,
                                                       }}
                                                       src="images/logo1.png"
                                                       alt=""
                                                       className="img-responsive"
                                                  />
                                             </a>
                                        </div>
                                   </header>
                                   <div className="navbar navbar_ navbar-default">
                                        <button
                                             type="button"
                                             className="navbar-toggle collapsed"
                                             data-toggle="collapse"
                                             data-target=".navbar-collapse"
                                        >
                                             <span className="sr-only">Toggle navigation</span>
                                             <span className="icon-bar"></span>
                                             <span className="icon-bar"></span>
                                             <span className="icon-bar"></span>
                                        </button>
                                        <div className="navbar-collapse navbar-collapse_ collapse">
                                             <ul className="nav navbar-nav sf-menu clearfix">
                                                  <li>
                                                       <a href="index.html">Home</a>
                                                  </li>
                                                  <li>
                                                       <a href="about.html">About Us</a>
                                                  </li>
                                                  <li>
                                                       <a href="gallery.html">Gallery</a>
                                                  </li>
                                                  <li className="active sub-menu sub-menu-1">
                                                       <a href="#">
                                                            Pages<em></em>
                                                       </a>
                                                       <ul>
                                                            <li>
                                                                 <a href="flights.html">Flights</a>
                                                                 <ul>
                                                                      <li>
                                                                           <a href="search-flights.html">
                                                                                Search Flights
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="booking-flights.html">
                                                                                Booking Flights
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="booking-flights-page.html">
                                                                                Flights Checkout
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </li>

                                                            <li>
                                                                 <a href="hotels.html">Hotels</a>
                                                                 <ul>
                                                                      <li>
                                                                           <a href="search-hotel.html">
                                                                                Search Hotels
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="booking-hotel.html">
                                                                                Booking Hotel
                                                                           </a>
                                                                      </li>
                                                                      <li>
                                                                           <a href="booking-hotel-page.html">
                                                                                Hotel Reservation
                                                                           </a>
                                                                      </li>
                                                                 </ul>
                                                            </li>
                                                       </ul>
                                                  </li>

                                                  <li className="sub-menu sub-menu-1">
                                                       <a href="#">
                                                            Blog<em></em>
                                                       </a>
                                                       <ul>
                                                            <li>
                                                                 <a href="blog.html">Right Blog</a>
                                                            </li>
                                                            <li>
                                                                 <a href="left-blog.html">
                                                                      Left Blog
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="post.html">Right Post</a>
                                                            </li>
                                                            <li>
                                                                 <a href="left-post.html">
                                                                      Left Post
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                 <a href="full-post.html">
                                                                      Full Post
                                                                 </a>
                                                            </li>
                                                       </ul>
                                                  </li>
                                                  <li>
                                                       <a href="contacts.html">Contacts</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="breadcrumbs1_wrapper">
                         <div className="container">
                              <div className="breadcrumbs1">
                                   <a href="index.html">Home</a>
                                   <span>/</span>Pages<span>/</span>Booking
                              </div>
                         </div>
                    </div>

                    <div id="content">
                         <div className="container">
                              <div className="row">
                                   <div className="col-sm-12">
                                        <h3 className="text-center hch2">
                                             MERCEDES BENZ ML (or similar)
                                        </h3>

                                        <div className="clearfix"></div>
                                        <p className="address text-center">
                                             Na Strzi 32, Prague, 14000, Czech Republic
                                        </p>

                                        <div className="clearfix"></div>
                                        <div className="col-md-4 booking-row">
                                             <h3 className="line">TRAVELLER INFORMATION</h3>

                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       First Name
                                                  </label>

                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            value="Michael"
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Last Name
                                                  </label>

                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            value="Berkovich"
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Your Email
                                                  </label>

                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="email"
                                                            className="form-control"
                                                            value="your@email.com"
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="margin-top"></div>
                                             <h3>CREDIT CARD INFORMATION</h3>

                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Name on Card
                                                  </label>

                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            value="Michael Berkovich"
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Card Number
                                                  </label>

                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            value="0123 4567 8901 2345"
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="select1_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 15 }}
                                                  >
                                                       Expiration Date
                                                  </label>

                                                  <div
                                                       className="select1_inner col-md-3"
                                                       style={{
                                                            marginTop: 12,
                                                            paddingRight: 0,
                                                            paddingLeft: 0,
                                                            width: "20%",
                                                            display: "inline-block",
                                                       }}
                                                  >
                                                       <select
                                                            className="select2 select select3"
                                                            style={{ width: "100%" }}
                                                       >
                                                            <option value="01">01</option>
                                                            <option value="02">02</option>
                                                            <option value="03">03</option>
                                                            <option value="04">04</option>
                                                            <option value="05">05</option>
                                                            <option value="06">06</option>
                                                            <option value="07">07</option>
                                                            <option value="08">08</option>
                                                            <option value="09">09</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                       </select>
                                                  </div>
                                                  <div
                                                       className="select1_inner col-md-3"
                                                       style={{
                                                            marginTop: 12,
                                                            marginLeft: 10,
                                                            paddingRight: 0,
                                                            paddingLeft: 0,
                                                            width: "20%",
                                                            display: "inline-block",
                                                       }}
                                                  >
                                                       <select
                                                            className="select2 select select3"
                                                            style={{ width: "100%" }}
                                                       >
                                                            <option value="2017">2017</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2019">2019</option>
                                                            <option value="2020">2020</option>
                                                            <option value="2021">2021</option>
                                                            <option value="2022">2022</option>
                                                       </select>
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Security Code
                                                  </label>

                                                  <div
                                                       className="col-md-3"
                                                       style={{
                                                            paddingRight: 0,
                                                            paddingLeft: 0,
                                                            width: "20%",
                                                       }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            value=""
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="margin-top"></div>
                                             <h3>BILLING ADDRESS</h3>

                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Country
                                                  </label>

                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            value=""
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       City
                                                  </label>

                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            value=""
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Address
                                                  </label>

                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            value=""
                                                            spellCheck={false}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 booking-row">
                                             <h3 className="line">CARS SUMMARY</h3>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Pick up:
                                                  </label>

                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">Prague</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Return:
                                                  </label>

                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">Prague</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Check-in:
                                                  </label>

                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">20 - Apr - 2017</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Check-Out:
                                                  </label>

                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">20 - May - 2017</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="margin-top"></div>
                                             <h3>CHARGES</h3>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       Fees
                                                  </label>

                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">Included</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{ paddingLeft: 0, paddingTop: 12 }}
                                                  >
                                                       TOTAL
                                                  </label>

                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">$680</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div
                                                  className="margin-top"
                                                  style={{ marginTop: 40 }}
                                             ></div>
                                             <div className="border-3px"></div>
                                             <div className="clearfix"></div>
                                             <div className="margin-top"></div>
                                             <h3>ACCEPT AND CONFIRM</h3>
                                             <input type="checkbox" />{" "}
                                             <b style={{ color: "#464646", paddingLeft: 10 }}>
                                                  I agree to the booking conditions
                                             </b>
                                             <div className="margin-top"></div>
                                             <div className="clearfix"></div>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: 18,
                                                            fontSize: 16,
                                                       }}
                                                  >
                                                       GRAND TOTAL:
                                                  </label>

                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span
                                                            className="red"
                                                            style={{ fontSize: 30 }}
                                                       >
                                                            $680.00
                                                       </span>
                                                  </div>
                                             </div>
                                             <div className="clearfix"></div>
                                             <div className="margin-top"></div>
                                             <a
                                                  href="booking-success.html"
                                                  className="btn btn-default btn-cf-submit3"
                                             >
                                                  BOOKING NOW
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="bot1_wrapper">
                         <div className="container">
                              <div className="row">
                                   <div className="col-sm-3">
                                        <div className="logo2_wrapper">
                                             <a href="index.html" className="logo2">
                                                  <img
                                                       src="images/logo1.png"
                                                       alt=""
                                                       className="img-responsive"
                                                  />
                                             </a>
                                        </div>
                                        <p>
                                             Nam liber tempor cum soluta nobis option congue nihil
                                             imperdiet doming id quod mazim. Lorem ipsum dolor sit
                                             amet, consectetuer adipiscing elit, sed diam nonummy
                                             nibh euismod tincidunt ut laoreet dolore magna.
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
                                                  <a href="#">First className Flights</a>
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
                                                       <a href="#"></a>
                                                  </li>
                                                  <li className="nav2">
                                                       <a href="#"></a>
                                                  </li>
                                                  <li className="nav3">
                                                       <a href="#"></a>
                                                  </li>
                                                  <li className="nav4">
                                                       <a href="#"></a>
                                                  </li>
                                                  <li className="nav5">
                                                       <a href="#"></a>
                                                  </li>
                                                  <li className="nav6">
                                                       <a href="#"></a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="col-sm-3">
                                        <div className="bot1_title">Our Twitter</div>
                                        <div className="twits1">
                                             <div className="twit1">
                                                  <a href="#"> @travel</a> Lorem ipsum dolor sit
                                                  amet, consectetuer adipiscing elit
                                                  <div className="date">5 minutes ago</div>
                                             </div>
                                             <div className="twit1">
                                                  <a href="#">@leo</a> Nam liber tempor cum soluta
                                                  nobis option congue nihil imperdiet doming id quod
                                                  mazim.
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
                                                  <form
                                                       className="newsletter"
                                                       action="javascript:;"
                                                  >
                                                       <input
                                                            type="text"
                                                            name="s"
                                                            value="Email Address"
                                                            onBlur={(event) => {
                                                                 if (event.target.value === "")
                                                                      event.target.value =
                                                                           "Email Address";
                                                            }}
                                                            onFocus={(event) => {
                                                                 if (
                                                                      event.target.value ===
                                                                      "Email Address"
                                                                 )
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

                    <div className="bot2_wrapper">
                         <div className="container">
                              <div className="left_side">
                                   Copyright © 2017{" "}
                                   <a href="#" target="_blank">
                                        <strong>GRIDGUM</strong>
                                   </a>{" "}
                                   <span>|</span> <a href="#">Privacy Policy</a> <span>|</span>{" "}
                                   <a href="#">About Us</a> <span>|</span> <a href="#">FAQ</a>
                                   <span>|</span> <a href="#">Contact Support</a>
                              </div>
                              <div className="right_side">
                                   Designed by{" "}
                                   <a href="#" target="_blank">
                                        <strong>GRIDGUM</strong>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
