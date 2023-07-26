import { Repository } from "typeorm";
import  User  from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/users.interface";
import { listUserSchema } from "../../schemas/usersSchema.schema";

const listUserService = async (): Promise<TUserResponse[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();

  const returnUsers: TUserResponse[] = listUserSchema.parse(users);

  return returnUsers;
};

export default listUserService;
