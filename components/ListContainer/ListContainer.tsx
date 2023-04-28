import React from "react";
import { Qoute } from "../Qoute/Qoute";
import { PassangerFilter } from "../PassangerFilter/PassangerFilter";
import { data } from "./data";
import { SalesCard } from "../SalesCard/SalesCard";
import { Pagination } from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootStateProps } from "../../redux/types";
import getSymbolFromCurrency from "currency-symbol-map";
import { useRouter } from "next/router";
import CreatableSelect from "react-select/creatable";
import { useListContainerStyles } from "./styles";

export const ListContainer = ({ pageType }: { pageType: string }) => {
     const hotelStore = useSelector((state: RootStateProps) => state.hotelReducer);
     const hotelOffers = hotelStore.hotelOffers;
     const router = useRouter();
     const classes = useListContainerStyles();

     const dataList = () => {
          if (pageType === "hotels") {
               return hotelOffers;
          }
          return [];
     };

     const handleDetails = (hotelId: string) => {
          router.push(`/booking/hotel/${hotelId}`);
     };

     return (
          <div id="content">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-3">
                              <PassangerFilter />
                              <ul className="ul3">
                                   <li>
                                        <a href="#">Star Raiting</a>
                                   </li>
                                   <li>
                                        <a href="#">Price Range</a>
                                   </li>
                                   <li>
                                        <a href="#">Departure Ports</a>
                                   </li>
                                   <li>
                                        <a href="#">Trip Duration</a>
                                   </li>
                                   <li>
                                        <a href="#">Ships</a>
                                   </li>
                              </ul>
                              <Qoute />
                         </div>
                         <div className="col-sm-9">
                              <form
                                   action="javascript:;"
                                   className={`form3 clearfix ${classes.sortContainer}`}
                              >
                                   <div className="select1_wrapper txt">
                                        <label>Sort by:</label>
                                   </div>
                                   <CreatableSelect
                                        options={[]}
                                        className={`react-select ${classes.select}`}
                                        classNamePrefix="select"
                                        placeholder={"Name"}
                                   />
                                   <CreatableSelect
                                        options={[]}
                                        className={`react-select ${classes.select}`}
                                        classNamePrefix="select"
                                        placeholder={"Price"}
                                   />
                                   <CreatableSelect
                                        options={[]}
                                        className={`react-select ${classes.select}`}
                                        classNamePrefix="select"
                                        placeholder={"Rating"}
                                   />
                                   <CreatableSelect
                                        options={[]}
                                        className={`react-select ${classes.select}`}
                                        classNamePrefix="select"
                                        placeholder={"Popularity"}
                                   />
                                   <div className="select1_wrapper buttons">
                                        <a href="#" className="btn-default s1" />
                                        <a href="#" className="btn-default s2" />
                                        <a href="#" className="btn-default s3" />
                                   </div>
                              </form>
                              <div className="row">
                                   {dataList()?.map((item, idx) => (
                                        <div className="col-sm-4" key={idx}>
                                             <SalesCard
                                                  city={item.hotel.name}
                                                  image={"http://placehold.it/262x171"}
                                                  price={`${
                                                       getSymbolFromCurrency(
                                                            item?.offers[0].price.currency || "USD",
                                                       ) ?? "$"
                                                  }
                              ${item?.offers[0].price.total.toString() || 0}`}
                                                  country=""
                                                  handleDetails={() =>
                                                       handleDetails(item.hotel.hotelId)
                                                  }
                                             />
                                        </div>
                                   ))}
                              </div>
                              <Pagination />
                         </div>
                    </div>
               </div>
          </div>
     );
};
