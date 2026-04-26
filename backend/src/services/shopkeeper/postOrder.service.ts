import { prisma } from "../../lib/prisma"
// import type { orderDataType } from "../../schema/order/order.schema"

type orderDataType = {
    productId: string,
    shopkeeperId: string,
    orderPrice: number,
    orderQuantity: number,
    distributorId:string
}


const orderService = async (order: orderDataType) => {
    const distributorProducts = await prisma.order.create({
        data: {
            productId: order.productId,
            shopkeeperId: order.shopkeeperId,
            orderPrice: order.orderPrice,
            orderQuantity: order.orderQuantity,
            distributorId:order.distributorId
        }
    })

    return distributorProducts
}

export default orderService