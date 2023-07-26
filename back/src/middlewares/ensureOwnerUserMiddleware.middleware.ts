import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const ensureOwnerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id = parseInt(res.locals.userId);
  const UserId = parseInt(req.params.id);

  if (id !== UserId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
export default ensureOwnerUserMiddleware;
