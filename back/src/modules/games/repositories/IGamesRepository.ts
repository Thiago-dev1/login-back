import { Game } from "@prisma/client"

interface IGamesRepository {
    list(): Promise<Game[]>
}


export { IGamesRepository }