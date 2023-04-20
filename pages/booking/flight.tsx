import React, { useEffect } from "react";
import { Pagebanner } from "../../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../../components/Breadcumbs/Breadcumbs";
import { FlightBookingContainer } from "../../components/FlightBookingContainer/FlightBookingContainer";
import { useSetRouteName } from "../../redux/appState/hooks";
import { MapContainer } from "../../components/MapContainer/MapContainer";

const paths = [{ name: "home", url: "/" }, { name: "Pages", url: "/" }, { name: "flight" }];
const flight = () => {
     const setRoute = useSetRouteName();

     useEffect(() => {
          setRoute("pages");
     }, []);

     return (
          <div className="not-front page-about">
               <div id="main">
                    {/* <MapContainer /> */}
                    <Pagebanner />
                    <Breadcumbs paths={paths} />
                    <FlightBookingContainer />
               </div>
          </div>
     );
};

export default flight;
