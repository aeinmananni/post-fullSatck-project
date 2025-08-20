import { GetPostsRepo } from "../repositories/posts.repositories";
import { asyncHandler } from "../utils";
import { Request,Response } from "express";




export const handelPostController = asyncHandler(async (req: Request, res: Response) => {
  const result = await GetPostsRepo();

  res.status(200).json(result);
}); 