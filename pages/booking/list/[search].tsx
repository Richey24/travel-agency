import React, { useEffect } from "react";
import { Pagebanner } from "../../../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../../../components/Breadcumbs/Breadcumbs";
import { Scheduler } from "../../../components/Scheduler/Scheduler";
import Script from "next/script";
import { ListContainer } from "../../../components/ListContainer/ListContainer";
import { useSetRouteName } from "../../../redux/appState/hooks";
import { useRouter } from "next/router";
import { MapContainer } from "../../../components/MapContainer/MapContainer";
import { Tabs } from "../../../components/Tabs/Tabs";
import { LocationSearch } from "../../../components/Locations/Locations";
import { useSelector } from "react-redux";
import { RootStateProps } from "../../../redux/types";
const paths = [{ name: "Home", url: "/" }, { name: "Pages", url: "/" }, { name: "Hotels" }];

const List = () => {
     const setRoute = useSetRouteName();
     const router = useRouter();
     const { search } = router.query;
     const hotelStore = useSelector((state: RootStateProps) => state.hotelReducer);
     const hotelOffers = hotelStore.hotelOffers;

     useEffect(() => {
          setRoute("pages");
     }, []);

     const handleRouteChange = (name: string) => {
          router.push(`/booking/list/${name.toLowerCase()}`);
     };

     const displayOffers = () => {
          if (hotelOffers) {
               return true;
          }
          return false;
     };

     return (
          <div className="not-front page-pages page-hotels page-about">
               <div id="main">
                    <Pagebanner />
                    <Breadcumbs paths={paths} />
                    <Tabs />
                    {!displayOffers() && (
                         <Scheduler
                              initialTab={search === "flights" ? 1 : 2}
                              onTabSwitch={handleRouteChange}
                         />
                    )}
                    {displayOffers() && <ListContainer pageType={search as string} />}
               </div>
          </div>
     );
};

export default List;
