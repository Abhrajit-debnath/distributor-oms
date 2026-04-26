import { Response, Request, NextFunction } from "express";
import { sendSucess } from "../../utils/responseHandler";
import { AppError } from "../../utils/AppError";
import orderService from "../../services/distributor/getOrders.service";

const orderController = async (req: Request, res: Response, next: NextFunction) => {
    //  const userId = req.user.id
    const userId = 'sfasf' as string


    try {
        const orders = await orderService(userId)
        if (orders.length === 0) {
            throw new AppError("No orders found", 404)
        }
        return sendSucess(res, orders, 200, "Orders fetched sucessfully")
    } catch (error) {
        next(error)
    }

}

export default orderController