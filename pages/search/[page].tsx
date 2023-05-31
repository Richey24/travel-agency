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
import axios, { AxiosError, AxiosRequestHeaders } from "axios";
import { toast } from "react-toastify";
import _ from "lodash";
import { RootStateProps, useCustomDispatch } from "../../redux/types";
import { useSelector } from "react-redux";
import { useGetHotelImage, useGetHotelOffers } from "../../redux/hotels/hooks";
const paths = [{ name: "Home", url: "/" }, { name: "Search", url: "/" }, { name: "Hotels" }];

const Search = () => {
     const setRoute = useSetRouteName();
     const [searchParams, setSearchParams] = useState<SearchParams | null>();
     const router = useRouter();
     const { page } = router.query;
     const hotelStore = useSelector((state: RootStateProps) => state.hotelReducer);
     const getHotelOffers = useGetHotelOffers();
     const [showMap, setShowMap] = useState(false);
     const dispatch = useCustomDispatch();
     const getImage = useGetHotelImage();
     console.log("hotelStore", hotelStore);

     useEffect(() => {
          setRoute("pages");
          // getImage();
          if (hotelStore.hotelOffers) {
               setShowMap(true);
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

     const handleBack = () => {
          dispatch({
               type: "EMPTY_OFFERS_DATA",
               payload: null,
          });
          setShowMap(false);
     };

     // Text Search API
     const getPlaceId = async (googleKey: string, headers: any) => {
          const hotelName = "HOTEL VILLA PANTHEON";
          const latLng = "48.84917,2.34615";
          const baseUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json";
          const params = `?location=${latLng}&query=${hotelName}&radius=10&key=${googleKey}`;
          const url = baseUrl + params;

          const response = await axios.get(url, { headers });
          console.log("palce", response);

          const placeId = response.data.results[0].place_id;
          return placeId;
     };

     // Place Details API
     const placeDetails = async (googleKey: string, headers: any, placeId: string) => {
          const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${googleKey}`;

          const response = await axios.get(url, { headers });
          const photoReferences = response.data.result.photos.map((photo) => photo.photo_reference);
          return photoReferences;
     };

     // Place Photos API
     const placePhotos = async (googleKey: string, photoReference: string) => {
          const url = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photoReference}&key=${googleKey}`;

          const response = await axios.get(url, { responseType: "arraybuffer" });
          return response.data;
     };

     const main = async () => {
          const googleKey = "AIzaSyBs-nQLWjCEa_Om3Vsjwi-US5LibGRo88c";
          const headers = { Accept: "application/json" };
          const placeId = await getPlaceId(googleKey, headers);
          // const photoReferences = await placeDetails(googleKey, headers, placeId);
          // const photos = await placePhotos(googleKey, photoReferences[0]);
          // console.log(photos); // do something with the photos
     };

     useEffect(() => {
          main();
     }, []);

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
                    {showMap && <MapContainer backBtnClick={handleBack} backBtn />}
                    {/* <div style={{ marginTop: 16 }}></div> */}
                    {/* <FilterContainer /> */}
               </div>
          </div>
     );
};

export default Search;
