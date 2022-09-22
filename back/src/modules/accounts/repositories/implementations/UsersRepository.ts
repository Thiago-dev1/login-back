
import { prisma } from "../../../../database/prismaClient"

import { User } from "@prisma/client";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository"

class UsersRepository implements IUsersRepository {


    async create(data: ICreateUserDTO): Promise<void> {
        await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        })
    }
    async findByEmail(email: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user
    }
    async findById(id: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user
    }
}

export { UsersRepository }