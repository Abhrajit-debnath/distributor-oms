import { prisma } from "../../lib/prisma"

const getOrdersService = async (userId: string) => {
    const orders = await prisma.order.findMany({
        where: { distributorId: userId },

    })

    return orders
}

export default getOrdersService