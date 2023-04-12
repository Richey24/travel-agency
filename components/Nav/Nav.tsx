import React, { FC } from "react";
// import { useSelector } from "react-redux";
// import { RootStateProps } from "../../redux/types";
import { useNavStyles } from "./styles";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";

export const Nav: FC<any> = () => {
     const classes = useNavStyles();
     return (
          <div className={classes.root}>
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
                                                            <a href="left-blog.html">Left Blog</a>
                                                       </li>
                                                       <li>
                                                            <a href="post.html">Right Post</a>
                                                       </li>
                                                       <li>
                                                            <a href="left-post.html">Left Post</a>
                                                       </li>
                                                       <li>
                                                            <a href="full-post.html">Full Post</a>
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
          </div>
     );
};
