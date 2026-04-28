import z from "zod"

export const roleEnum = ["SUPERADMIN", "SHOPKEEPER","DISTRIBUTOR"]

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be atleast 8 characters long").refine((val) => /[A-Z]/.test(val), "Password must contain atleast one uppercase character").refine((val) => val.match(/[a-z]/), "Password must contain atleast one lowercase character")
        .refine((val) => /[0-9]/.test(val), "Password must contain atleast one number")
        .refine((val) => /[^A-Za-z0-9]/.test(val), "Password must contain atleast one special character"),
    shopName: z.string().max(20,"Shopname should be in between 20 characters")
})


const signinSchema = z.object({
    email: z.email(),
    password: z.string(),
    role: z.enum(roleEnum)
})

type signupDataType = z.infer<typeof signupSchema>
type signinDataType = z.infer<typeof signinSchema>

export { signupSchema, signinSchema }

export type { signupDataType, signinDataType }