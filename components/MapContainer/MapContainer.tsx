import React, { FC } from "react";
import { useMapContainerStyles } from "./styles";
import { Map } from "../Map/Map";
import { HotelFilter } from "../Map/components/HotelFilter/HotelFilter";
import { IoArrowBack } from "react-icons/io5";
import { MapContainerProps } from "./types";

export const MapContainer: FC<MapContainerProps> = ({ backBtn, backBtnClick }) => {
     const classes = useMapContainerStyles();

     return (
          <div className={classes.root}>
               <HotelFilter />
               <Map />
               {backBtn && (
                    <div className={classes.back}>
                         <div className={classes.icon} onClick={backBtnClick}>
                              <IoArrowBack size={25} />
                         </div>
                         Back
                    </div>
               )}
          </div>
     );
};
