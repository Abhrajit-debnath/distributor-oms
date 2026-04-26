import { prisma } from "../../lib/prisma"
import type { orderStatusDataType } from "../../schema/order/order.schema"

const patchOrderStatus = async (orderId: string, orderData: orderStatusDataType) => {
    const order = await prisma.order.update({
        where: { id: orderId },
        data: {
            orderStatus: orderData.orderStatus
        }
    })

    return order
}

export default patchOrderStatus