import React, { useEffect } from "react";
import { Breadcumbs } from "../../components/Breadcumbs/Breadcumbs";
import { useSetRouteName } from "../../redux/appState/hooks";

const paths = [{ name: "Home", url: "/" }, { name: "Checkout", url: "/" }, { name: "Flight" }];

const flight = () => {
     const setRoute = useSetRouteName();

     useEffect(() => {
          setRoute("pages");
     }, []);

     return (
          <div className="not-front page-post">
               <div id="main">
                    <Breadcumbs paths={paths} />
                    <div id="content">
                         <div className="container">
                              <div className="row">
                                   <div className="col-sm-12">
                                        <h3 className="text-center hch2">
                                             Prague To New-York {"(Round-trip)"}
                                        </h3>
                                        <div className="clearfix" />
                                        <p className="address text-center">
                                             {" Vaclav Havel (PRG) / John F. Kennedy Intl. (JFK)"}
                                        </p>
                                        <div className="clearfix" />
                                        <div className="col-md-4 booking-row">
                                             <h3 className="line">TRAVELLER INFORMATION</h3>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       First Name
                                                  </label>
                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Michael"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Last Name
                                                  </label>
                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Berkovich"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Your Email
                                                  </label>
                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="email"
                                                            className="form-control"
                                                            defaultValue="your@email.com"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="margin-top" />
                                             <h3>CREDIT CARD INFORMATION</h3>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Name on Card
                                                  </label>
                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Michael Berkovich"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Card Number
                                                  </label>
                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="0123 4567 8901 2345"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="select1_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "15px",
                                                       }}
                                                  >
                                                       Expiration Date
                                                  </label>
                                                  <div
                                                       className="select1_inner col-md-3"
                                                       style={{
                                                            marginTop: "12px",
                                                            paddingRight: 0,
                                                            paddingLeft: 0,
                                                            width: "20%",
                                                            display: "inline-block",
                                                       }}
                                                  >
                                                       <select
                                                            className="select2 select select3"
                                                            style={{ width: "100%" }}
                                                       >
                                                            <option value="01">01</option>
                                                            <option value="02">02</option>
                                                            <option value="03">03</option>
                                                            <option value="04">04</option>
                                                            <option value="05">05</option>
                                                            <option value="06">06</option>
                                                            <option value="07">07</option>
                                                            <option value="08">08</option>
                                                            <option value="09">09</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                       </select>
                                                  </div>
                                                  <div
                                                       className="select1_inner col-md-3"
                                                       style={{
                                                            marginTop: "12px",
                                                            marginLeft: "10px",
                                                            paddingRight: 0,
                                                            paddingLeft: 0,
                                                            width: "20%",
                                                            display: "inline-block",
                                                       }}
                                                  >
                                                       <select
                                                            className="select2 select select3"
                                                            style={{ width: "100%" }}
                                                       >
                                                            <option value={2017}>2017</option>
                                                            <option value={2018}>2018</option>
                                                            <option value={2019}>2019</option>
                                                            <option value={2020}>2020</option>
                                                            <option value={2021}>2021</option>
                                                            <option value={2022}>2022</option>
                                                       </select>
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Security Code
                                                  </label>
                                                  <div
                                                       className="col-md-3"
                                                       style={{
                                                            paddingRight: 0,
                                                            paddingLeft: 0,
                                                            width: "20%",
                                                       }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="margin-top" />
                                             <h3>BILLING ADDRESS</h3>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Country
                                                  </label>
                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       City
                                                  </label>
                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-5"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Address
                                                  </label>
                                                  <div
                                                       className="col-md-7"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <input
                                                            type="text"
                                                            className="form-control"
                                                            spellCheck="false"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                        </div>
                                        <div className="col-md-4" />
                                        <div className="col-md-4 booking-row">
                                             <h3 className="line">FLIGHTS SUMMARY / 1 Stop(AMS)</h3>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Flying from:
                                                  </label>
                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">Prague</span>
                                                       <br />
                                                       Vaclav Havel (PRG)
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       To:
                                                  </label>
                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">New-York</span>
                                                       <br />
                                                       John F.Kennedy lntl. (JFK)
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Departing:
                                                  </label>
                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">20 - Apr - 2017</span>
                                                       <ul>
                                                            <li>2:25pm (PRG)</li>
                                                            <li>7:25pm (JFK)</li>
                                                       </ul>
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Returning:
                                                  </label>
                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">20 - May - 2017</span>
                                                       <ul>
                                                            <li>4:20pm (JFK)</li>
                                                            <li>8:50pm (PRG)</li>
                                                       </ul>
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="margin-top" />
                                             <h3>CHARGES</h3>
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Cabin:
                                                  </label>
                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">Economy</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       Fees
                                                  </label>
                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">Included</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "12px",
                                                       }}
                                                  >
                                                       TOTAL
                                                  </label>
                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span className="red">$680</span>
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div
                                                  className="margin-top"
                                                  style={{ marginTop: "40px" }}
                                             />
                                             <div className="border-3px" />
                                             <div className="clearfix" />
                                             <div className="margin-top" />
                                             <h3>ACCEPT AND CONFIRM</h3>
                                             <input type="checkbox" />{" "}
                                             <b style={{ color: "#464646", paddingLeft: "10px" }}>
                                                  I agree to the booking conditions
                                             </b>
                                             <div className="margin-top" />
                                             <div className="clearfix" />
                                             <div className="input2_wrapper">
                                                  <label
                                                       className="col-md-6"
                                                       style={{
                                                            paddingLeft: 0,
                                                            paddingTop: "18px",
                                                            fontSize: "16px",
                                                       }}
                                                  >
                                                       GRAND TOTAL:
                                                  </label>
                                                  <div
                                                       className="col-md-6"
                                                       style={{ paddingRight: 0, paddingLeft: 0 }}
                                                  >
                                                       <span
                                                            className="red"
                                                            style={{ fontSize: "30px" }}
                                                       >
                                                            $680.00
                                                       </span>
                                                  </div>
                                             </div>
                                             <div className="clearfix" />
                                             <div className="margin-top" />
                                             <a
                                                  href="booking-success.html"
                                                  className="btn btn-default btn-cf-submit3"
                                             >
                                                  BOOKING NOW
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default flight;
