import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const database = (await connectDB).db(process.env.DATABASE);
    let result = await database.collection("likes").find().toArray();

    console.log(result);

    res.status(200).json(result);
}