import { FC, useState } from "react";
import { useMarkerStyles } from "./styles";
import { MarkerProps } from "./types";
import { TiWeatherCloudy } from "react-icons/ti";
import { GrLocationPin } from "react-icons/gr";
import { CircularProgress } from "@mui/material";
import { FaHotel } from "react-icons/fa";
import { HotelPreview } from "../Map/components/HotelPreview/HotelPreview";
import getSymbolFromCurrency from "currency-symbol-map";

export const Marker: FC<MarkerProps> = ({ onClick, children, offer }) => {
     const classes = useMarkerStyles();
     const [loading, setLoading] = useState(false);
     const [preview, setPreview] = useState(false);

     const _onClick = () => {
          setLoading(true);
          onClick(setLoading);
     };

     const _onMouseOver = () => {
          setPreview(true);
     };
     const _onMouseOut = () => {
          setPreview(false);
     };

     return (
          <div
               onClick={_onClick}
               onMouseOver={_onMouseOver}
               onMouseOut={_onMouseOut}
               className={classes.root}
          >
               {!loading && (
                    <div className={classes.pointer}>
                         <p className={classes.price}>
                              {getSymbolFromCurrency(offer?.offers[0].price.currency || "USD") ??
                                   "$"}
                              {offer?.offers[0].price.total.toString() || 0}
                         </p>
                         <FaHotel size={25} color={"#00a99d"} />
                    </div>
               )}
               {loading && <CircularProgress />}
               {preview && <HotelPreview offer={offer} />}
               {children}
          </div>
     );
};
