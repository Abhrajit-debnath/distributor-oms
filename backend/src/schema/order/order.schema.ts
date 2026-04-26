import z from "zod"

const statusEnum = ["ACCEPTED", "DELIVERED", "PENDING"] as const

const orderSchema = z.object({
    productId: z.string(),
    orderQuantity: z.number(),
    orderPrice: z.number(),
})

const orderStatusSchema = z.object({
    orderStatus: z.enum(statusEnum),
})


type orderDataType = z.infer<typeof orderSchema>
type orderStatusDataType = z.infer<typeof orderStatusSchema>

export { orderSchema, orderStatusSchema }

export type { orderDataType, orderStatusDataType }