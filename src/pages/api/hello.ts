import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: process.env.COUNTER_ID });
}