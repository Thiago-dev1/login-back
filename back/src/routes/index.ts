import { Router } from "express"

import { userRoutes } from "./users.routes"
import { gamesRoutes } from "./games.routes"
import { authenticateRoutes } from "./authenticate.routes"

const router = Router()

router.use("/users", userRoutes)
router.use("/games", gamesRoutes)
router.use(authenticateRoutes)

export { router }