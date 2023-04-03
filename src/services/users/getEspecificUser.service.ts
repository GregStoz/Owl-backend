import { userWithoutPasswordSerializer } from "../../schemas/users.schemas";
import { IUserReturn } from "../../interfaces/users.interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/errors";

export const getEspecificUserService = async (
  idUser: string
): Promise<IUserReturn> => {

  const userRepository = AppDataSource.getRepository(User);
  
  const allUsers = await userRepository.findOneBy({ id: idUser });

  if (!allUsers) {
    throw new AppError("User not found", 404);
  }

  const validatedUser = await userWithoutPasswordSerializer.validate(allUsers, {
    stripUnknown: true,
  });

  return validatedUser;
};
