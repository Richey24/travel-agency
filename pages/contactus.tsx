import React from "react";
import { Pagebanner } from "../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../components/Breadcumbs/Breadcumbs";
const paths = [{ name: "home", url: "/" }, { name: "about" }];

const constactus = () => {
     return (
          <div className="not-front page-about">
               <div id="main">
                    <Pagebanner />
                    <Breadcumbs paths={paths} />
                    <div id="content">
                         <div className="container">
                              <div className="row">
                                   <div className="col-sm-6">
                                        <h3>CONTACT INFO</h3>
                                        <p>
                                             We are thrilled that you are interested in getting in
                                             touch with us! Please fill out the form with your
                                             contact details and a brief message, and we will get
                                             back to you as soon as possible. Thank you for reaching
                                             out to us. We look forward to hearing from you and will
                                             do our best to respond promptly to your inquiry.
                                        </p>
                                        <br />
                                        <h4>ADDRESS</h4>
                                        <p>
                                             P.O. Box 880515 San Diego, CA, USA
                                             <br />
                                             <a href="#">info@dreamtechlabs.net</a>
                                        </p>
                                        <h4>PHONE</h4>
                                        <p>
                                             858.384.6488
                                        </p>
                                        <div className="social3_wrapper">
                                             <ul className="social3 clearfix">
                                                  <li>
                                                       <a href="#">
                                                            <i className="fa fa-facebook-square" />
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="fa fa-twitter" />
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <i className="fa fa-dribbble" />
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
                                   </div>
                                   <div className="col-sm-6">
                                        <h3>CONTACT FORM</h3>
                                        <div id="note" />
                                        <div id="fields">
                                             <form
                                                  id="ajax-contact-form"
                                                  className="form-horizontal"
                                                  action="javascript:alert('success!');"
                                             >
                                                  <div className="form-group">
                                                       <label htmlFor="inputName">Your Name</label>
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inputName"
                                                            name="name"
                                                            defaultValue="Full Name"
                                                            onBlur={(event) => {
                                                                 if (event.target.value === "")
                                                                      event.target.value =
                                                                           "Full Name";
                                                            }}
                                                            onFocus={(event) => {
                                                                 if (
                                                                      event.target.value ===
                                                                      "Full Name"
                                                                 )
                                                                      event.target.value = "";
                                                            }}
                                                       />
                                                  </div>
                                                  <div className="form-group">
                                                       <label htmlFor="inputEmail">Email</label>
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inputEmail"
                                                            name="email"
                                                            defaultValue="E-mail address"
                                                            onBlur={(event) => {
                                                                 if (event.target.value === "")
                                                                      event.target.value =
                                                                           "E-mail address";
                                                            }}
                                                            onFocus={(event) => {
                                                                 if (
                                                                      event.target.value ===
                                                                      "E-mail address"
                                                                 )
                                                                      event.target.value = "";
                                                            }}
                                                       />
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-sm-12">
                                                            <div className="form-group">
                                                                 <label htmlFor="inputMessage">
                                                                      Your Message
                                                                 </label>
                                                                 <textarea
                                                                      className="form-control"
                                                                      rows={7}
                                                                      id="inputMessage"
                                                                      name="content"
                                                                      onBlur={(event) => {
                                                                           if (
                                                                                event.target
                                                                                     .value === ""
                                                                           )
                                                                                event.target.value =
                                                                                     "Message";
                                                                      }}
                                                                      onFocus={(event) => {
                                                                           if (
                                                                                event.target
                                                                                     .value ===
                                                                                "Message"
                                                                           )
                                                                                event.target.value =
                                                                                     "";
                                                                      }}
                                                                      defaultValue={"Message"}
                                                                 />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <button
                                                       type="submit"
                                                       className="btn-default btn-cf-submit"
                                                  >
                                                       send message
                                                  </button>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default constactus;
