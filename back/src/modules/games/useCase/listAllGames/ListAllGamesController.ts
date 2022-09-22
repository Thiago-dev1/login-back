import { Request, Response } from "express"
import { container } from "tsyringe"

import { ListAllGamesUseCase } from "./ListAllGamesUseCase"

class ListAllGamesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listAllGamesUseCase = container.resolve(ListAllGamesUseCase)

        const games = await listAllGamesUseCase.execute()

        return response.json(games)
    }
}

export { ListAllGamesController }