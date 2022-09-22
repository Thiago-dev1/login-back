import { Router } from "express"

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"


import { ListAllGamesController } from "../modules/games/useCase/listAllGames/ListAllGamesController"

const gamesRoutes = Router()

const listAllGamesController = new ListAllGamesController()

gamesRoutes.use(ensureAuthenticated)

gamesRoutes.get("/", listAllGamesController.handle)


export { gamesRoutes }