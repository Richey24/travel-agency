import { FC, useState } from "react";
import { useMarkerStyles } from "./styles";
import { MarkerProps } from "./types";
import { TiWeatherCloudy } from "react-icons/ti";
import { GrLocationPin } from "react-icons/gr";
import { CircularProgress } from "@mui/material";
import { FaHotel } from "react-icons/fa";
import { HotelPreview } from "../Map/components/HotelPreview/HotelPreview";

export const Marker: FC<MarkerProps> = ({ onClick, children, feature }) => {
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
                         <p className={classes.price}>$159</p>
                         <FaHotel size={25} color={"#00a99d"} />
                    </div>
               )}
               {loading && <CircularProgress />}
               {preview && <HotelPreview name={feature?.properties?.title ?? null} />}
               {children}
          </div>
     );
};
