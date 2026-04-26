import { prisma } from "../../lib/prisma"

const distributorProductsService = async (distributorId: string) => {
    const distributorProducts = await prisma.product.findMany({
        where: { distributorId: distributorId },
    })

    return distributorProducts
}

export default distributorProductsService