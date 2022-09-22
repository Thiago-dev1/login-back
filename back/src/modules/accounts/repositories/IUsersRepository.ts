import { User } from "@prisma/client"

interface ICreateUserDTO {
    name: string,
    email: string,
    password: string
}

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
}

export { IUsersRepository, ICreateUserDTO }