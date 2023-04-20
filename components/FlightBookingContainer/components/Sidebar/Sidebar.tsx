import React from "react";

export const Sidebar = () => {
     return (
          <div className="sidebar-block">
               <form action="javascript:void(0);">
                    <h3>Prague To New-York</h3>
                    <span className="similar">Round-trip</span>
                    <div className="col-sm-12 no-padding margin-top">
                         <div className="input1_wrapper">
                              <label>Flying from:</label>
                              <div className="input2_inner">
                                   <input
                                        type="text"
                                        className="input"
                                        defaultValue="Prague, Vaclav Havel "
                                   />
                              </div>
                         </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-12 no-padding margin-top">
                         <div className="input1_wrapper">
                              <label>To:</label>
                              <div className="input2_inner">
                                   <input
                                        type="text"
                                        className="input"
                                        defaultValue="New-York, John F. Kennedy Intl."
                                   />
                              </div>
                         </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-12 no-padding margin-top">
                         <div className="input1_wrapper">
                              <label>Departing:</label>
                              <div className="input1_inner">
                                   <input
                                        type="text"
                                        className="input datepicker"
                                        defaultValue="16/07/2014"
                                   />
                              </div>
                         </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-12 no-padding margin-top">
                         <div className="input1_wrapper">
                              <label>Returning:</label>
                              <div className="input1_inner">
                                   <input
                                        type="text"
                                        className="input datepicker"
                                        defaultValue="26/07/2014"
                                   />
                              </div>
                         </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-12 no-padding margin-top">
                         <div className="input2_wrapper">
                              <label
                                   className="col-md-6"
                                   style={{
                                        paddingLeft: 0,
                                        paddingTop: "12px",
                                   }}
                              >
                                   Adults:
                              </label>
                              <div
                                   className="input2_inner col-md-6"
                                   style={{ paddingRight: 0, paddingLeft: 0 }}
                              >
                                   <input type="text" className="form-control" defaultValue={2} />
                              </div>
                         </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-12 no-padding margin-top">
                         <div className="input1_wrapper">
                              <label
                                   className="col-md-6"
                                   style={{
                                        paddingLeft: 0,
                                        paddingTop: "12px",
                                   }}
                              >
                                   Children:
                              </label>
                              <div
                                   className="input2_inner col-md-6"
                                   style={{ paddingRight: 0, paddingLeft: 0 }}
                              >
                                   <input type="text" className="input" defaultValue={0} />
                              </div>
                         </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-12 no-padding margin-top">
                         <div className="select1_wrapper">
                              <label>Cabin:</label>
                              <div className="select1_inner">
                                   <select className="select2 select" style={{ width: "100%" }}>
                                        <option value={1}>Economy</option>
                                        <option value={2}>Premium Economy</option>
                                        <option value={3}>Business</option>
                                        <option value={4}>First</option>
                                   </select>
                              </div>
                         </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-sm-12 no-padding margin-top">
                         <div className="input1_wrapper">
                              <label
                                   className="col-md-6"
                                   style={{
                                        paddingLeft: 0,
                                        paddingTop: "12px",
                                        fontWeight: 500,
                                        color: "#464646",
                                        fontSize: "13px",
                                   }}
                              >
                                   Total Booking:
                              </label>
                              <div
                                   className="col-md-6 price-total-left"
                                   style={{ paddingRight: 0, paddingLeft: 0 }}
                              >
                                   <span className="red">$729</span>
                              </div>
                         </div>
                    </div>
                    <div className="clearfix" />
                    <div
                         className="no-padding margin-top text-center"
                         style={{ marginTop: "30px" }}
                    >
                         <a
                              href="booking-flights-page.html"
                              className="btn btn-default btn-cf-submit3"
                              style={{ width: "100%" }}
                         >
                              BOOKING NOW
                         </a>
                    </div>
                    <div className="clearfix" />
               </form>
          </div>
     );
};
