import { Response, Request, NextFunction } from "express";
import { sendSucess } from "../../utils/responseHandler";
import { AppError } from "../../utils/AppError";
import orderStatusService from "../../services/distributor/patchOrderStatus.service";
import { orderStatusSchema } from "../../schema/order/order.schema";

const patchOrderStatusController = async (req: Request, res: Response, next: NextFunction) => {

    const validationResult = orderStatusSchema.safeParse(req.body)

    if (!validationResult.success) {
        return next(new AppError(validationResult.error.message, 400))
    }


    const orderStatus = validationResult.data

    const orderId = req.params.orderId as string

    if (!orderId) {
        return next(new AppError("orderId not defined", 409))
    }


    try {
        const order = await orderStatusService(orderId, orderStatus)
        if (!order) {
            throw new AppError("can't able to update order Status", 409)
        }
        return sendSucess(res, order, 200, "Order Status Updated sucessfully")
    } catch (error) {
        next(error)
    }

}

export default patchOrderStatusController