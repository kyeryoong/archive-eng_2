import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const database = (await connectDB).db(process.env.DATABASE);
    let result = await database.collection("counters").findOne(new ObjectId(process.env.LIKES_ID))

    res.status(200).json(result.visitors);
}