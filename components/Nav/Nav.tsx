import React, { FC } from "react";
// import { useSelector } from "react-redux";
// import { RootStateProps } from "../../redux/types";
import { useNavStyles } from "./styles";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";
import Link from "next/link";

export const Nav: FC<any> = () => {
     const classes = useNavStyles();
     return (
          <div className={classes.root}>
               <div className="top2_wrapper">
                    <div className="container">
                         <div className="top2 clearfix">
                              <header>
                                   <div className="logo_wrapper">
                                        <Link href="index.html" className="logo">
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
                                        </Link>
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
                                                  <Link href="/">Home</Link>
                                             </li>
                                             <li>
                                                  <Link href="/aboutus">About Us</Link>
                                             </li>
                                             <li>
                                                  <Link href="gallery.html">Gallery</Link>
                                             </li>
                                             <li className="sub-menu sub-menu-1">
                                                  <Link href="#">
                                                       Pages
                                                       <em />
                                                  </Link>
                                                  <ul>
                                                       <li>
                                                            <Link href="/booking/lists/flight">
                                                                 Flights
                                                            </Link>
                                                            <ul style={{ marginLeft: "-4px" }}>
                                                                 <li>
                                                                      <Link href="/search/flights">
                                                                           Search Flights
                                                                      </Link>
                                                                 </li>
                                                                 <li>
                                                                      <Link href="booking-flights.html">
                                                                           Booking Flights
                                                                      </Link>
                                                                 </li>
                                                                 <li>
                                                                      <Link href="booking-flights-page.html">
                                                                           Flights Checkout
                                                                      </Link>
                                                                 </li>
                                                            </ul>
                                                       </li>
                                                       <li>
                                                            <Link href="/booking/lists/hotel">
                                                                 Hotels
                                                            </Link>
                                                            <ul style={{ marginLeft: "-4px" }}>
                                                                 <li>
                                                                      <Link href="/search/hotels">
                                                                           Search Hotels
                                                                      </Link>
                                                                 </li>
                                                                 <li>
                                                                      <Link href="booking-hotel.html">
                                                                           Booking Hotel
                                                                      </Link>
                                                                 </li>
                                                                 <li>
                                                                      <Link href="booking-hotel-page.html">
                                                                           Hotel Reservation
                                                                      </Link>
                                                                 </li>
                                                            </ul>
                                                       </li>
                                                  </ul>
                                             </li>
                                             <li className="sub-menu sub-menu-1">
                                                  <Link href="#">
                                                       Blog
                                                       <em />
                                                  </Link>
                                                  <ul>
                                                       <li>
                                                            <Link href="blog.html">Right Blog</Link>
                                                       </li>
                                                       <li>
                                                            <Link href="left-blog.html">
                                                                 Left Blog
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="post.html">Right Post</Link>
                                                       </li>
                                                       <li>
                                                            <Link href="left-post.html">
                                                                 Left Post
                                                            </Link>
                                                       </li>
                                                       <li>
                                                            <Link href="full-post.html">
                                                                 Full Post
                                                            </Link>
                                                       </li>
                                                  </ul>
                                             </li>
                                             <li>
                                                  <Link href="contacts.html">Contacts</Link>
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
