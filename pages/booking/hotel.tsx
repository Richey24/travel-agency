import React, { useEffect } from "react";
import { Pagebanner } from "../../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../../components/Breadcumbs/Breadcumbs";
import { HotelBookingContainer } from "../../components/HotelBookingContainer/HotelBookingContainer";
import { useSetRouteName } from "../../redux/appState/hooks";
import { MapContainer } from "../../components/MapContainer/MapContainer";
const paths = [{ name: "home", url: "/" }, { name: "Pages", url: "/" }, { name: "booking" }];

const hotel = () => {
     const setRoute = useSetRouteName();

     useEffect(() => {
          setRoute("pages");
     }, []);

     return (
          <div className="not-front page-about">
               <div id="main">
                    <Pagebanner />
                    {/* <MapContainer /> */}

                    <Breadcumbs paths={paths} />
                    <HotelBookingContainer />
               </div>
          </div>
     );
};
export default hotel;
