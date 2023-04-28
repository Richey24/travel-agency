import React, { FC, useState } from "react";
import { useSchedulerStyles } from "./styles";
import CreatableSelect from "react-select/creatable";
import { Button, CircularProgress } from "@mui/material";
import { Coordinates, SchedulerProps, SearchParams } from "./types";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";
import moment from "moment";
import { Settings } from "./components/Settings/Settings";
import _ from "lodash";
import axios from "axios";

const access_token =
     process.env.REACT_APP_MAPBOX_KEY ??
     "pk.eyJ1IjoidmlrdG9oIiwiYSI6ImNrcmpyamM1ZjA1ZG8ydnBjbWRpOWtjN2kifQ.auBvgsbud2l08nrj8lXZfg";

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
     const [query, setQuery] = useState("");
     const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
     const [locations, setLocations] = useState<any[]>([]);
     const [isFetchingLocations, setIsFetchingLocations] = useState(false);
     const [loading, setLoading] = useState(false);

     const handleDateChange = (date: Value) => {
          setDateRange(date as any[]);
          setSearchParams((prev) =>
               prev
                    ? { ...prev, dateRange: date as any[] }
                    : { nameOrCity: "", numOfAdults: 0, dateRange: date as any[] },
          );

          setShowCalendar(false);
     };

     const handleSearch = async (query: string) => {
          try {
               const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${access_token}`,
               );
               const data = await response.json();
               setLocations(data?.features ?? []);
               // const { lat, lng } = data.features[0].center;
               // setCoordinates({ lat, lng });
               setIsFetchingLocations(false);
          } catch (error) {
               setIsFetchingLocations(false);
               console.error(error);
          }
     };

     // console.log("date", dateRange);
     const handleLocationSeach = (value: string) => {
          setIsFetchingLocations(true);
          setQuery(value);

          if (value.length > 2) {
               handleSearch(value);
          } else {
               setIsFetchingLocations(false);
          }
     };

     const handleOnSearch = async () => {
          setShowCalendar(false);
          setShowSettings(false);
          if (coordinates)
               onClick?.(searchParams as SearchParams, coordinates as Coordinates, setLoading);
     };

     console.log("searchParams?.nameOrCity", searchParams);
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
                                   {/* <input
                                        className={classes.dateRangeInput}
                                        // onClick={() => setShowCalendar((prev) => !prev)}
                                        placeholder="City or Hotel Name"
                                   /> */}
                                   <CreatableSelect
                                        options={locations?.map((locations) => ({
                                             label: locations?.place_name,
                                             value: locations,
                                        }))}
                                        onChange={(value) => {
                                             setQuery(value?.label || "");
                                             setSearchParams((params) =>
                                                  params
                                                       ? {
                                                              ...params,
                                                              nameOrCity: value?.label || "",
                                                         }
                                                       : {
                                                              nameOrCity: value?.label || "",
                                                              dateRange: [],
                                                              numOfAdults: 1,
                                                         },
                                             );
                                             const [lng, lat] = (value as any)?.value?.center;
                                             setCoordinates({ lat, lng });
                                        }}
                                        className={`react-select ${classes.select}`}
                                        classNamePrefix="select"
                                        placeholder={"Choose Location"}
                                        onInputChange={(value) => handleLocationSeach(value)}
                                        isLoading={isFetchingLocations}
                                        value={{
                                             label:
                                                  searchParams?.nameOrCity &&
                                                  searchParams?.nameOrCity !== ""
                                                       ? searchParams?.nameOrCity
                                                       : "City Name",
                                        }}
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
                                        onClick={() => handleOnSearch()}
                                        disabled={!searchParams || loading}
                                        style={{ opacity: !searchParams ? 0.6 : 1 }}
                                   >
                                        {loading ? <CircularProgress size={23} /> : "Search"}
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};
