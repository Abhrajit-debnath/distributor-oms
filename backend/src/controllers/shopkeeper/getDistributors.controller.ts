import { Response, Request, NextFunction } from "express";
import distributorService from "../../services/shopkeeper/getDistributors.service";
import { sendSucess } from "../../utils/responseHandler";
import { AppError } from "../../utils/AppError";

const distributorController = async (req: Request, res: Response, next: NextFunction) => {
    //  const userId = req.user.id
    const userId = 'ghfg'
    try {
        const distributors = await distributorService(userId)
        if (distributors.length === 0) {
            throw new AppError("No distributors found", 404)
        }
        return sendSucess(res, distributors, 200, "Distributors fetched sucessfully")
    } catch (error) {
        next(error)
    }

}

export default distributorController