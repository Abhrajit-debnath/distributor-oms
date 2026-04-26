import { Response, Request, NextFunction } from "express";
import { signupSchema } from "../../schema/auth/auth.schema";
import { sendSucess } from "../../utils/responseHandler";
import signupService from "../../services/auth/signup.service";
import { AppError } from "../../utils/AppError";

const signupContoller = async (req: Request, res: Response, next: NextFunction) => {
    const validationResult = signupSchema.safeParse(req.body)

    if (!validationResult.success) {
        return next(new AppError(validationResult.error.message, 400))
    }

    try {
        const user = await signupService(validationResult.data)
        return sendSucess(res, user, 201, "User created successfully")
    } catch (error) {
        next(error)
    }
}

export default signupContoller