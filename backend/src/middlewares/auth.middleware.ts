import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import JWT, { JwtPayload } from "jsonwebtoken"

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const token = req.cookies.token

    if (!token) {
        return next(new AppError("Not Authenticated", 401))
    }

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET!) as JwtPayload

        if (!decoded.id) {
            return next(new AppError("Invalid token payload", 401));
        }

        req.user = {
            id: decoded.id,
            role:decoded.role
        }

        return next()
    } catch (error) {
        return next(new AppError("Invalid or expired token", 401));
    }

}

export default authMiddleware