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
const paths = [{ name: "Home", url: "/" }, { name: "Pages", url: "/" }, { name: "Hotels" }];

const List = () => {
     const setRoute = useSetRouteName();
     const router = useRouter();
     const { search } = router.query;

     useEffect(() => {
          setRoute("pages");
     }, []);

     const handleRouteChange = (name: string) => {
          router.push(`/booking/list/${name.toLowerCase()}`);
     };

     return (
          <div className="not-front page-pages page-hotels page-about">
               <div id="main">
                    <Pagebanner />
                    <Breadcumbs paths={paths} />
                    <Tabs />
                    <Scheduler
                         initialTab={search === "flights" ? 1 : 2}
                         onTabSwitch={handleRouteChange}
                    />
                    <ListContainer />
               </div>
          </div>
     );
};

export default List;
