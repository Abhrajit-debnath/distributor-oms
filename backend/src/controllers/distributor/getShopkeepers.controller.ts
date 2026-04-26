import { Response, Request, NextFunction } from "express";
import shopkeeperService from "../../services/shopkeeper/getDistributorProducts.service";
import { sendSucess } from "../../utils/responseHandler";
import { AppError } from "../../utils/AppError";

const shopkeeperController = async (req: Request, res: Response, next: NextFunction) => {
    //  const userId = req.user.id
    const userId = 'sfasf'


    try {
        const shopkeepers = await shopkeeperService(userId)
        if (shopkeepers.length === 0) {
            throw new AppError("No shopkeepers found", 404)
        }
        return sendSucess(res, shopkeepers, 200, "Shopkeepers fetched sucessfully")
    } catch (error) {
        next(error)
    }

}

export default shopkeeperController