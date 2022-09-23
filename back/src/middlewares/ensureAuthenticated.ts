import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

import { AppError } from "../errors/AppError"

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository"

interface IPayLoad {
    sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if(!authHeader) {
        throw new AppError("Token missing")
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id} = verify(token, process.env.TOKEN_SECRET_KEY) as IPayLoad

        const usersRepository = new UsersRepository()

        const user = usersRepository.findById(user_id)

        if(!user) {
            throw new AppError("User does not exists!")
        }
        request.user = {
            id: user_id
        }
        next()
    } catch {
        throw new AppError("Invalid token")
    }
    
}
