import { Response, Request, NextFunction } from "express";
import { signinSchema } from "../../schema/auth/auth.schema";
import { sendSucess } from "../../utils/responseHandler";
import signinService from "../../services/auth/signin.service";
import { generateToken } from "../../helpers/auth/token.helper"
import { AppError } from "../../utils/AppError";

const singinController = async (req: Request, res: Response, next: NextFunction) => {
    const validationResult = signinSchema.safeParse(req.body)

    if (!validationResult.success) {
        return next(new AppError(validationResult.error.message, 400))
    }
    try {
        const user = await signinService(validationResult.data)

        const payload = {
            id: user.id,
        }

        const token = await generateToken(payload)

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 1000
        })


        return sendSucess(res, user, 200, "Login successful")


    } catch (error) {
        next(error)
    }
}

export default singinController