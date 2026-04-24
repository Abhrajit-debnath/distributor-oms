import { AppError } from "./AppError";
import { Request, Response, NextFunction } from "express";
import { sendError } from "./responseHandler";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        sendError(res, err.message, err.statusCode)
        return
    }

    console.error(err);

    sendError(res, "Internal server error", 500)
}

export default errorHandler