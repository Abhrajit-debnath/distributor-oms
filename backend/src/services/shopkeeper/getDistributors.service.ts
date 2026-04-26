import { prisma } from "../../lib/prisma"

const getDistributorsService = async (userId: string) => {
    const distributors = await prisma.distributorShopkeeper.findMany({
        where: { shopkeeperId: userId },
        include: { distributor: true }
    })

    return distributors
}

export default getDistributorsService