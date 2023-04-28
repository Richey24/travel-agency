import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import Amadeus from "amadeus";
import qs from "qs";
import { getAmaduesToken } from "../../../utils/getAmadeusToken";

const amadeus = new Amadeus({
     clientId: process.env.API_KEY,
     clientSecret: process.env.API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method === "POST") {
        
          try {
               const token = await getAmaduesToken();

               const hotels = await amadeus.referenceData.locations.hotels.byGeocode.get({
                    latitude: req.body.coordinates.lat,
                    longitude: req.body.coordinates.lng,
                    //    latitude: 48.856614,
                    //    longitude: 2.3522219,
               });

               //for offers
               const baseUrl = "https://test.api.amadeus.com/v3";
               const endpoint = "/shopping/hotel-offers";

               const hotelIds = [
                    "MCLONGHM",
                    "RTCFRMER",
                    ...hotels.data.map((hotel) => hotel.hotelId).filter((_, idx) => idx <= 100),
               ];
               const queryParams = `?hotelIds=${hotelIds.join("&hotelIds=")}`;

               const url = `${baseUrl}${endpoint}${queryParams}`;

               const headers = {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    client_id: process.env.AMADEUS_CLIENT_ID,
                    client_secret: process.env.AMADEUS_CLIENT_SECRET,
               };

               const response = await axios.get(url, { headers });

               res.status(200).json({
                    status: true,
                    message: "Fetched Successfully",
                    data: { offers: response.data?.data, hotels: hotels.data },
               });
          } catch (err) {
               console.log("aoi error", err);
               res.status(400).json({
                    status: false,
                    message: (err as any)?.description?.[0].title || "Something went wrong",
               });
          }
     } else {
          res.status(400).json({ message: "Only POST requests allowed" });
     }
}
