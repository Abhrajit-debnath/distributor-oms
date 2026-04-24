import { Response } from "express"

const sendSucess = (res: Response, data: unknown, message: string, statusCode: number) => {
    res.status(statusCode).json({
        sucess: true,
        data,
        message
    })

}

const sendError = (res: Response, message: string, statusCode: number) => {
    res.status(statusCode).json({
        sucess: false,
        message
    })

}

export { sendError, sendSucess }