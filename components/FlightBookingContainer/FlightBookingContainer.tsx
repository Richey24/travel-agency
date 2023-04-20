import React from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Qoute } from "../Qoute/Qoute";

export const FlightBookingContainer = () => {
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
                                        <h3 className="hch">Prague To New-York (Round-trip)</h3>
                                        <div className="clearfix" />
                                        <p className="address">
                                             Vaclav Havel (PRG) / John F. Kennedy Intl. (JFK)
                                        </p>
                                        <div className="post-story">
                                             <hr />
                                             <div className="post-story-body clearfix">
                                                  <h3>Apr 20, 2017</h3>
                                                  <ul>
                                                       <li>From: Vaclav Havel (PRG)</li>
                                                       <li>To: John F.Kennedy lntl. (JFK)</li>
                                                  </ul>
                                                  <h5>2:25pm (PRG) -&gt; 7:25pm (JFK)</h5>
                                                  <hr />
                                                  <h4>Details:</h4>
                                                  <h5>2:25pm -&gt; 4:00pm / 1h 35m</h5>
                                                  <ul>
                                                       <li>From Vaclav Havel (PRG)</li>
                                                       <li>To Schiphol (AMS)</li>
                                                       <li>KLM 1356</li>
                                                       <li>
                                                            BOEING 737-800 (WINGLETS) PASSENGER |
                                                            Snack
                                                       </li>
                                                       <li>Economy/Coach (L)</li>
                                                       <li>
                                                            <a href="">Preview availability</a>
                                                       </li>
                                                       <li>Total distance: 439 mi</li>
                                                       <li>
                                                            <b>1h 20m stop / in Amsterdam (AMS)</b>
                                                       </li>
                                                  </ul>
                                                  <h5>5:20pm -&gt; 7:25pm / 8h 5m</h5>
                                                  <ul>
                                                       <li>From: Schiphol (AMS)</li>
                                                       <li>To: John F. Kennedy Intl. (JFK)</li>
                                                       <li>KLM 643</li>
                                                       <li>BOEING 787-9 | Meal</li>
                                                       <li>Economy/Coach (R)</li>
                                                       <li>
                                                            <a href="">Preview availability</a>
                                                       </li>
                                                       <li>Total distance: 3,632 mi</li>
                                                  </ul>
                                                  <p>
                                                       BAG FEES: Baggage fees when purchased at the
                                                       airport (Prices may be cheaper if purchased
                                                       online with KLM){" "}
                                                  </p>
                                                  <ul>
                                                       <li>Carry on: No fee</li>
                                                       <li>1st checked bag: No fee up to 23 kg</li>
                                                       <li>2nd checked bag: $91.00 up to 23 kg</li>
                                                       <li>How to pay: KLM</li>
                                                  </ul>
                                                  <hr />
                                                  <h3>May 20, 2017</h3>
                                                  <ul>
                                                       <li>From: John F.Kennedy lntl. (JFK)</li>
                                                       <li>To: Vaclav Havel (PRG)</li>
                                                  </ul>
                                                  <h5>4:20pm (PRG) -&gt; 8:50pm (JFK)</h5>
                                                  <hr />
                                                  <h4>Details:</h4>
                                                  <h5>4:20pm -&gt; 5:45am / 7h 25m</h5>
                                                  <ul>
                                                       <li>From: John F. Kennedy Intl. (JFK)</li>
                                                       <li>To: Roissy-Charles de Gaulle (CDG)</li>
                                                       <li>Air France 23</li>
                                                       <li>BOEING 777-300ER | Breakfast | Meal</li>
                                                       <li>Economy/Coach (R)</li>
                                                       <li>
                                                            <a href="">Preview availability</a>
                                                       </li>
                                                       <li>Total distance: 3,629 mi</li>
                                                       <li>
                                                            <b>1h 25m stop / in Paris (CDG)</b>
                                                       </li>
                                                  </ul>
                                                  <h5>7:10am -&gt; 8:50am / 1h 40m</h5>
                                                  <ul>
                                                       <li>From: Roissy-Charles de Gaulle (CDG)</li>
                                                       <li>To: Vaclav Havel (PRG)</li>
                                                       <li>Air France 1382</li>
                                                       <li>Airbus A321 | Snack</li>
                                                       <li>Economy/Coach (L)</li>
                                                       <li>
                                                            <a href="">Preview availability</a>
                                                       </li>
                                                       <li>Total distance: 529 mi</li>
                                                  </ul>
                                                  <p>
                                                       BAG FEES: Baggage fees when purchased at the
                                                       airport (Prices may be cheaper if purchased
                                                       online with KLM){" "}
                                                  </p>
                                                  <ul>
                                                       <li>Carry on: No fee</li>
                                                       <li>1st checked bag: No fee up to 23 kg</li>
                                                       <li>2nd checked bag: $100.00 up to 23 kg</li>
                                                       <li>How to pay: Air France</li>
                                                  </ul>
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
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
