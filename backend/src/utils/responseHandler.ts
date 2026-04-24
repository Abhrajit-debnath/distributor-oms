import { Response } from "express"

const sendSucess = (res: Response, data: unknown, statusCode: number ,message?: string,) => {
    return res.status(statusCode).json({
        success: true,
        data,
        message: message || null
    })

}

const sendError = (res: Response, message: string, statusCode: number) => {
    return res.status(statusCode).json({
        success: false,
        message
    })

}

export { sendError, sendSucess }