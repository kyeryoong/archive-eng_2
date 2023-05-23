import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const database = (await connectDB).db(process.env.DATABASE);
    await database.collection("counters").findOneAndUpdate(
        { _id: new ObjectId(process.env.COUNTER_ID) },
        { $inc: { "visitors": 1 } }
    )

    res.status(200).json({})
}