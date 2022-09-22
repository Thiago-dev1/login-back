import { Router } from "express"

import { CreateUsersController } from "../modules/accounts/userCase/CreateUsers/CreateUsersController"

const userRoutes = Router()

const createUsersController = new CreateUsersController()

userRoutes.post("/", createUsersController.handle)

export { userRoutes }