import React from 'react'

export const LeaveComment = () => {
  return (
       <div className="live-comment">
            <div className="live-comment-title">Leave a Comment</div>
            <div className="live-comment-form">
                 <div id="note3" />
                 <div id="fields3">
                      <form
                           id="ajax-contact-form3"
                           className="form-horizontal"
                           action="javascript:;"
                      >
                           <div className="row">
                                <div className="col-sm-4">
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
                                                         event.target.value = "Full Name";
                                               }}
                                               onFocus={(event) => {
                                                    if (event.target.value === "Full Name")
                                                         event.target.value = "";
                                               }}
                                          />
                                     </div>
                                </div>
                                <div className="col-sm-4">
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
                                                         event.target.value = "E-mail address";
                                               }}
                                               onFocus={(event) => {
                                                    if (event.target.value === "E-mail address")
                                                         event.target.value = "";
                                               }}
                                          />
                                     </div>
                                </div>
                                <div className="col-sm-4">
                                     <div className="form-group">
                                          <label htmlFor="inputEmail">Website</label>
                                          <input
                                               type="text"
                                               className="form-control"
                                               id="inputEmail"
                                               name="email"
                                               defaultValue="Website"
                                               onBlur={(event) => {
                                                    if (event.target.value === "")
                                                         event.target.value = "Website";
                                               }}
                                               onFocus={(event) => {
                                                    if (event.target.value === "Website")
                                                         event.target.value = "";
                                               }}
                                          />
                                     </div>
                                </div>
                           </div>
                           <div className="row">
                                <div className="col-sm-12">
                                     <div className="form-group">
                                          <label htmlFor="inputMessage">Your Message</label>
                                          <textarea
                                               className="form-control"
                                               rows={9}
                                               id="inputMessage"
                                               name="content"
                                               onBlur={(event) => {
                                                    if (event.target.value === "")
                                                         event.target.value = "Message";
                                               }}
                                               onFocus={(event) => {
                                                    if (event.target.value === "Message")
                                                         event.target.value = "";
                                               }}
                                               defaultValue={"Message"}
                                          />
                                     </div>
                                </div>
                           </div>
                           <button type="submit" className="btn-default btn-cf-submit3">
                                Send Comment
                           </button>
                      </form>
                 </div>
            </div>
       </div>
  );
}
