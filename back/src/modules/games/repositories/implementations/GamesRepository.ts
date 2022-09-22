import { prisma } from "../../../../database/prismaClient"
import { Game } from "@prisma/client";

import { IGamesRepository } from "../IGamesRepository"


class GamesRepository implements IGamesRepository {
    async list(): Promise<Game[]> {
        const games = await prisma.game.findMany({})

        return games
    }
    
}

export { GamesRepository }