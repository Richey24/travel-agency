import React, { useEffect, useState } from "react";
import { Pagebanner } from "../../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../../components/Breadcumbs/Breadcumbs";
import { FilterContainer } from "../../components/FilterContainer/FilterContainer";
import { useSetRouteName } from "../../redux/appState/hooks";
import { MapContainer } from "../../components/MapContainer/MapContainer";
import { Scheduler } from "../../components/Scheduler/Scheduler";
import { useRouter } from "next/router";
import { Coordinates, SearchParams } from "../../components/Scheduler/types";
import { Tabs } from "../../components/Tabs/Tabs";
import { LocationSearch } from "../../components/Locations/Locations";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import _ from "lodash";
import { RootStateProps } from "../../redux/types";
import { useSelector } from "react-redux";
import { useGetHotelOffers } from "../../redux/hotels/hooks";
const paths = [{ name: "Home", url: "/" }, { name: "Search", url: "/" }, { name: "Hotels" }];

const Search = () => {
     const setRoute = useSetRouteName();
     const [searchParams, setSearchParams] = useState<SearchParams | null>();
     const router = useRouter();
     const { page } = router.query;
     const hotelStore = useSelector((state: RootStateProps) => state.hotelReducer);
     const getHotelOffers = useGetHotelOffers();
     const [showMap, setShowMap] = useState(false);

     console.log("hotelStore", hotelStore);

     useEffect(() => {
          setRoute("pages");
          if(hotelStore.hotelOffers){
               setShowMap(true)
          }
     }, []);

     const handleSearch = async (
          data: SearchParams,
          coordinates: Coordinates,
          setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
     ) => {
          if (coordinates) {
               getHotelOffers(data, coordinates, setLoading, () => setShowMap(true));
          }
     };

     return (
          <div className="not-front page-post page-about">
               <div id="main" style={{ overflow: "unset" }}>
                    {!showMap && <Pagebanner />}
                    <Breadcumbs paths={paths} />
                    {showMap && <Tabs />}
                    {/* <LocationSearch /> */}

                    {!showMap && (
                         <Scheduler
                              initialTab={page === "hotels" ? 1 : 2}
                              onClick={handleSearch}
                              hotelsOnly
                         />
                    )}
                    {showMap && <MapContainer backBtnClick={() => setSearchParams(null)} backBtn />}
                    {/* <div style={{ marginTop: 16 }}></div> */}
                    {/* <FilterContainer /> */}
               </div>
          </div>
     );
};

export default Search;
