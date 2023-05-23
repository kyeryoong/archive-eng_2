import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";


export interface LikesProps {
    likes: number
}


export interface ErrorProps {
    message: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<LikesProps | ErrorProps>) {
    try {
        const database = (await connectDB).db(process.env.DATABASE);
        let result = await database.collection("counters").findOne(new ObjectId(process.env.COUNTER_ID));

        res.status(200).json(result.visitors);
    }

    catch (error) {
        console.error(error);
        res.status(404).json({ message: "error occured" });
    }
}