import { prisma } from "../../lib/prisma"

const getShopkeepersService = async (userId: string) => {
    const shopkeepers = await prisma.distributorShopkeeper.findMany({
        where: { distributorId: userId },
        include: { shopkeeper: true }
    })

    return shopkeepers
}

export default getShopkeepersService