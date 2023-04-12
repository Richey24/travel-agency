import React from "react";

export const TopNav = () => {
     return (
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
                                   <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
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
     );
};
