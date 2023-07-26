import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";

const ensureIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response<any, Record<string, any>>> => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID is missing" });
  }

  const userRepository = AppDataSource.getRepository(User);
  const existingUser = await userRepository.findOneBy({ id: Number(id) });

  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  next();
};

export default ensureIdExistsMiddleware;
