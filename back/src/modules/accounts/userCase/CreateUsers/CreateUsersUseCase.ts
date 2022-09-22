import { inject, injectable } from "tsyringe"
import { hash } from "bcrypt"

import { AppError } from "../../../../errors/AppError"

import { IUsersRepository, ICreateUserDTO } from "../../repositories/IUsersRepository"

@injectable()
class CreateUsersUseCase  {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({name, email, password}: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if(userAlreadyExists){
            throw new AppError("User already exists")
        }

        const passwordHash = await hash(password, 8)

        await this.usersRepository.create({
            name, 
            email, 
            password: passwordHash
        })
    }
}

export { CreateUsersUseCase }