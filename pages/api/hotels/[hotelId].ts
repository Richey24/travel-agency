import Amadeus from "amadeus";
import { NextApiRequest, NextApiResponse } from "next";

const amadeus = new Amadeus({
     clientId: process.env.API_KEY,
     clientSecret: process.env.API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     const { hotelId } = req.query;
     try {
          const response = await amadeus.shopping.hotelMedia({ hotelId });
          const media = response.data;
          res.status(200).json({ media });
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: (error as any).message });
     }
}
