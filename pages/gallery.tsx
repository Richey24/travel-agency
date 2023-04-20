import React, { useEffect } from "react";
import { Pagebanner } from "../components/PageBanner/Pagebanner";
import { useSetRouteName } from "../redux/appState/hooks";
import { Breadcumbs } from "../components/Breadcumbs/Breadcumbs";

const paths = [{ name: "home", url: "/" }, { name: "about" }];

const gallery = () => {
     const setRoute = useSetRouteName();

     useEffect(() => {
          setRoute("gallery");
     }, []);

     return (
          <div className="not-front page-gallery page-about">
               <div id="main">
                    <Pagebanner />
                    <Breadcumbs paths={paths} />
                    <div id="content">
                         <div className="container">
                              <div id="options" className="clearfix">
                                   <ul
                                        id="filters"
                                        className="pagination option-set clearfix"
                                        data-option-key="filter"
                                   >
                                        <li>
                                             <a
                                                  href="#filter"
                                                  data-option-value="*"
                                                  className="selected"
                                             >
                                                  All
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#filter" data-option-value=".isotope-filter1">
                                                  tours
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#filter" data-option-value=".isotope-filter2">
                                                  cruises
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#filter" data-option-value=".isotope-filter3">
                                                  hotels
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                              {/* #options */}
                              <div className="isotope-box">
                                   <div id="container" className="clearfix">
                                        <ul className="thumbnails clearfix" id="isotope-items">
                                             <div className="grid-sizer col-sm-4" />
                                             <div className="gutter-sizer" />
                                             <li className="element isotope-filter3 col-sm-4 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/570x350"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Big Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/370x250"
                                                                           alt=""
                                                                           title="Thumbnail"
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter1 isotope-filter2 col-sm-8 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/770x530"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/770x530"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter3 col-sm-4 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/370x250"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/370x250"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter1 col-sm-4 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/370x530"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/370x530"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter1 col-sm-4 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/370x250"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/370x250"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter3 isotope-filter2 col-sm-4 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/370x530"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/370x530"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter1 col-sm-4 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/370x250"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/370x250"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter2 col-sm-12 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/1168x530"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/1168x530"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter3 col-sm-4 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/370x250"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/370x250"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter5 col-sm-8 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/769x530"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/769x530"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </li>
                                             <li className="element isotope-filter1 isotope-filter3 col-sm-4 col-xs-12">
                                                  <div className="thumb-isotope">
                                                       <div className="thumbnail clearfix">
                                                            <a
                                                                 href="http://placehold.it/370x250"
                                                                 rel="prettyPhoto[mix]"
                                                                 title="Photo"
                                                            >
                                                                 <figure>
                                                                      <img
                                                                           src="http://placehold.it/370x250"
                                                                           alt=""
                                                                      />
                                                                      <em />
                                                                 </figure>
                                                                 <div className="caption">
                                                                      <div className="txt1">
                                                                           cannes, france
                                                                      </div>
                                                                      <div className="txt2">
                                                                           hotel carlton
                                                                      </div>
                                                                 </div>
                                                            </a>
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
     );
};

export default gallery;
