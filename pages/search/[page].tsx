import React, { useEffect } from "react";
import { Pagebanner } from "../../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../../components/Breadcumbs/Breadcumbs";
import { FilterContainer } from "../../components/FilterContainer/FilterContainer";
import Script from "next/script";
import { useSetRouteName } from "../../redux/appState/hooks";
import { MapContainer } from "../../components/MapContainer/MapContainer";
const paths = [{ name: "Home", url: "/" }, { name: "Search", url: "/" }, { name: "Hotels" }];

const Search = () => {
     const setRoute = useSetRouteName();

     useEffect(() => {
          setRoute("pages");
     });

     return (
          <div className="not-front page-post page-about">
               <div id="main">
                    <Breadcumbs paths={paths} />

                    {/* <Pagebanner /> */}
                    <MapContainer />
                    <FilterContainer />
               </div>
          </div>
     );
};

export default Search;
