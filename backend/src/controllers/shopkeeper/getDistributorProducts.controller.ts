import { Response, Request, NextFunction } from "express";
import getdistributorProductsService from "../../services/shopkeeper/getDistributorProducts.service";
import { sendSucess } from "../../utils/responseHandler";
import { AppError } from "../../utils/AppError";

const getdistributorProductsController = async (req: Request, res: Response, next: NextFunction) => {
    //  const userId = req.user.id
    const distributorId = req.params.distributorId as string

    if (!distributorId) {
        throw new AppError("distributorId not defined", 404)
    }

    try {
        const distributorProducts = await getdistributorProductsService(distributorId)
        if (distributorProducts.length === 0) {
            throw new AppError("No products found", 404)
        }
        return sendSucess(res, distributorProducts, 200, "Products fetched sucessfully")
    } catch (error) {
        next(error)
    }

}

export default getdistributorProductsController