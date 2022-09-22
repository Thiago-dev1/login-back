import { container } from "tsyringe"

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"
import { IGamesRepository } from "../../modules/games/repositories/IGamesRepository"
import { GamesRepository } from "../../modules/games/repositories/implementations/GamesRepository"
import { IUsersTokensRepository } from "../../modules/accounts/repositories/IUsersTokensRepository"
import { UsersTokensRepository } from "../../modules/accounts/repositories/implementations/UsersTokensRepository"



container.registerSingleton<IUsersRepository> (
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IUsersTokensRepository> (
    "UsersTokensRepository",
    UsersTokensRepository
)

container.registerSingleton<IGamesRepository> (
    "GamesRepository",
    GamesRepository
)