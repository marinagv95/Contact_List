import { Repository } from "typeorm";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../error";
import { TLoginRequest } from "../../interfaces/login.interface";
import User from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/users.interface";

const createTokenService = async (
  loginData: TLoginRequest
): Promise<{ token: string; user: TUserResponse }> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await bcrypt.compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign({ userName: user.name }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });

  const userData: TUserResponse = {
    name: user.name,
    email: user.email,
    id: user.id,
    telephone: user.telephone,
    createdAt: user.createdAt,
  };

  return { token, user: userData };
};

export default createTokenService;
