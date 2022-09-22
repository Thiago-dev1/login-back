import { User_tokens } from "@prisma/client"
interface ICreateUserTokenDTO {
    user_id: string,
    expires_date: Date,
    refresh_token: string
}

interface IUsersTokensRepository {
    create({user_id, refresh_token, expires_date}: ICreateUserTokenDTO): Promise<User_tokens>
}

export { IUsersTokensRepository, ICreateUserTokenDTO }