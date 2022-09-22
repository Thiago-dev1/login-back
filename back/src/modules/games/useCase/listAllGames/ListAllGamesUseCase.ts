import { Game } from "@prisma/client"
import { inject, injectable } from "tsyringe"

import { IGamesRepository } from "../../repositories/IGamesRepository"


@injectable()
class ListAllGamesUseCase {
    constructor(
        @inject("GamesRepository")
        private gameRepository: IGamesRepository
    ) {}

    async execute(): Promise<Game[]> {
        const games = await this.gameRepository.list()

        return games
    }
}

export { ListAllGamesUseCase }