/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import { useMapStyles } from "./styles";
import locations from "../../locations.json";
import { usePointsMap } from "./components/hooks";
import { Box, Button, Modal } from "@mui/material";
// import { Box } from "@mui/system";
import _ from "lodash";
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootStateProps } from "../../redux/types";
import { toast } from "react-toastify";
import { OffersField } from "../../redux/hotels/types";
import getSymbolFromCurrency from "currency-symbol-map";
import moment from "moment";

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
     const [selectedOffer, setSelectedOffer] = useState<OffersField | null>();
     const map = useRef<any>(null);
     const [markers, setMarkers] = useState<any[]>([]);
     const appState = useSelector((state: RootStateProps) => state.appStateReducer);
     const hotelStore = useSelector((state: RootStateProps) => state.hotelReducer);
     const offers = hotelStore.hotelOffers;
     // console.log("offers", selectedOffer);

     useEffect(() => {
          if (offers) {
               if (map.current) return; // initialize map only once
               map.current = new mapboxgl.Map({
                    container: mapContainer.current as HTMLElement,
                    style: "mapbox://styles/mapbox/streets-v12",
                    center: [offers[0].hotel.longitude, offers[0].hotel.latitude],
                    zoom: zoom,
               });

               const geocoder = new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl,
               });

               offers
                    // .filter((feature) =>
                    //      feature?.properties.title
                    //           .toLowerCase()
                    //           .startsWith(appState.mapParams.name?.toLowerCase()),
                    // )
                    .forEach((offer) => {
                         setMarkers((markers) => [
                              ...markers,
                              pointsMap(map, offer, markerClicked),
                         ]);
                    });
               map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");
               map.current.addControl(geocoder, "top-right");
          } else {
               toast.error("No Offers Available");
          }
     }, []);

     useEffect(() => {
          markers.forEach((pointer, idx) => {
               if (
                    !pointer.feature?.properties.title
                         .toLowerCase()
                         .startsWith(appState.mapParams.name?.toLowerCase())
               ) {
                    const captured = document.querySelector(
                         `.${pointer.feature?.properties.title.split(" ").join("_")}`,
                    );
                    captured?.parentNode?.removeChild(captured);
               } else {
                    pointsMap(map, pointer.feature, markerClicked);
               }
          });
     }, [appState.mapParams.name]);

     // useEffect(() => {
     //      if (!map.current) return;
     //      map.current.on("move", () => {
     //           setMapFeature((mapFeature: any) => {
     //                return {
     //                     ...mapFeature,
     //                     geometry: {
     //                          ...mapFeature.geometry,
     //                          coordinates: [
     //                               map.current.getCenter().lng.toFixed(4),
     //                               map.current.getCenter().lat.toFixed(4),
     //                          ],
     //                     },
     //                };
     //           });

     //           setZoom(map.current.getZoom().toFixed(2));
     //      });
     // }, [map.current]);

     const markerClicked = (offer: OffersField, setLoading: any) => {
          console.log("hi");
          // setLoading(false);
          // fatchWeather(coordinates[0], coordinates[1], (response) => {
          //      if (response) {
          //           updateWeatherData(response);
          //      }
          setSelectedOffer(offer);
          setTimeout(() => {
               setLoading(false);
               setOpen(true);
          }, 500);
          // });
     };

     const handleClose = () => {
          setOpen(false);
     };

     const dateDiff = (from: string, to: string) => {
          const date1 = moment(from);
          const date2 = moment(to);

          return date2.diff(date1, "days");
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
                                             <p>{selectedOffer?.hotel.name}</p>
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
                                             <p>
                                                  {dateDiff(
                                                       selectedOffer?.offers[0]
                                                            .checkInDate as string,
                                                       selectedOffer?.offers[0]
                                                            .checkOutDate as string,
                                                  )}{" "}
                                                  nights, {selectedOffer?.offers[0].guests.adults}{" "}
                                                  adults
                                             </p>
                                             <div className={classes.price}>
                                                  {getSymbolFromCurrency(
                                                       selectedOffer?.offers[0].price.currency ||
                                                            "USD",
                                                  ) ?? "$"}{" "}
                                                  {selectedOffer?.offers[0].price.total}
                                             </div>{" "}
                                             <div>Includes taxes and fees</div>
                                             <span className={classes.cancellation}>
                                                  Free cancellation
                                             </span>
                                        </div>
                                        <div>
                                             <Link
                                                  href={`/booking/hotel/${selectedOffer?.hotel.hotelId}`}
                                             >
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

                                   <div>{selectedOffer?.offers[0].room.description.text}</div>
                              </div>
                         </div>
                    </Box>
               </Modal>
          </div>
     );
};
