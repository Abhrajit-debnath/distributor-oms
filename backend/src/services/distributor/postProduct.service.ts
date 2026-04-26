import { prisma } from "../../lib/prisma"
import type { productDataType } from "../../schema/product/product.schema"

const postProductService = async (productData: productDataType) => {
    const product = await prisma.product.create({
        data: {
            name: productData.name,
            price: productData.price,
            distributorId:productData.distributorId!,
            category: productData.category,
            isNewArrival: productData.isNewArrival,
            image:productData.image
        }

    })

    return product
}

export default postProductService