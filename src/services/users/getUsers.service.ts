import { IUserReturn } from '../../interfaces/users.interfaces';
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity';
import { allUsersWithoutPassword } from '../../schemas/users.schemas';

export const getUsersService = async ():Promise<IUserReturn[]> => {

    
    const userRepository = AppDataSource.getRepository(User)
    
    const allUsers = await userRepository.find()
    const validatedUsers = await allUsersWithoutPassword.validate(allUsers, { stripUnknown: true})

    return validatedUsers
};
