import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const database = (await connectDB).db(process.env.DATABASE);
    await database.collection("counters").findOneAndUpdate(
        { _id: new ObjectId(process.env.LIKES_ID) },
        { $inc: { "likes": 1 } }
    )

    res.status(200).json({})
}