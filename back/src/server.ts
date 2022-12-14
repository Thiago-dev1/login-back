import "reflect-metadata"

import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import cors from "cors"

import "./shared/container"

import { router } from "./routes/index"
import { AppError } from "./errors/AppError"

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
})

app.listen(3333, () => console.log("Server is running"))