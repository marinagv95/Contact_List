import { Repository } from "typeorm";
import { AppError } from "../../error";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/users.interface";
import User from "../../entities/user.entity";
import { userSchemaResponse } from "../../schemas/usersSchema.schema";

const retrieveUserService = async (userId: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const returnUser: TUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};

export default retrieveUserService;
