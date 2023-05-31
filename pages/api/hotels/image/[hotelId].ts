import Amadeus from "amadeus";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getAmaduesToken } from "../../../../utils/getAmadeusToken";

const amadeus = new Amadeus({
     clientId: process.env.API_KEY,
     clientSecret: process.env.API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     const { hotelId } = req.query;
     // console.log("amadeus", amadeus.media, hotelId);
     try {
          const token = await getAmaduesToken();

          const response = await axios.get(
               `https://test.api.amadeus.com/v2/shopping/hotel/ACPARABA/media?apikey=${token}`,
               // {
               //      headers: { Authorization: token },
               // },
          );

          console.log("response", response);
          // const response = await amadeus.media.get({
          //      type: "hotel",
          //      hotelId: "BGLONBGB",
          //      category: "EXTERIOR",
          //      language: "EN",
          // });
          // console.log("response", response, hotelId);
          // const media = response.data;
          res.status(200).json({ media: "" });
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: (error as any).message });
     }
}
