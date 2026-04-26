import z from "zod"

const productSchema = z.object({
    name: z.string(),
    image: z.string(),
    price: z.number(),
    category: z.string(),
    isNewArrival: z.boolean(),
    distributorId : z.string().optional()
})


type productDataType = z.infer<typeof productSchema>

export { productSchema }

export type { productDataType }