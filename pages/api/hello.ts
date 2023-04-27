import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method === "POST") {
          console.log(req.body);
          // handle the request body here
          res.status(200).json({ message: "POST request received" });
     } else {
          res.status(400).json({ message: "Only POST requests allowed" });
     }
}
