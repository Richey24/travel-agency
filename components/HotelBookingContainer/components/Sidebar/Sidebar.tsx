import React from 'react'
import { StarCount } from '../../../StarCount/StarCount';

export const Sidebar = () => {
  return (
       <div className="sidebar-block">
            <form action="javascript;">
                 <h3>SHERATON HOTEL</h3>
                 <span className="star-rating-left">
                      <StarCount rateCount={5} />
                 </span>

                 <span className="location">Prague, Czech</span>
                 <div className="clearfix" />
                 <div style={{ marginTop: "10px" }} />
                 <div className="col-sm-12 no-padding margin-top">
                      <div className="input1_wrapper">
                           <label>Check-In:</label>
                           <div className="input1_inner">
                                <input
                                     type="text"
                                     className="input"
                                     defaultValue="16/07/2014"
                                     disabled
                                />
                           </div>
                      </div>
                 </div>
                 <div className="clearfix" />
                 <div className="col-sm-12 no-padding margin-top">
                      <div className="input1_wrapper">
                           <label>Check-Out:</label>
                           <div className="input1_inner">
                                <input
                                     type="text"
                                     className="input"
                                     defaultValue="26/07/2014"
                                     disabled
                                />
                           </div>
                      </div>
                 </div>
                 <div className="clearfix" />
                 <span className="nights">10-night stay</span>
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
                                Rooms:
                           </label>
                           <div
                                className="input2_inner col-md-6"
                                style={{ paddingRight: 0, paddingLeft: 0 }}
                           >
                                <input type="text" className="input" defaultValue={1} disabled />
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
                                <input type="text" className="input" defaultValue={2} disabled />
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
                                <input type="text" className="input" defaultValue={0} disabled />
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
                                Price:
                           </label>
                           <div
                                className="col-md-6 price-left"
                                style={{ paddingRight: 0, paddingLeft: 0 }}
                           >
                                <span className="red">$150</span>/
                                <span className="blue">night</span>
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
                                <span className="red">$1500</span>
                           </div>
                      </div>
                 </div>
                 <div className="clearfix" />
                 <div className="no-padding margin-top text-center" style={{ marginTop: "30px" }}>
                      <a
                           href="booking-hotel-page.html"
                           className="btn btn-default btn-cf-submit3"
                           style={{ width: "100%" }}
                      >
                           RESERVE NOW
                      </a>
                 </div>
                 <div className="clearfix" />
            </form>
       </div>
  );
}
