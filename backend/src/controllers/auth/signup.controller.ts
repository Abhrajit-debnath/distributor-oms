import { Response, Request, NextFunction } from "express";
import { signupSchema } from "../../schema/auth/auth.schema";
import { sendError, sendSucess } from "../../utils/responseHandler";
import signupService from "../../services/auth/signup.service";
import { AppError } from "../../utils/AppError";

const signupContoller = async (req: Request, res: Response, next: NextFunction) => {
    const validationResult = signupSchema.safeParse(req.body)

    if (!validationResult.success) {
        sendError(res, validationResult.error.message, 400)
        return
    }

    try {
        const user = await signupService(validationResult.data)
        sendSucess(res, user, "User created successfully", 201)
    } catch (error) {
        next(new AppError(error instanceof Error ? error.message : "Unknown error", 500))
    }
}

export default signupContoller