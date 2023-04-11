import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../assets/images/logo1.png";
import why from "../assets/images/why1.png";
import why2 from "../assets/images/why2.png";

import whyHover from "../assets/images/why1_hover.png";
import why2Hover from "../assets/images/why2_hover.png";
import why3 from "../assets/images/why3.png";
import why3Hover from "../assets/images/why3_hover.png";
import why4 from "../assets/images/why4.png";
import why4Hover from "../assets/images/why4_hover.png";
import star1 from "../assets/images/star1.png";
import star2 from "../assets/images/star2.png";
import people from "../assets/images/people.png";
import bgVideo from "../assets/video/bg_video.mp4";

export default function Home() {
     return (
          <div className={styles.container}>
               {/* <body className="front"> */}
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
                                                       <i className="fa fa-facebook" />
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
                                                       <i className="fa fa-instagram" />
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="#">
                                                       <i className="fa fa-vimeo-square" />
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
                                                  English
                                                  <span className="caret" />
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
                                                  <Image
                                                       style={{
                                                            width: 200,
                                                            height: 50,
                                                            marginTop: 20,
                                                       }}
                                                       src={logo}
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
                                             <span className="icon-bar" />
                                             <span className="icon-bar" />
                                             <span className="icon-bar" />
                                        </button>
                                        <div className="navbar-collapse navbar-collapse_ collapse">
                                             <ul className="nav navbar-nav sf-menu clearfix">
                                                  <li className="active">
                                                       <a href="index.html">Home</a>
                                                  </li>
                                                  <li>
                                                       <a href="about.html">About Us</a>
                                                  </li>
                                                  <li>
                                                       <a href="gallery.html">Gallery</a>
                                                  </li>
                                                  <li className="sub-menu sub-menu-1">
                                                       <a href="#">
                                                            Pages
                                                            <em />
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
                                                            Blog
                                                            <em />
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
                    <div className="video-background-wrapper">
                         <video preload="auto" autoPlay className="video-background">
                              <source type="video/mp4" src={bgVideo} />
                              {/*<source type="video/ogv" src="video/video.ogv" />*/}
                              {/*<source type="video/webm" src="video/video.webm" />*/}
                         </video>
                    </div>
                    <div id="front_tabs">
                         <div className="container">
                              <div className="tabs_wrapper tabs1_wrapper">
                                   <div className="tabs tabs1">
                                        <div className="tabs_tabs tabs1_tabs">
                                             <ul>
                                                  <li className="active flights">
                                                       <a href="#tabs-1">Flights</a>
                                                  </li>
                                                  {/* <li class="hotels"><a href="#tabs-2">Hotels</a></li> */}
                                                  {/* <li class="cars"><a href="#tabs-3">Cars</a></li>
                          <li class="cruises"><a href="#tabs-4">Cruises</a></li> */}
                                             </ul>
                                        </div>
                                        <div className="tabs_content tabs1_content">
                                             <div id="tabs-1">
                                                  <form action="javascript:;" className="form1">
                                                       <div className="row">
                                                            <div className="col-sm-4 col-md-2">
                                                                 <div className="select1_wrapper">
                                                                      <label>Flying from:</label>
                                                                      <div className="select1_inner">
                                                                           <select
                                                                                className="select2 select"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           >
                                                                                <option value={1}>
                                                                                     City or Airport
                                                                                </option>
                                                                                <option value={2}>
                                                                                     Alaska
                                                                                </option>
                                                                                <option value={3}>
                                                                                     Bahamas
                                                                                </option>
                                                                                <option value={4}>
                                                                                     Bermuda
                                                                                </option>
                                                                                <option value={5}>
                                                                                     Canada
                                                                                </option>
                                                                                <option value={6}>
                                                                                     Caribbean
                                                                                </option>
                                                                                <option value={7}>
                                                                                     Europe
                                                                                </option>
                                                                                <option value={8}>
                                                                                     Hawaii
                                                                                </option>
                                                                           </select>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-2">
                                                                 <div className="select1_wrapper">
                                                                      <label>To:</label>
                                                                      <div className="select1_inner">
                                                                           <select
                                                                                className="select2 select"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           >
                                                                                <option value={1}>
                                                                                     City or Airport
                                                                                </option>
                                                                                <option value={2}>
                                                                                     Alaska
                                                                                </option>
                                                                                <option value={3}>
                                                                                     Bahamas
                                                                                </option>
                                                                                <option value={4}>
                                                                                     Bermuda
                                                                                </option>
                                                                                <option value={5}>
                                                                                     Canada
                                                                                </option>
                                                                                <option value={6}>
                                                                                     Caribbean
                                                                                </option>
                                                                                <option value={7}>
                                                                                     Europe
                                                                                </option>
                                                                                <option value={8}>
                                                                                     Hawaii
                                                                                </option>
                                                                           </select>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-2">
                                                                 <div className="input1_wrapper">
                                                                      <label>Departing:</label>
                                                                      <div className="input1_inner">
                                                                           <input
                                                                                type="text"
                                                                                className="input datepicker"
                                                                                defaultValue="Mm/Dd/Yy"
                                                                           />
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-2">
                                                                 <div className="input1_wrapper">
                                                                      <label>Returning:</label>
                                                                      <div className="input1_inner">
                                                                           <input
                                                                                type="text"
                                                                                className="input datepicker"
                                                                                defaultValue="Mm/Dd/Yy"
                                                                           />
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-1">
                                                                 <div className="select1_wrapper">
                                                                      <label>Adult:</label>
                                                                      <div className="select1_inner">
                                                                           <select
                                                                                className="select2 select select3"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           >
                                                                                <option value={1}>
                                                                                     1
                                                                                </option>
                                                                                <option value={2}>
                                                                                     2
                                                                                </option>
                                                                                <option value={3}>
                                                                                     3
                                                                                </option>
                                                                                <option value={4}>
                                                                                     4
                                                                                </option>
                                                                                <option value={5}>
                                                                                     5
                                                                                </option>
                                                                                <option value={6}>
                                                                                     6
                                                                                </option>
                                                                                <option value={7}>
                                                                                     7
                                                                                </option>
                                                                                <option value={8}>
                                                                                     8
                                                                                </option>
                                                                           </select>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-1">
                                                                 <div className="select1_wrapper">
                                                                      <label>Child:</label>
                                                                      <div className="select1_inner">
                                                                           <select
                                                                                className="select2 select select3"
                                                                                style={{
                                                                                     width: "100%",
                                                                                }}
                                                                           >
                                                                                <option value={1}>
                                                                                     1
                                                                                </option>
                                                                                <option value={2}>
                                                                                     2
                                                                                </option>
                                                                                <option value={3}>
                                                                                     3
                                                                                </option>
                                                                                <option value={4}>
                                                                                     4
                                                                                </option>
                                                                                <option value={5}>
                                                                                     5
                                                                                </option>
                                                                                <option value={6}>
                                                                                     6
                                                                                </option>
                                                                                <option value={7}>
                                                                                     7
                                                                                </option>
                                                                                <option value={8}>
                                                                                     8
                                                                                </option>
                                                                           </select>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-2">
                                                                 <div className="button1_wrapper">
                                                                      <button
                                                                           type="submit"
                                                                           className="btn-default btn-form1-submit"
                                                                      >
                                                                           Search
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </form>
                                             </div>
                                             {/* <div id="tabs-2">
                          <form action="javascript:;" class="form1">
                              <div class="row">
                                  <div class="col-sm-4 col-md-4">
                                      <div class="select1_wrapper">
                                          <label>City or Hotel Name:</label>
                                          <div class="select1_inner">
                                              <select class="select2 select" style="width: 100%">
                                                  <option value="1">Enter a destination or hotel name</option>
                                                  <option value="2">Lorem ipsum dolor sit amet</option>
                                                  <option value="3">Duis autem vel eum</option>
                                                  <option value="4">Ut wisi enim ad minim veniam</option>
                                                  <option value="5">Nam liber tempor cum</option>
                                                  <option value="6">At vero eos et accusam et</option>
                                                  <option value="7">Consetetur sadipscing elitr</option>
                                                  <option value="8">Sed diam nonumy</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="input1_wrapper">
                                          <label>Check-In:</label>
                                          <div class="input1_inner">
                                              <input type="text" class="input datepicker" value="Mm/Dd/Yy">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="input1_wrapper">
                                          <label>Check-Out:</label>
                                          <div class="input1_inner">
                                              <input type="text" class="input datepicker" value="Mm/Dd/Yy">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="select1_wrapper">
                                          <label>Adult:</label>
                                          <div class="select1_inner">
                                              <select class="select2 select" style="width: 100%">
                                                  <option value="1">Room for 1 adult</option>
                                                  <option value="2">Room for 2 adult</option>
                                                  <option value="3">Room for 3 adult</option>
                                                  <option value="4">Room for 4 adult</option>
                                                  <option value="5">Room for 5 adult</option>
                                                  <option value="6">Room for 6 adult</option>
                                                  <option value="7">Room for 7 adult</option>
                                                  <option value="8">Room for 8 adult</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="button1_wrapper">
                                          <button type="submit"
                                              class="btn-default btn-form1-submit">Search</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div> */}
                                             {/* <div id="tabs-3">
                          <form action="javascript:;" class="form1">
                              <div class="row">
                                  <div class="col-sm-4 col-md-2">
                                      <div class="select1_wrapper">
                                          <label>Country:</label>
                                          <div class="select1_inner">
                                              <select class="select2 select" style="width: 100%">
                                                  <option value="1">Please Select</option>
                                                  <option value="2">Alaska</option>
                                                  <option value="3">Bahamas</option>
                                                  <option value="4">Bermuda</option>
                                                  <option value="5">Canada</option>
                                                  <option value="6">Caribbean</option>
                                                  <option value="7">Europe</option>
                                                  <option value="8">Hawaii</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="select1_wrapper">
                                          <label>City:</label>
                                          <div class="select1_inner">
                                              <select class="select2 select" style="width: 100%">
                                                  <option value="1">Please Select</option>
                                                  <option value="2">Alaska</option>
                                                  <option value="3">Bahamas</option>
                                                  <option value="4">Bermuda</option>
                                                  <option value="5">Canada</option>
                                                  <option value="6">Caribbean</option>
                                                  <option value="7">Europe</option>
                                                  <option value="8">Hawaii</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="select1_wrapper">
                                          <label>Location:</label>
                                          <div class="select1_inner">
                                              <select class="select2 select" style="width: 100%">
                                                  <option value="1">Please Select</option>
                                                  <option value="2">Alaska</option>
                                                  <option value="3">Bahamas</option>
                                                  <option value="4">Bermuda</option>
                                                  <option value="5">Canada</option>
                                                  <option value="6">Caribbean</option>
                                                  <option value="7">Europe</option>
                                                  <option value="8">Hawaii</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="input1_wrapper">
                                          <label>Pick up Date:</label>
                                          <div class="input1_inner">
                                              <input type="text" class="input datepicker" value="Mm/Dd/Yy">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="input1_wrapper">
                                          <label>Drop off Date:</label>
                                          <div class="input1_inner">
                                              <input type="text" class="input datepicker" value="Mm/Dd/Yy">
                                          </div>
                                      </div>
                                  </div>


                                  <div class="col-sm-4 col-md-2">
                                      <div class="button1_wrapper">
                                          <button type="submit"
                                              class="btn-default btn-form1-submit">Search</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div> */}
                                             {/* <div id="tabs-4">
                          <form action="javascript:;" class="form1">
                              <div class="row">
                                  <div class="col-sm-4 col-md-2">
                                      <div class="select1_wrapper">
                                          <label>Sail To:</label>
                                          <div class="select1_inner">
                                              <select class="select2 select" style="width: 100%">
                                                  <option value="1">All destinations</option>
                                                  <option value="2">Alaska</option>
                                                  <option value="3">Bahamas</option>
                                                  <option value="4">Bermuda</option>
                                                  <option value="5">Canada</option>
                                                  <option value="6">Caribbean</option>
                                                  <option value="7">Europe</option>
                                                  <option value="8">Hawaii</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="select1_wrapper">
                                          <label>Sail From:</label>
                                          <div class="select1_inner">
                                              <select class="select2 select" style="width: 100%">
                                                  <option value="1">All ports</option>
                                                  <option value="2">Alaska</option>
                                                  <option value="3">Bahamas</option>
                                                  <option value="4">Bermuda</option>
                                                  <option value="5">Canada</option>
                                                  <option value="6">Caribbean</option>
                                                  <option value="7">Europe</option>
                                                  <option value="8">Hawaii</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="col-sm-4 col-md-2">
                                      <div class="input1_wrapper">
                                          <label>Start Date:</label>
                                          <div class="input1_inner">
                                              <input type="text" class="input datepicker" value="From any month">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="input1_wrapper">
                                          <label>End of Date:</label>
                                          <div class="input1_inner">
                                              <input type="text" class="input datepicker" value="To any month">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-sm-4 col-md-2">
                                      <div class="select1_wrapper">
                                          <label>Cruise Ship:</label>
                                          <div class="select1_inner">
                                              <select class="select2 select" style="width: 100%">
                                                  <option value="1">All Ships</option>
                                                  <option value="2">Alaska</option>
                                                  <option value="3">Bahamas</option>
                                                  <option value="4">Bermuda</option>
                                                  <option value="5">Canada</option>
                                                  <option value="6">Caribbean</option>
                                                  <option value="7">Europe</option>
                                                  <option value="8">Hawaii</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>


                                  <div class="col-sm-4 col-md-2">
                                      <div class="button1_wrapper">
                                          <button type="submit"
                                              class="btn-default btn-form1-submit">Search</button>
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div> */}
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div id="why1">
                         <div className="container">
                              <h2 className="animated">WHY WE ARE THE BEST</h2>
                              <div className="title1 animated">
                                   Welcome to our revolutionary new booking site that is dedicated
                                   to serving the needs of religious travelers. We're not your
                                   average travel provider - we're partnering with major religious
                                   organizations to offer their members a specialized and
                                   personalized booking experience. <br />
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
                                                            <div className="txt1">
                                                                 Amazing Travel
                                                            </div>
                                                            <div className="txt2">
                                                                 Exclusive partnership with major
                                                                 religious organizations, providing
                                                                 members with access to specialized
                                                                 accommodation and amenities
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
                                                                 A personalized booking experience
                                                                 that cater to the unique needs of
                                                                 religious travelers.
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
                                                            <div className="txt1">
                                                                 Book Your Trip
                                                            </div>
                                                            <div className="txt2">
                                                                 Affordable rate and exclusive deals
                                                                 for members of religious
                                                                 organizations, ensuring that our
                                                                 guests can travel with ease and
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
                                                                 A commitment to respect, and
                                                                 cultural sensitivity, creating a
                                                                 welcoming and save environment for
                                                                 all guest regardless of their
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
                    <div id="parallax1" className="parallax">
                         <div className="bg1 parallax-bg" />
                         <div className="overlay" />
                         <div className="parallax-content">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-sm-10 animated">
                                             <div className="txt1">Caucasus Vacation Packages</div>
                                             <div className="txt2">
                                                  Lorem ipsum dolor sit amet, consectetuer
                                                  adipiscing elit, sed diam nonummy nibh euismod
                                                  tincidunt ut laoreet dolore magna aliquam erat
                                                  volutpat. Ut wisi enim ad minim veniam, quis
                                                  nostrud exerci tation ullamcorper.
                                             </div>
                                             <div className="txt3">
                                                  From: Khazbegi (Goergia) <strong>$159.00</strong>
                                                  <span>person</span>
                                             </div>
                                        </div>
                                        <div className="col-sm-2">
                                             <a href="#" className="btn-default btn0">
                                                  Details
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div id="popular_cruises1">
                         <div className="container">
                              <h2 className="animated">POPULAR CRUISES</h2>
                              <div className="title1 animated">
                                   Welcome to our revolutionary new booking site that is dedicated
                                   to serving the needs of religious travelers. We're not your
                                   average travel provider - we're partnering with major religious
                                   organizations to offer their members a specialized and
                                   personalized booking experience. <br />
                                   Our team understand and value your faith
                              </div>
                              <br />
                              <br />
                              <div
                                   id="popular_wrapper"
                                   className="animated"
                                   data-animation="fadeIn"
                                   data-animation-delay={300}
                              >
                                   <div id="popular_inner">
                                        <div className="">
                                             <div id="popular">
                                                  <div className="">
                                                       <div className="carousel-box">
                                                            <div className="inner">
                                                                 <div className="carousel main">
                                                                      <ul>
                                                                           <li>
                                                                                <div className="popular">
                                                                                     <div className="popular_inner">
                                                                                          <figure>
                                                                                               <img
                                                                                                    src="http://placehold.it/370x232"
                                                                                                    alt=""
                                                                                                    className="img-responsive"
                                                                                               />
                                                                                               <div className="over">
                                                                                                    <div className="v1">
                                                                                                         Bahamas{" "}
                                                                                                         <span>
                                                                                                              17
                                                                                                              Deal
                                                                                                              Offers
                                                                                                         </span>
                                                                                                    </div>
                                                                                                    <div className="v2">
                                                                                                         Lorem
                                                                                                         ipsum
                                                                                                         dolor
                                                                                                         sit
                                                                                                         amet,
                                                                                                         concateus.
                                                                                                    </div>
                                                                                               </div>
                                                                                          </figure>
                                                                                          <div className="caption">
                                                                                               <div className="txt1">
                                                                                                    <span>
                                                                                                         Bahamas
                                                                                                    </span>{" "}
                                                                                                    7
                                                                                                    Night
                                                                                                    Tour
                                                                                               </div>
                                                                                               <div className="txt2">
                                                                                                    Nam
                                                                                                    liber
                                                                                                    tempor
                                                                                                    cum
                                                                                                    soluta
                                                                                                    nobis
                                                                                                    eleifend
                                                                                                    option
                                                                                                    congue
                                                                                                    nihil
                                                                                                    imperdiet
                                                                                                    doming.
                                                                                               </div>
                                                                                               <div className="txt3 clearfix">
                                                                                                    <div className="left_side">
                                                                                                         <div className="stars1">
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star2
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                         </div>
                                                                                                         <div className="nums">
                                                                                                              -
                                                                                                              18
                                                                                                              Reviews
                                                                                                         </div>
                                                                                                    </div>
                                                                                                    <div className="right_side">
                                                                                                         <a
                                                                                                              href="#"
                                                                                                              className="btn-default btn1"
                                                                                                         >
                                                                                                              See
                                                                                                              All
                                                                                                         </a>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="popular">
                                                                                     <div className="popular_inner">
                                                                                          <figure>
                                                                                               <img
                                                                                                    src="http://placehold.it/370x232"
                                                                                                    alt=""
                                                                                                    className="img-responsive"
                                                                                               />
                                                                                               <div className="over">
                                                                                                    <div className="v1">
                                                                                                         Mediterranean
                                                                                                         <span>
                                                                                                              17
                                                                                                              Deal
                                                                                                              Offers
                                                                                                         </span>
                                                                                                    </div>
                                                                                                    <div className="v2">
                                                                                                         Lorem
                                                                                                         ipsum
                                                                                                         dolor
                                                                                                         sit
                                                                                                         amet,
                                                                                                         concateus.
                                                                                                    </div>
                                                                                               </div>
                                                                                          </figure>
                                                                                          <div className="caption">
                                                                                               <div className="txt1">
                                                                                                    <span>
                                                                                                         Mediterranean
                                                                                                    </span>{" "}
                                                                                                    18
                                                                                                    Night
                                                                                                    Tour
                                                                                               </div>
                                                                                               <div className="txt2">
                                                                                                    Nam
                                                                                                    liber
                                                                                                    tempor
                                                                                                    cum
                                                                                                    soluta
                                                                                                    nobis
                                                                                                    eleifend
                                                                                                    option
                                                                                                    congue
                                                                                                    nihil
                                                                                                    imperdiet
                                                                                                    doming.
                                                                                               </div>
                                                                                               <div className="txt3 clearfix">
                                                                                                    <div className="left_side">
                                                                                                         <div className="stars1">
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                         </div>
                                                                                                         <div className="nums">
                                                                                                              -
                                                                                                              168
                                                                                                              Reviews
                                                                                                         </div>
                                                                                                    </div>
                                                                                                    <div className="right_side">
                                                                                                         <a
                                                                                                              href="#"
                                                                                                              className="btn-default btn1"
                                                                                                         >
                                                                                                              See
                                                                                                              All
                                                                                                         </a>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="popular">
                                                                                     <div className="popular_inner">
                                                                                          <figure>
                                                                                               <img
                                                                                                    src="http://placehold.it/370x232"
                                                                                                    alt=""
                                                                                                    className="img-responsive"
                                                                                               />
                                                                                               <div className="over">
                                                                                                    <div className="v1">
                                                                                                         Greece{" "}
                                                                                                         <span>
                                                                                                              17
                                                                                                              Deal
                                                                                                              Offers
                                                                                                         </span>
                                                                                                    </div>
                                                                                                    <div className="v2">
                                                                                                         Lorem
                                                                                                         ipsum
                                                                                                         dolor
                                                                                                         sit
                                                                                                         amet,
                                                                                                         concateus.
                                                                                                    </div>
                                                                                               </div>
                                                                                          </figure>
                                                                                          <div className="caption">
                                                                                               <div className="txt1">
                                                                                                    <span>
                                                                                                         Greece
                                                                                                    </span>{" "}
                                                                                                    6
                                                                                                    Night
                                                                                                    Tour
                                                                                               </div>
                                                                                               <div className="txt2">
                                                                                                    Nam
                                                                                                    liber
                                                                                                    tempor
                                                                                                    cum
                                                                                                    soluta
                                                                                                    nobis
                                                                                                    eleifend
                                                                                                    option
                                                                                                    congue
                                                                                                    nihil
                                                                                                    imperdiet
                                                                                                    doming.
                                                                                               </div>
                                                                                               <div className="txt3 clearfix">
                                                                                                    <div className="left_side">
                                                                                                         <div className="stars1">
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star2
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                         </div>
                                                                                                         <div className="nums">
                                                                                                              -
                                                                                                              16
                                                                                                              Reviews
                                                                                                         </div>
                                                                                                    </div>
                                                                                                    <div className="right_side">
                                                                                                         <a
                                                                                                              href="#"
                                                                                                              className="btn-default btn1"
                                                                                                         >
                                                                                                              See
                                                                                                              All
                                                                                                         </a>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="popular">
                                                                                     <div className="popular_inner">
                                                                                          <figure>
                                                                                               <img
                                                                                                    src="http://placehold.it/370x232"
                                                                                                    alt=""
                                                                                                    className="img-responsive"
                                                                                               />
                                                                                               <div className="over">
                                                                                                    <div className="v1">
                                                                                                         Bahamas{" "}
                                                                                                         <span>
                                                                                                              17
                                                                                                              Deal
                                                                                                              Offers
                                                                                                         </span>
                                                                                                    </div>
                                                                                                    <div className="v2">
                                                                                                         Lorem
                                                                                                         ipsum
                                                                                                         dolor
                                                                                                         sit
                                                                                                         amet,
                                                                                                         concateus.
                                                                                                    </div>
                                                                                               </div>
                                                                                          </figure>
                                                                                          <div className="caption">
                                                                                               <div className="txt1">
                                                                                                    <span>
                                                                                                         Bahamas
                                                                                                    </span>{" "}
                                                                                                    7
                                                                                                    Night
                                                                                                    Tour
                                                                                               </div>
                                                                                               <div className="txt2">
                                                                                                    Nam
                                                                                                    liber
                                                                                                    tempor
                                                                                                    cum
                                                                                                    soluta
                                                                                                    nobis
                                                                                                    eleifend
                                                                                                    option
                                                                                                    congue
                                                                                                    nihil
                                                                                                    imperdiet
                                                                                                    doming.
                                                                                               </div>
                                                                                               <div className="txt3 clearfix">
                                                                                                    <div className="left_side">
                                                                                                         <div className="stars1">
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star2
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                         </div>
                                                                                                         <div className="nums">
                                                                                                              -
                                                                                                              18
                                                                                                              Reviews
                                                                                                         </div>
                                                                                                    </div>
                                                                                                    <div className="right_side">
                                                                                                         <a
                                                                                                              href="#"
                                                                                                              className="btn-default btn1"
                                                                                                         >
                                                                                                              See
                                                                                                              All
                                                                                                         </a>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="popular">
                                                                                     <div className="popular_inner">
                                                                                          <figure>
                                                                                               <img
                                                                                                    src="http://placehold.it/370x232"
                                                                                                    alt=""
                                                                                                    className="img-responsive"
                                                                                               />
                                                                                               <div className="over">
                                                                                                    <div className="v1">
                                                                                                         Mediterranean
                                                                                                         <span>
                                                                                                              17
                                                                                                              Deal
                                                                                                              Offers
                                                                                                         </span>
                                                                                                    </div>
                                                                                                    <div className="v2">
                                                                                                         Lorem
                                                                                                         ipsum
                                                                                                         dolor
                                                                                                         sit
                                                                                                         amet,
                                                                                                         concateus.
                                                                                                    </div>
                                                                                               </div>
                                                                                          </figure>
                                                                                          <div className="caption">
                                                                                               <div className="txt1">
                                                                                                    <span>
                                                                                                         Mediterranean
                                                                                                    </span>{" "}
                                                                                                    18
                                                                                                    Night
                                                                                                    Tour
                                                                                               </div>
                                                                                               <div className="txt2">
                                                                                                    Nam
                                                                                                    liber
                                                                                                    tempor
                                                                                                    cum
                                                                                                    soluta
                                                                                                    nobis
                                                                                                    eleifend
                                                                                                    option
                                                                                                    congue
                                                                                                    nihil
                                                                                                    imperdiet
                                                                                                    doming.
                                                                                               </div>
                                                                                               <div className="txt3 clearfix">
                                                                                                    <div className="left_side">
                                                                                                         <div className="stars1">
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                         </div>
                                                                                                         <div className="nums">
                                                                                                              -
                                                                                                              168
                                                                                                              Reviews
                                                                                                         </div>
                                                                                                    </div>
                                                                                                    <div className="right_side">
                                                                                                         <a
                                                                                                              href="#"
                                                                                                              className="btn-default btn1"
                                                                                                         >
                                                                                                              See
                                                                                                              All
                                                                                                         </a>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="popular">
                                                                                     <div className="popular_inner">
                                                                                          <figure>
                                                                                               <img
                                                                                                    src="http://placehold.it/370x232"
                                                                                                    alt=""
                                                                                                    className="img-responsive"
                                                                                               />
                                                                                               <div className="over">
                                                                                                    <div className="v1">
                                                                                                         Greece{" "}
                                                                                                         <span>
                                                                                                              17
                                                                                                              Deal
                                                                                                              Offers
                                                                                                         </span>
                                                                                                    </div>
                                                                                                    <div className="v2">
                                                                                                         Lorem
                                                                                                         ipsum
                                                                                                         dolor
                                                                                                         sit
                                                                                                         amet,
                                                                                                         concateus.
                                                                                                    </div>
                                                                                               </div>
                                                                                          </figure>
                                                                                          <div className="caption">
                                                                                               <div className="txt1">
                                                                                                    <span>
                                                                                                         Greece
                                                                                                    </span>{" "}
                                                                                                    6
                                                                                                    Night
                                                                                                    Tour
                                                                                               </div>
                                                                                               <div className="txt2">
                                                                                                    Nam
                                                                                                    liber
                                                                                                    tempor
                                                                                                    cum
                                                                                                    soluta
                                                                                                    nobis
                                                                                                    eleifend
                                                                                                    option
                                                                                                    congue
                                                                                                    nihil
                                                                                                    imperdiet
                                                                                                    doming.
                                                                                               </div>
                                                                                               <div className="txt3 clearfix">
                                                                                                    <div className="left_side">
                                                                                                         <div className="stars1">
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star1
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                              <Image
                                                                                                                   src={
                                                                                                                        star2
                                                                                                                   }
                                                                                                                   alt=""
                                                                                                              />
                                                                                                         </div>
                                                                                                         <div className="nums">
                                                                                                              -
                                                                                                              16
                                                                                                              Reviews
                                                                                                         </div>
                                                                                                    </div>
                                                                                                    <div className="right_side">
                                                                                                         <a
                                                                                                              href="#"
                                                                                                              className="btn-default btn1"
                                                                                                         >
                                                                                                              See
                                                                                                              All
                                                                                                         </a>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="popular_pagination" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
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
                                                  Lorem ipsum dolor sit amet, consectetuer
                                                  adipiscing elit, set amet.
                                             </div>
                                             <div
                                                  className="txt3 animated"
                                                  data-animation="fadeIn"
                                                  data-animation-delay={200}
                                             >
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetuer
                                                       adipiscing elit, sed diam nonummy nibh oui-
                                                       sod tincidunt ut laoreet dolore magna aliquam
                                                       erat volutpat. Ut wisi enim ad minim veniam,
                                                       quis nostrud exerci tation ullamcorper
                                                       suscipit dolore magna aliquam erat voutpat.
                                                       Ut wisi enim ad minim veniam, quis nostrud
                                                       exerci tation ullamcorper suscipit..
                                                  </p>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetuer
                                                       adipiscing elit, sed diam nonummy nibh euisod
                                                       tincidunt ut laoreet dolore magna aliquam
                                                       erat volutpat. Ut wisi enim ad minim veniam,
                                                       quis nostrud exerci tation ullamcorper
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
                                        <Image
                                             src={people}
                                             alt=""
                                             className="img1 img-responsive"
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div id="partners">
                         <div className="container">
                              <div className="row">
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
                              </div>
                         </div>
                    </div>
                    <div className="bot1_wrapper">
                         <div className="container">
                              <div className="row">
                                   <div className="col-sm-3">
                                        <div className="logo2_wrapper">
                                             <a href="index.html" className="logo2">
                                                  <Image
                                                       src={logo}
                                                       alt=""
                                                       className="img-responsive"
                                                  />
                                             </a>
                                        </div>
                                        <p>
                                             Welcome to our revolutionary new booking site that is
                                             dedicated to serving the needs of religious travelers.
                                             We're not your average travel provider - we're
                                             partnering with major religious organizations to offer
                                             their members a specialized and personalized booking
                                             experience. <br />
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
                                                            defaultValue="Email Address"
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
                                   Copyright © 2017 <strong>eZBooking</strong> <span>|</span>{" "}
                                   <a href="#">Privacy Policy</a>
                                   <span>|</span>
                                   <a href="#">About Us</a> <span>|</span> <a href="#">FAQ</a>{" "}
                                   <span>|</span> <a href="#">Contact Support</a>
                              </div>
                         </div>
                    </div>
               </div>
               {/* </body> */}
          </div>
     );
}
