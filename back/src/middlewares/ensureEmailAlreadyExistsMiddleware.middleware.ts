import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";
import Contact from "../entities/contact.entity";
const ensureEmailOrTelephoneAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const validateEmail = req.body;
  req.body = validateEmail;
  const { email, telephone } = req.body;
  if (email) {
    const contactRepository = AppDataSource.getRepository(Contact);
    const existingEmail = await contactRepository.findOne({
      where: { email },
    });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }
  }

  if (telephone) {
    const contactRepository = AppDataSource.getRepository(Contact);
    const existingTelephone = await contactRepository.findOne({
      where: { telephone },
    });
    if (existingTelephone) {
      return res.status(409).json({ message: "Telephone  already exists" });
    }
  }
  return next();
};
export default ensureEmailOrTelephoneAlreadyExistsMiddleware;
