import { useRef } from "react";
import { Marker } from "../../Marker/Marker";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { OffersField } from "../../../redux/hotels/types";

export const usePointsMap = () => {
     const ref = useRef<any>();

     return (
          map: any,
          offer: OffersField,
          markerClicked: (offer: OffersField, setLoading: any) => void,
     ) => {
          ref.current = document.createElement("div");
          ref.current.classList.add(offer?.hotel.hotelId.split(" ").join("_"));
          // Render a Marker Component on our new DOM node
          // const pointerRoot = ReactDOM.createRoot(ref.current);

          ReactDOM.render(
               <Marker offer={offer} onClick={(setLoading) => markerClicked(offer, setLoading)} />,
               ref.current,
          );

          // Create a Mapbox Marker at our new DOM node
          const marker = new mapboxgl.Marker(ref.current)
               .setLngLat([offer.hotel?.longitude || 0, offer.hotel?.latitude || 0])
               .addTo(map.current);

          return {
               offer,
               marker,
          };
     };
};
