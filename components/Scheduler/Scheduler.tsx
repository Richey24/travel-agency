import React, { FC, useState } from "react";
import { useSchedulerStyles } from "./styles";
import CreatableSelect from "react-select/creatable";
import { Button } from "@mui/material";
import { SchedulerProps } from "./types";

const tabs = ["flights", "hotels"];
export const Scheduler: FC<SchedulerProps> = ({ initialTab, onClick }) => {
     const classes = useSchedulerStyles();
     const [currentTab, setTab] = useState(initialTab || 1);

     return (
          <>
               <div className="container">
                    <div className="tabs_wrapper tabs1_wrapper">
                         <div className="tabs tabs1">
                              {/* <div className={classes.tabContainer}>
                                   <div className={`${classes.tab}`}>Flights</div>
                                   <div className={`${classes.tab}`}>Hotel</div>
                              </div> */}
                              <div className="tabs_tabs tabs1_tabs">
                                   <ul>
                                        <li
                                             className={`${initialTab === 1 ? "active" : ""} ${
                                                  !initialTab ?? "active"
                                             } flights`}
                                        >
                                             <a href="#tabs-1" onClick={() => onClick?.("flights")}>
                                                  Flights
                                             </a>
                                        </li>
                                        <li
                                             className={`hotels ${
                                                  initialTab === 2 ? "active" : ""
                                             }`}
                                        >
                                             <a href="#tabs-2" onClick={() => onClick?.("hotels")}>
                                                  Hotels
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                              <div className="tabs_content tabs1_content">
                                   <div id="tabs-1">
                                        <form action="javascript:;" className="form1">
                                             <div className="row">
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="select1_wrapper">
                                                            <label>Flying from:</label>
                                                            <div className="select1_inner">
                                                                 <select
                                                                      className="select2 select"
                                                                      style={{
                                                                           width: "100%",
                                                                      }}
                                                                 >
                                                                      <option value={1}>
                                                                           City or Airport
                                                                      </option>
                                                                      <option value={2}>
                                                                           Alaska
                                                                      </option>
                                                                      <option value={3}>
                                                                           Bahamas
                                                                      </option>
                                                                      <option value={4}>
                                                                           Bermuda
                                                                      </option>
                                                                      <option value={5}>
                                                                           Canada
                                                                      </option>
                                                                      <option value={6}>
                                                                           Caribbean
                                                                      </option>
                                                                      <option value={7}>
                                                                           Europe
                                                                      </option>
                                                                      <option value={8}>
                                                                           Hawaii
                                                                      </option>
                                                                 </select>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="select1_wrapper">
                                                            <label>To:</label>
                                                            <div className="select1_inner">
                                                                 <select
                                                                      className="select2 select"
                                                                      style={{
                                                                           width: "100%",
                                                                      }}
                                                                 >
                                                                      <option value={1}>
                                                                           City or Airport
                                                                      </option>
                                                                      <option value={2}>
                                                                           Alaska
                                                                      </option>
                                                                      <option value={3}>
                                                                           Bahamas
                                                                      </option>
                                                                      <option value={4}>
                                                                           Bermuda
                                                                      </option>
                                                                      <option value={5}>
                                                                           Canada
                                                                      </option>
                                                                      <option value={6}>
                                                                           Caribbean
                                                                      </option>
                                                                      <option value={7}>
                                                                           Europe
                                                                      </option>
                                                                      <option value={8}>
                                                                           Hawaii
                                                                      </option>
                                                                 </select>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="input1_wrapper">
                                                            <label>Departing:</label>
                                                            <div className="input1_inner">
                                                                 <input
                                                                      type="text"
                                                                      className="input datepicker"
                                                                      defaultValue="Mm/Dd/Yy"
                                                                 />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="input1_wrapper">
                                                            <label>Returning:</label>
                                                            <div className="input1_inner">
                                                                 <input
                                                                      type="text"
                                                                      className="input datepicker"
                                                                      defaultValue="Mm/Dd/Yy"
                                                                 />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-1">
                                                       <div className="select1_wrapper">
                                                            <label>Adult:</label>
                                                            <div className="select1_inner">
                                                                 <select
                                                                      className="select2 select select3"
                                                                      style={{
                                                                           width: "100%",
                                                                      }}
                                                                 >
                                                                      <option value={1}>1</option>
                                                                      <option value={2}>2</option>
                                                                      <option value={3}>3</option>
                                                                      <option value={4}>4</option>
                                                                      <option value={5}>5</option>
                                                                      <option value={6}>6</option>
                                                                      <option value={7}>7</option>
                                                                      <option value={8}>8</option>
                                                                 </select>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-1">
                                                       <div className="select1_wrapper">
                                                            <label>Child:</label>
                                                            <div className="select1_inner">
                                                                 <select
                                                                      className="select2 select select3"
                                                                      style={{
                                                                           width: "100%",
                                                                      }}
                                                                 >
                                                                      <option value={1}>1</option>
                                                                      <option value={2}>2</option>
                                                                      <option value={3}>3</option>
                                                                      <option value={4}>4</option>
                                                                      <option value={5}>5</option>
                                                                      <option value={6}>6</option>
                                                                      <option value={7}>7</option>
                                                                      <option value={8}>8</option>
                                                                 </select>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="button1_wrapper">
                                                            <button
                                                                 type="submit"
                                                                 className="btn-default btn-form1-submit"
                                                            >
                                                                 Search
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                                   <div id="tabs-2">
                                        <form action="javascript:;" className="form1">
                                             <div className="row">
                                                  <div className="col-sm-4 col-md-4">
                                                       <div className="select1_wrapper">
                                                            <label>City or Hotel Name:</label>
                                                            <div className="select1_inner">
                                                                 <select
                                                                      className="select2 select"
                                                                      style={{ width: "100%" }}
                                                                 >
                                                                      <option value="1">
                                                                           Enter a destination or
                                                                           hotel name
                                                                      </option>
                                                                      <option value="2">
                                                                           Lorem ipsum dolor sit
                                                                           amet
                                                                      </option>
                                                                      <option value="3">
                                                                           Duis autem vel eum
                                                                      </option>
                                                                      <option value="4">
                                                                           Ut wisi enim ad minim
                                                                           veniam
                                                                      </option>
                                                                      <option value="5">
                                                                           Nam liber tempor cum
                                                                      </option>
                                                                      <option value="6">
                                                                           At vero eos et accusam et
                                                                      </option>
                                                                      <option value="7">
                                                                           Consetetur sadipscing
                                                                           elitr
                                                                      </option>
                                                                      <option value="8">
                                                                           Sed diam nonumy
                                                                      </option>
                                                                 </select>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="input1_wrapper">
                                                            <label>Check-In:</label>
                                                            <div className="input1_inner">
                                                                 <input
                                                                      type="text"
                                                                      className="input datepicker"
                                                                      value="Mm/Dd/Yy"
                                                                 />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="input1_wrapper">
                                                            <label>Check-Out:</label>
                                                            <div className="input1_inner">
                                                                 <input
                                                                      type="text"
                                                                      className="input datepicker"
                                                                      value="Mm/Dd/Yy"
                                                                 />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="select1_wrapper">
                                                            <label>Adult:</label>
                                                            <div className="select1_inner">
                                                                 <select
                                                                      className="select2 select"
                                                                      style={{ width: "100%" }}
                                                                 >
                                                                      <option value="1">
                                                                           Room for 1 adult
                                                                      </option>
                                                                      <option value="2">
                                                                           Room for 2 adult
                                                                      </option>
                                                                      <option value="3">
                                                                           Room for 3 adult
                                                                      </option>
                                                                      <option value="4">
                                                                           Room for 4 adult
                                                                      </option>
                                                                      <option value="5">
                                                                           Room for 5 adult
                                                                      </option>
                                                                      <option value="6">
                                                                           Room for 6 adult
                                                                      </option>
                                                                      <option value="7">
                                                                           Room for 7 adult
                                                                      </option>
                                                                      <option value="8">
                                                                           Room for 8 adult
                                                                      </option>
                                                                 </select>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-sm-4 col-md-2">
                                                       <div className="button1_wrapper">
                                                            <button
                                                                 type="submit"
                                                                 className="btn-default btn-form1-submit"
                                                            >
                                                                 Search
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* <div className={classes.container}>
                    <div className={classes.root}>
                         <div className={classes.tabContainer}>
                              {tabs?.map((tab, idx) => (
                                   <div
                                        key={idx}
                                        className={
                                             idx + 1 === currentTab
                                                  ? classes.activeTab
                                                  : classes.tab
                                        }
                                        onClick={() => setTab(idx + 1)}
                                   >
                                        {tab}
                                   </div>
                              ))}
                         </div>
                         <div className={classes.form}>
                              <div className={classes.inputContainer}>
                                   <label>City or Hotel Name:</label>
                                   <CreatableSelect
                                        options={[]}
                                        // onChange={setSelectedBasalTemplate}
                                        className={`react-select ${classes.select}`}
                                        classNamePrefix="select"
                                        placeholder={"Filter By Stars"}
                                   />
                              </div>
                              <div className={classes.inputContainer}>
                                   <label>Flying from:</label>
                                   <CreatableSelect
                                        options={[]}
                                        // onChange={setSelectedBasalTemplate}
                                        className={`react-select ${classes.select}`}
                                        classNamePrefix="select"
                                        placeholder={"Filter By Stars"}
                                   />
                              </div>

                              <div className={classes.inputContainer}>
                                   <label>Flying from:</label>
                                   <CreatableSelect
                                        options={[]}
                                        // onChange={setSelectedBasalTemplate}
                                        className={`react-select ${classes.select}`}
                                        classNamePrefix="select"
                                        placeholder={"Filter By Stars"}
                                   />
                              </div>
                              <div className={classes.inputContainer}>
                                   <Button className={classes.searchBtn}>Search</Button>
                              </div>
                         </div>
                    </div>
               </div> */}
          </>
     );
};
