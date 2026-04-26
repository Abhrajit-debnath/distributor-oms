import { Response, Request, NextFunction } from "express";
import { sendSucess } from "../../utils/responseHandler";
import { AppError } from "../../utils/AppError";
import { orderSchema } from "../../schema/order/order.schema";
import orderService from "../../services/shopkeeper/postOrder.service";

const orderController = async (req: Request, res: Response, next: NextFunction) => {

    const validationResult = orderSchema.safeParse(req.body)


    if (!validationResult.success) {
        return next(new AppError(validationResult.error.message, 400))
    }

    const distributorId = req.params.distributorId as string
    // const { id: shopKeeperId } = req.user
    

    const orderRequest = {
        ...validationResult.data,
        distributorId,
        shopkeeperId : '123',
    }
    try {
        const order = await orderService(orderRequest)
        if (!order) {
            throw new AppError("can't able to place order", 409)
        }
        return sendSucess(res, order, 200, "Order placed sucessfully")
    } catch (error) {
        next(error)
    }

}

export default orderController