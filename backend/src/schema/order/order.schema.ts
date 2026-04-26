import z from "zod"

const orderSchema = z.object({
    productId:z.string(),
    orderQuantity: z.number(),
    orderPrice: z.number(),
})


type orderDataType = z.infer<typeof orderSchema>

export { orderSchema }

export type { orderDataType }