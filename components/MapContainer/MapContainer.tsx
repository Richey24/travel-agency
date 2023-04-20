import React from "react";
import { useMapContainerStyles } from "./styles";
import { Map } from "../Map/Map";
import { HotelFilter } from "../Map/components/HotelFilter/HotelFilter";

export const MapContainer = () => {
     const classes = useMapContainerStyles();

     return (
          <div className={classes.root}>
               <HotelFilter />
               <Map />
          </div>
     );
};
