import axios from "axios";
import { useCustomDispatch } from "../types";
import { Coordinates, SearchParams } from "../../components/Scheduler/types";
import { toast } from "react-toastify";
import _ from "lodash";
import moment from "moment";

export const useSetRouteName = () => {
     const dispatch = useCustomDispatch();

     return (name: string) => {
          dispatch({
               type: "SET_ROUTE_NAME",
               payload: name,
          });
     };
};

export const useGetHotelOffers = () => {
     const dispatch = useCustomDispatch();

     return async (
          data: SearchParams,
          coordinates: Coordinates,
          setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
          ifOffers?: () => void,
     ) => {
          try {
               setLoading?.(true);
               const response = await axios.post(
                    "/api/hotels/list",
                    { coordinates },
                    {
                         headers: {
                              "Content-Type": "application/json",
                         },
                    },
               );
               setLoading?.(false);
               if (response.data.status) {
                    dispatch({
                         type: "SET_ALL_HOTEL_DATA",
                         payload: {
                              hotels: response.data?.data.hotels,
                              hotelOffers:
                                   response.data?.data.offers?.length > 0
                                        ? response.data?.data.offers
                                        : null,
                              hotelParams: {
                                   ...{
                                        ...data,
                                        dateRange: data.dateRange.map((date) =>
                                             moment(date).format("YYYY-MM-DD"),
                                        ),
                                   },
                                   ...coordinates,
                              },
                         },
                    });
                    if (response.data?.data.offers?.length === 0) {
                         toast.error("No Hotel Offer Available at the Selected Location");
                    } else {
                         ifOffers?.();
                    }
               }
               console.log("response", response.data);
          } catch (err) {
               setLoading?.(false);
               toast.error(_.capitalize((err as any).response?.data?.message));
               console.log("err now", (err as any).response?.data?.message);
          }
     };
};
