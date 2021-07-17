import { ErrorHandler } from "../../../../Error/ErrorHandler";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const checkUser = this.usersRepository.findByEmail(email);
    if (checkUser) {
      throw new ErrorHandler("user exists", 400);
    }

    const newUser = this.usersRepository.create({ name, email });
    return newUser;
  }
}

export { CreateUserUseCase };
