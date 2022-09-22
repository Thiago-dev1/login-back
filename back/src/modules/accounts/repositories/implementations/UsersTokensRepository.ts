import { prisma } from  "../../../../database/prismaClient"
import { User_tokens } from "@prisma/client";
import { ICreateUserTokenDTO, IUsersTokensRepository } from "../IUsersTokensRepository"

class UsersTokensRepository implements IUsersTokensRepository {
    async create({ user_id, refresh_token, expires_date }: ICreateUserTokenDTO): Promise<User_tokens> {
        const userToken = await prisma.user_tokens.create({
            data: {
                user_id, 
                refresh_token, 
                expires_date
            }
        })

        return userToken
    }

}


export { UsersTokensRepository }