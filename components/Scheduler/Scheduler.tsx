import React, { FC, useState } from "react";
import { useSchedulerStyles } from "./styles";
import CreatableSelect from "react-select/creatable";
import { Button } from "@mui/material";
import { SchedulerProps, SearchParams } from "./types";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";
import moment from "moment";
import { Settings } from "./components/Settings/Settings";

const tabs = [
     {
          name: "flights",
          icon: (
               <MdFlight
                    style={{
                         transform: "rotate(45deg)",
                    }}
                    size={25}
               />
          ),
     },
     { name: "hotels", icon: <FaHotel size={25} /> },
];

const adults = [
     {
          value: "1",
          label: "Room for 1 Adult",
     },
     {
          value: "2",
          label: "Room for 2 Adults",
     },
     {
          value: "3",
          label: "Room for 3 Adults",
     },
     {
          value: "4",
          label: "Room for 4 Adults",
     },
     {
          value: "5",
          label: "Room for 5 Adults",
     },
];

export const Scheduler: FC<SchedulerProps> = ({
     initialTab,
     onClick,
     hotelsOnly,
     flightsOnly,
     onTabSwitch,
}) => {
     const classes = useSchedulerStyles();
     const [currentTab, setTab] = useState(initialTab || 1);
     const [dateRange, setDateRange] = useState<any[] | null>(null);
     const [showCalendar, setShowCalendar] = useState(false);
     const [showSettings, setShowSettings] = useState(false);
     const [searchParams, setSearchParams] = useState<SearchParams | null>();
     const [counts, setCounts] = useState({
          rooms: 1,
          children: 0,
          adults: 1,
     });

     const handleDateChange = (date: Value) => {
          setDateRange(date as any[]);
          setSearchParams((prev) =>
               prev
                    ? { ...prev, dateRange: date as any[] }
                    : { nameOrCity: "", numOfAdults: 0, dateRange: date as any[] },
          );

          setShowCalendar(false);
     };

     console.log("date", dateRange);

     return (
          <>
               <div className={classes.container}>
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
                                        onClick={() => {
                                             if (!hotelsOnly || !flightsOnly) {
                                                  setTab(idx + 1);
                                                  onTabSwitch?.(tab.name);
                                                  return;
                                             }

                                             if (hotelsOnly && tab.name === "hotels") {
                                                  setTab(idx + 1);
                                                  onTabSwitch?.(tab.name);
                                                  return;
                                             }

                                             if (flightsOnly && tab.name === "flights") {
                                                  setTab(idx + 1);
                                                  onTabSwitch?.(tab.name);
                                                  return;
                                             }
                                        }}
                                   >
                                        {tab.icon} {tab.name}
                                   </div>
                              ))}
                         </div>
                         <div className={classes.form}>
                              <div className={classes.inputContainer}>
                                   <label>City or Hotel Name:</label>
                                   <input
                                        className={classes.dateRangeInput}
                                        // onClick={() => setShowCalendar((prev) => !prev)}
                                        placeholder="City or Hotel Name"
                                   />
                              </div>

                              <div className={classes.inputContainer}>
                                   <label>Date Range:</label>
                                   <input
                                        className={classes.dateRangeInput}
                                        onClick={() => {
                                             setShowCalendar((prev) => !prev);
                                             setShowSettings(false);
                                        }}
                                        defaultValue={
                                             !dateRange
                                                  ? "Start Date - End Date"
                                                  : dateRange
                                                         .map((date) =>
                                                              moment(date).format("YYYY-MM-DD"),
                                                         )
                                                         .join(" - ")
                                        }
                                        value={
                                             !dateRange
                                                  ? "Start Date - End Date"
                                                  : dateRange
                                                         .map((date) =>
                                                              moment(date).format("YYYY-MM-DD"),
                                                         )
                                                         .join(" - ")
                                        }
                                        contentEditable={false}
                                        readOnly
                                   />
                                   {showCalendar && (
                                        <div className={classes.calenderContainer}>
                                             <Calendar
                                                  onChange={(date) => handleDateChange(date)}
                                                  // value={dateRange}
                                                  showDoubleView
                                                  selectRange={true}
                                                  minDate={new Date()}
                                                  className={classes.calendar}
                                                  nextLabel={<IoIosArrowForward />}
                                                  next2Label={<TfiControlForward />}
                                                  prevLabel={<IoIosArrowBack />}
                                                  prev2Label={<TfiControlBackward />}
                                             />
                                        </div>
                                   )}
                              </div>
                              <div className={classes.inputContainer}>
                                   <label>Settings:</label>
                                   <input
                                        className={classes.dateRangeInput}
                                        onClick={() => {
                                             setShowSettings((prev) => !prev);
                                             setShowCalendar(false);
                                        }}
                                        value={`${counts.adults} adult${
                                             counts.adults > 1 ? "s" : ""
                                        } . ${counts.children} children . ${counts.rooms} room${
                                             counts.rooms > 1 ? "s" : ""
                                        }`}
                                        contentEditable={false}
                                        readOnly
                                   />
                                   {showSettings && (
                                        <div className={classes.calenderContainer}>
                                             <Settings
                                                  counts={counts}
                                                  setCounts={setCounts}
                                                  onDone={() => setShowSettings(false)}
                                             />
                                        </div>
                                   )}
                              </div>
                              <div className={classes.inputContainer}>
                                   <Button
                                        className={classes.searchBtn}
                                        onClick={() => onClick?.(searchParams as SearchParams)}
                                        disabled={!searchParams}
                                        style={{ opacity: !searchParams ? 0.6 : 1 }}
                                   >
                                        Search
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};
