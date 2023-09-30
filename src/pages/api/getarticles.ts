import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";

export interface ArticleProps {
  id: number;
  section:
    | "Architecture"
    | "Art"
    | "Global"
    | "Issue"
    | "Medical"
    | "Technology";
  title: string;
  year: 2021 | 2022 | 2023;
  month: 3 | 5 | 9 | 11;
  writer: string;
  chiefEditor: "Han Seunghyeon" | "Kim Minji";
  reviser: "Neil Alexander Cole" | "Jeff T. Vandeweerd";
  keyword: string;
  link: string;
}

export interface ErrorProps {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticleProps | ErrorProps>
) {
  try {
    const database = (await connectDB).db(process.env.DATABASE);
    let result = await database
      .collection("articles")
      .find()
      .sort({ id: 1 })
      .toArray();

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "error occured" });
  }
}
