import { NextFunction, Request, Response } from "express"
import { AppError } from "../utils/AppError"
import { roles } from "../config/roles.json"
import { Role } from "../types/custom/user.types"
const authorizeMiddleware = (...permissions: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {


        const userRole: Role = req.user?.role ?? "undefined"



        if (!userRole) {
            return next(new AppError("Unauthenticated", 401))
        }

        const userPermissions = roles.map((role) => {
            if (userRole === role.name) {
                return role.permissions
            }
        })


        const isAuthorize = userPermissions.includes(permissions)

        if (!isAuthorize) {
            return next(new AppError("Access Denied", 403))
        } else {
            return next()
        }

    }
}

export default authorizeMiddleware