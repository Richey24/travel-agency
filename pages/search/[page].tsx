import React, { useEffect, useState } from "react";
import { Pagebanner } from "../../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../../components/Breadcumbs/Breadcumbs";
import { FilterContainer } from "../../components/FilterContainer/FilterContainer";
import Script from "next/script";
import { useSetRouteName } from "../../redux/appState/hooks";
import { MapContainer } from "../../components/MapContainer/MapContainer";
import { Scheduler } from "../../components/Scheduler/Scheduler";
import { useRouter } from "next/router";
import { SearchParams } from "../../components/Scheduler/types";
const paths = [{ name: "Home", url: "/" }, { name: "Search", url: "/" }, { name: "Hotels" }];

const Search = () => {
     const setRoute = useSetRouteName();
     const [searchParams, setSearchParams] = useState<SearchParams | null>();
     const router = useRouter();
     const { page } = router.query;

     useEffect(() => {
          setRoute("pages");
     });

     const handleSearch = (data: SearchParams) => {
          setSearchParams(data);
     };

     return (
          <div className="not-front page-post page-about">
               <div id="main" style={{ overflow: "unset" }}>
                    {!searchParams && <Pagebanner />}
                    <Breadcumbs paths={paths} />
                    {!searchParams && (
                         <Scheduler
                              initialTab={page === "hotels" ? 1 : 2}
                              onClick={handleSearch}
                              hotelsOnly
                         />
                    )}
                    {searchParams && (
                         <MapContainer backBtnClick={() => setSearchParams(null)} backBtn />
                    )}
                    {/* <div style={{ marginTop: 16 }}></div> */}
                    {/* <FilterContainer /> */}
               </div>
          </div>
     );
};

export default Search;
