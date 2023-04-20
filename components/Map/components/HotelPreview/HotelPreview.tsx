import React, { FC } from "react";
import { useHotelPreviewStyles } from "./styles";
import { HotelPreviewProps } from "./types";

export const HotelPreview: FC<HotelPreviewProps> = ({ name }) => {
     const classes = useHotelPreviewStyles();

     return (
          <div className={classes.root}>
               <p>{name}</p>
               <div className={classes.detailsContainer}>
                    <div className={classes.ratingContainer}>
                         <div className={classes.ratingBox}>5.6</div>
                         very good
                    </div>
                    <div className={classes.price}>$159</div>
               </div>
          </div>
     );
};
