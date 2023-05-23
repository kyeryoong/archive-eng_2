import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";


export interface ErrorProps {
    message: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<ErrorProps>) {
    try {
        const database = (await connectDB).db(process.env.DATABASE);
        await database.collection("counters").findOneAndUpdate(
            { _id: new ObjectId(process.env.COUNTER_ID) },
            { $inc: { "likes": 1 } }
        )

        res.status(200);
    }

    catch (error) {
        console.error(error);
        res.status(404).json({ message: "error occured" });
    }
}