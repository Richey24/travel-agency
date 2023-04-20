/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStyles } from "./styles";
import locations from "../../locations.json";
import { usePointsMap } from "./components/hooks";
import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootStateProps } from "../../redux/types";

mapboxgl.accessToken =
     process.env.REACT_APP_MAPBOX_KEY ??
     "pk.eyJ1IjoidmlrdG9oIiwiYSI6ImNrcmpyamM1ZjA1ZG8ydnBjbWRpOWtjN2kifQ.auBvgsbud2l08nrj8lXZfg";

const boxStyle = {
     position: "absolute" as "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     width: 400,
     bgcolor: "background.paper",
     boxShadow: 24,
     p: 2,
};

// eslint-disable-next-line import/no-webpack-loader-syntax
(mapboxgl as any).workerClass =
     require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export const Map = () => {
     const classes = useMapStyles();
     const mapContainer = useRef<HTMLDivElement>(null);
     const pointsMap = usePointsMap();
     const [zoom, setZoom] = useState(8);
     const [open, setOpen] = useState(false);
     const [mapFeature, setMapFeature] = useState<
          | {
                 type: string;
                 properties: {
                      title: string;
                      description: string;
                 };
                 geometry: {
                      coordinates: number[];
                      type: string;
                 };
            }
          | any
     >({
          type: "Feature",
          properties: {
               title: "Grant Start",
               description:
                    "A downtown park that is the site of many of Chicago's favorite festivals and events",
          },
          geometry: {
               coordinates: [-87.619185, 41.876367],
               type: "Point",
          },
     });
     const map = useRef<any>(null);
     const appState = useSelector((state: RootStateProps) => state.appStateReducer);

     console.log("appState", appState);
     useEffect(() => {
          if (map.current) return; // initialize map only once
          map.current = new mapboxgl.Map({
               container: mapContainer.current as HTMLElement,
               style: "mapbox://styles/mapbox/streets-v12",
               center: [mapFeature.geometry.coordinates[0], mapFeature.geometry.coordinates[1]],
               zoom: zoom,
          });

          const geocoder = new MapboxGeocoder({
               accessToken: mapboxgl.accessToken,
               mapboxgl: mapboxgl,
          });

          locations.features
               .filter((feature) =>
                    feature?.properties.title
                         .toLowerCase()
                         .startsWith(appState.mapParams.name?.toLowerCase()),
               )
               .forEach((feature) => {
                    pointsMap(map, feature, markerClicked);
               });
          map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");
          map.current.addControl(geocoder, "top-right");
     }, [appState.mapParams]);

     useEffect(() => {
          if (!map.current) return;
          map.current.on("move", () => {
               setMapFeature((mapFeature: any) => {
                    return {
                         ...mapFeature,
                         geometry: {
                              ...mapFeature.geometry,
                              coordinates: [
                                   map.current.getCenter().lng.toFixed(4),
                                   map.current.getCenter().lat.toFixed(4),
                              ],
                         },
                    };
               });

               setZoom(map.current.getZoom().toFixed(2));
          });
     }, [map.current]);

     const markerClicked = (feature: any, coordinates: number[], setLoading: any) => {
          console.log("hi");
          // setLoading(false);
          // fatchWeather(coordinates[0], coordinates[1], (response) => {
          //      if (response) {
          //           updateWeatherData(response);
          //      }
          setMapFeature(feature);
          setTimeout(() => {
               setLoading(false);
               setOpen(true);
          }, 500);
          // });
     };

     const handleClose = () => {
          setOpen(false);
     };

     return (
          <div>
               <div ref={mapContainer} className={classes.root} />
               <Modal open={open} onClose={handleClose}>
                    <Box sx={boxStyle}>
                         <div className={classes.modalHeaderContainer}>
                              <div className={classes.container}>
                                   <div className={classes.firstContainer}>
                                        <img
                                             src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/75cf2e768dbb6a05855b2783ae6760cc.webp"
                                             alt=""
                                             className={classes.titleImage}
                                        />
                                        <div className={classes.titleDetailsContainer}>
                                             <p>2bedroom Shortlet apartments wuse 2</p>
                                             <div className={classes.titleIconsContainer}>
                                                  <AiOutlineLike className={classes.icon} />
                                                  <CiCircleRemove
                                                       onClick={handleClose}
                                                       className={classes.icon}
                                                  />
                                             </div>
                                        </div>
                                   </div>
                                   <div className={classes.divider} />
                                   <div className={classes.secondContainer}>
                                        <div className={classes.descriptionContainer}>
                                             <p className={classes.subTitle}>
                                                  Two-Bedroom Apartment
                                             </p>
                                             <p>5 nights, 2 adults</p>
                                             <div className={classes.price}>NGN 161,263</div>{" "}
                                             <div>Includes taxes and fees</div>
                                             <span className={classes.cancellation}>
                                                  Free cancellation
                                             </span>
                                        </div>
                                        <div>
                                             <Link href={"/booking/hotel"}>
                                                  <Button
                                                       variant="outlined"
                                                       className={classes.viewMoreBtn}
                                                  >
                                                       View More <IoArrowForwardOutline size={12} />
                                                  </Button>
                                             </Link>
                                        </div>
                                   </div>
                                   <div className={classes.divider} />

                                   <div>2 Wuse Market Road, Wuse</div>
                              </div>
                              {/* <div>
                                   <h1 className={classes.modalTitle}>
                                        {_.capitalize(mapFeature?.properties?.title)}
                                   </h1>
                                   <div className={classes.modalTemperature}>
                                        {mapFeature?.properties?.description}
                                   </div>
                                   {/* <div>
                                        min -{" "}
                                        {(weatherData?.main?.temp_min - 273.15).toFixed(2) ?? 0}°C
                                        {"   "}
                                        max -{" "}
                                        {(weatherData?.main?.temp_max - 273.15).toFixed(2) ?? 0}°C
                                   </div> */}
                              {/* <Link href={""}>
                                        <Button variant="outlined">View More</Button>
                                   </Link> */}
                              {/* </div> */}
                              {/* <span className={classes.iconContainer}> */}
                              {/* {icon("")} */}
                              {/* <img
                                        src={`http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`}
                                        alt=""
                                        width={150}
                                        height={150}
                                   /> */}
                              {/* {weatherData?.weather?.[0]?.main} */}
                              {/* </span> */}
                         </div>
                    </Box>
               </Modal>
          </div>
     );
};
