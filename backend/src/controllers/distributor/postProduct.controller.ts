import { Response, Request, NextFunction } from "express";
import { sendSucess } from "../../utils/responseHandler";
import { AppError } from "../../utils/AppError";
import productService from "../../services/distributor/postProduct.service";
import { productSchema } from "../../schema/product/product.schema";

const productController = async (req: Request, res: Response, next: NextFunction) => {

    const validationResult = productSchema.safeParse(req.body)

    if (!validationResult.success) {
        return next(new AppError(validationResult.error.message, 400))
    }


    // const { id: distributorId } = 'hgh'
    const distributorId = 'jhjd'

    const productData = {
        ...validationResult.data,
        distributorId
    }

    try {
        const product = await productService(productData)
        if (!product) {
            throw new AppError("can't able to upload product", 409)
        }
        return sendSucess(res, product, 200, "Product posted sucessfully")
    } catch (error) {
        next(error)
    }

}

export default productController