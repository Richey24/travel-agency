import React from 'react'

export const Sidebar = () => {
  return (
       <div className="sidebar-block">
            <form action="javascript:void(0);">
                 <div className="col-sm-12 no-padding">
                      <div className="input1_wrapper">
                           <label>City:</label>
                           <div className="input2_inner">
                                <input type="text" className="input" defaultValue="Prague" />
                           </div>
                      </div>
                 </div>
                 <div className="clearfix" />
                 <div className="col-sm-12 no-padding margin-top">
                      <div className="input1_wrapper">
                           <label>Check-In:</label>
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
                           <label>Check-Out:</label>
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
                                style={{
                                     paddingRight: 0,
                                     paddingLeft: 0,
                                }}
                           >
                                <input type="text" className="input" defaultValue={1} />
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
                                style={{
                                     paddingRight: 0,
                                     paddingLeft: 0,
                                }}
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
                                style={{
                                     paddingRight: 0,
                                     paddingLeft: 0,
                                }}
                           >
                                <input type="text" className="input" defaultValue={0} />
                           </div>
                      </div>
                 </div>
                 <div className="clearfix" />
                 <label
                      className="col-md-6"
                      style={{
                           paddingLeft: 0,
                           paddingTop: "12px",
                      }}
                 />
                 <div
                      className="no-padding margin-top col-md-6 text-right"
                      style={{ marginTop: "30px" }}
                 >
                      <button className="btn btn-default btn-cf-submit" style={{ width: "100%" }}>
                           SEARCH
                      </button>
                 </div>
                 <div className="clearfix" />
            </form>
       </div>
  );
}
