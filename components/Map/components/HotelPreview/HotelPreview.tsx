import React, { FC } from "react";
import { useHotelPreviewStyles } from "./styles";
import { HotelPreviewProps } from "./types";
import getSymbolFromCurrency from "currency-symbol-map";

export const HotelPreview: FC<HotelPreviewProps> = ({ offer }) => {
     const classes = useHotelPreviewStyles();

     return (
          <div className={classes.root}>
               <p>{offer.hotel.name}</p>
               <div className={classes.detailsContainer}>
                    <div className={classes.ratingContainer}>
                         <div className={classes.ratingBox}>{offer.offers[0].rateCode}</div>
                         very good
                    </div>
                    <div className={classes.price}>
                         {" "}
                         {getSymbolFromCurrency(offer?.offers[0].price.currency || "USD") ?? "$"}
                         {offer.offers[0].price.total}
                    </div>
               </div>
          </div>
     );
};
