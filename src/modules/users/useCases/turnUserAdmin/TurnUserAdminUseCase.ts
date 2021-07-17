import { ErrorHandler } from "../../../../Error/ErrorHandler";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new ErrorHandler("user not found", 404);
    }
    const userEdited = this.usersRepository.turnAdmin(user);

    return userEdited;
  }
}

export { TurnUserAdminUseCase };
