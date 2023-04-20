import React from "react";
import { StarCount } from "../StarCount/StarCount";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Qoute } from "../Qoute/Qoute";
import { LeaveComment } from "../LeaveComment/LeaveComment";
import { commentSection } from "./data";
import { CommentCard } from "../CommentCard/CommentCard";

export const HotelBookingContainer = () => {
     return (
          <div id="content">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-3">
                              <Sidebar />
                              <div className="clearfix" />
                              <div className="margin-top" />
                              <Qoute />
                         </div>
                         <div className="col-sm-9">
                              <div className="blog_content">
                                   <div className="post post-full">
                                        <h3 className="hch">SHERATON Prague</h3>
                                        <span className="star-rating">
                                             <StarCount rateCount={5} />
                                        </span>
                                        <div className="clearfix" />
                                        <p className="address">
                                             Na Strzi 32, Prague, 14000, Czech Republic
                                        </p>
                                        <div className="post-header">
                                             <div className="post-slide">
                                                  <div id="sl1">
                                                       <a className="sl1_prev" href="#" />
                                                       <a className="sl1_next" href="#" />
                                                       <div className="sl1_pagination" />
                                                       <div className="carousel-box">
                                                            <div className="inner">
                                                                 <div className="carousel main">
                                                                      <ul>
                                                                           <li>
                                                                                <div className="sl1">
                                                                                     <div className="sl1_inner">
                                                                                          <img
                                                                                               src="http://placehold.it/862x457"
                                                                                               alt=""
                                                                                               className="img-responsive"
                                                                                          />
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="sl1">
                                                                                     <div className="sl1_inner">
                                                                                          <img
                                                                                               src="http://placehold.it/862x457"
                                                                                               alt=""
                                                                                               className="img-responsive"
                                                                                          />
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="sl1">
                                                                                     <div className="sl1_inner">
                                                                                          <img
                                                                                               src="http://placehold.it/862x457"
                                                                                               alt=""
                                                                                               className="img-responsive"
                                                                                          />
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="sl1">
                                                                                     <div className="sl1_inner">
                                                                                          <img
                                                                                               src="http://placehold.it/862x457"
                                                                                               alt=""
                                                                                               className="img-responsive"
                                                                                          />
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                           <li>
                                                                                <div className="sl1">
                                                                                     <div className="sl1_inner">
                                                                                          <img
                                                                                               src="http://placehold.it/862x457"
                                                                                               alt=""
                                                                                               className="img-responsive"
                                                                                          />
                                                                                     </div>
                                                                                </div>
                                                                           </li>
                                                                      </ul>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="post-story">
                                             <div className="post-story-info margin-top">
                                                  <div className="date12">
                                                       Most Popular Facilities:
                                                  </div>
                                                  <div className="by">
                                                       <span className="option-booking">
                                                            <i className="free-wifi" />{" "}
                                                            <span>Free WIFI</span>
                                                            <i className="breakfast" />{" "}
                                                            <span>Breakfast included</span>
                                                            <i className="airport-shuttle" />{" "}
                                                            <span>Airport shuttle</span>
                                                            <i className="parking" />{" "}
                                                            <span>Parking</span>
                                                            <i className="no-smoking" />{" "}
                                                            <span>No smoking room</span>
                                                       </span>
                                                  </div>
                                             </div>
                                             <div className="post-story-body clearfix">
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetuer
                                                       adipiscing elit, sed diam nonummy nibh
                                                       euismod tincidunt ut laoreet dolore magna
                                                       aliquam erat volutpat. Ut wisi enim ad minim
                                                       veniam, quis nostrud exerci tation
                                                       ullamcorper suscipit lobortis nisl ut aliquip
                                                       ex ea commodo consequat. Duis autem vel eum
                                                       iriure dolor in hendrerit in vulputate velit
                                                       esse molestie consequat, vel illum dolore eu
                                                       feugiat nulla facilisis at vero eros et
                                                       accumsan et iusto odio dignissim qui blandit
                                                       praesent.
                                                  </p>
                                                  <p>
                                                       Nam liber tempor cum soluta nobis eleifend
                                                       option congue nihil imperdiet doming id quod
                                                       mazim placerat facer possim assum. Typi non
                                                       habent claritatem insitam; est usus legentis
                                                       in iis qui facit eorum claritatem.
                                                       Investigationes demonstraverunt lectores
                                                       legere me lius quod ii legunt saepius.
                                                       Claritas est etiam processus dynamicus, qui
                                                       sequitur mutationem consuetudium lectorum.
                                                       Mirum est notare quam littera gothica, quam
                                                       nunc putamus parum claram, anteposuerit
                                                       litterarum formas humanitatis per seacula
                                                       quarta decima et quinta decima. Eodem modo
                                                       typi, qui nunc nobis videntur parum clari,
                                                       fiant sollemnes in futurum. Nam liber tempor
                                                       cum soluta nobis eleifend option congue nihil
                                                       imperdiet doming id quod mazim placerat facer
                                                       possim assum. Typi non habent claritatem
                                                       insitam; est usus legentis in iis qui facit
                                                       eorum claritatem. Investigationes
                                                       demonstraverunt lectores legere me lius quod
                                                       ii legunt saepius. Claritas est etiam
                                                       processus dynamicus, qui sequitur mutationem
                                                       consuetudium lectorum. Mirum est notare quam
                                                       littera gothica, quam nunc putamus parum
                                                       claram, anteposuerit litterarum formas
                                                       humanitatis per seacula quarta decima et
                                                       quinta decima. Eodem modo typi, qui nunc
                                                       nobis videntur parum clari, fiant sollemnes
                                                       in futurum.
                                                  </p>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetuer
                                                       adipiscing elit, sed diam nonummy nibh
                                                       euismod tincidunt ut laoreet dolore magna
                                                       aliquam erat volutpat. Ut wisi enim ad minim
                                                       veniam, quis nostrud exerci tation
                                                       ullamcorper suscipit lobortis nisl ut aliquip
                                                       ex ea commodo consequat. Duis autem vel eum
                                                       iriure dolor in hendrerit in vulputate velit
                                                       esse molestie consequat, vel illum.
                                                  </p>
                                                  <p>
                                                       Nam liber tempor cum soluta nobis eleifend
                                                       option congue nihil imperdiet doming id quod
                                                       mazim placerat facer possim assum. Typi non
                                                       habent claritatem insitam; est usus legentis
                                                       in iis qui facit eorum claritatem.
                                                       Investigationes demonstraverunt lectores
                                                       legere me lius quod ii legunt saepius.
                                                       Claritas est etiam processus dynamicus, qui
                                                       sequitur mutationem consuetudium lectorum.
                                                       Mirum est notare quam littera gothica, quam
                                                       nunc putamus parum claram, anteposuerit
                                                       litterarum formas humanitatis per seacula
                                                       quarta decima et quinta decima. Eodem modo
                                                       typi, qui nunc nobis videntur parum clari,
                                                       fiant sollemnes in futurum.
                                                  </p>
                                             </div>
                                             <div className="post-story-tags clearfix">
                                                  <div className="tags_wrapper">
                                                       <b>Tags</b>: <a href="#">Travel</a>,{" "}
                                                       <a href="#">Flights</a>,{" "}
                                                       <a href="#">Early Booking</a>,{" "}
                                                       <a href="#">Cruises</a>
                                                  </div>
                                                  <div className="share_post clearfix">
                                                       <div className="txt1">Share Post:</div>
                                                       <div className="social4_wrapper">
                                                            <ul className="social4 clearfix">
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
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="num-comments">
                                        {commentSection?.length} Comments
                                   </div>
                                   {commentSection.map((comment, idx) => (
                                        <CommentCard {...comment} key={idx} />
                                   ))}

                                   <LeaveComment />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
