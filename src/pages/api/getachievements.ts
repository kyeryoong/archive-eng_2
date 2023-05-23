import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";


export interface TextProps {
    mainText: string,
    subText: string
}


export interface AchievementsProps {
    id: number,
    korTitle: string,
    engTitle: string,
    info: string,
    start: string,
    finish: string,
    text: TextProps[]
}


export interface ErrorProps {
    message: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<AchievementsProps | ErrorProps>) {
    try {
        const database = (await connectDB).db(process.env.DATABASE);
        let result = await database.collection("achievements").find().sort({ id: 1 }).toArray();

        res.status(200).json(result);
    }

    catch (error) {
        console.error(error);
        res.status(404).json({ message: "error occured" });
    }
}