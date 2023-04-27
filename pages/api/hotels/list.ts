import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import Amadeus from "amadeus";

const amadeus = new Amadeus({
     clientId: process.env.API_KEY,
     clientSecret: process.env.API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method === "POST") {
          //   console.log("ama", amadeus.shopping);
          //   const body = JSON.parse(req.body);
          //   console.log("body", req.body);
          // handle the request body here
          try {
               //    axios.get(`${baseUrl}/shopping/hotel-offers`);
               //    const confiq = {
               //         params: {
               //              latitude: req.body.coordinates.lat,
               //              longitude: req.body.coordinates.lng,
               //         },
               //         headers: {
               //              Authorization: `Bearer ${process.env.API_KEY}`,
               //              "Content-Type": "application/json",
               //         },
               //    };
               //    const response = await axios.get(
               //         `${process.env.baseUrlV1}/reference-data/locations/hotels/by-geocode`,
               //         confiq,
               //    );

               //    console.log("response", response);
               //    amadeus.referenceData.locations.hotels
               //         .byGeocode({
               //              latitude: 48.856614,
               //              longitude: 2.3522219,
               //              //  radius: 5,
               //              //  radiusUnit: "KM",
               //         })
               //         .then((response) => {
               //              const hotels = response.data;
               //              console.log(hotels);
               //         })
               //         .catch((error) => {
               //              console.log(error);
               //         });
               //    const response = amadeus.shopping.hotel_offers.get({
               //         latitude: 48.8566,
               //         longitude: 2.3522,
               //         radius: 5,
               //         checkInDate: "2023-05-01",
               //         checkOutDate: "2023-05-05",
               //         adults: 1,
               //    });
               //    console.log("response", response);
               //    const response = await amadeus.referenceData.locations.hotels.byGeocode.get({
               //         // latitude: req.body.coordinates.lat,
               //         // longitude: req.body.coordinates.lng,
               //         latitude: 48.856614,
               //         longitude: 2.3522219,
               //    });
               //    console.log("response", response.data);

               const reaponse = await amadeus.shopping.hotelOffersSearch.get({
                    // latitude: 48.856614,
                    // longitude: 2.3522219,
                    hotelIds: ["RTCFRMER", "HSPARBTS", "ACPARD83", "ACPARA04", "ACPARA73"],
                    // radius: 5,
                    checkInDate: "2023-05-01",
                    checkOutDate: "2023-05-05",
                    adults: 1,
               });

               console.log("response", reaponse.data);
               res.status(200).json({
                    status: true,
                    message: "Fetched Successfully",
                    // data: response.data,
               });
          } catch (err) {
               console.log("aoi error", err as any);
               res.status(400).json({
                    status: false,
                    message: (err as any)?.description?.[0].title || "Something went wrong",
               });
          }
     } else {
          res.status(400).json({ message: "Only POST requests allowed" });
     }
}
