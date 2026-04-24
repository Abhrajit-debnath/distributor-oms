import z from "zod"

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be atleast 8 characters long").refine((val) => /[A-Z]/.test(val), "Password must contain atleast one uppercase character").refine((val) => val.match(/[a-z]/), "Password must contain atleast one lowercase character")
        .refine((val) => /[0-9]/.test(val), "Password must contain atleast one number")
        .refine((val) => /[^A-Za-z0-9]/.test(val), "Password must contain atleast one special character"),
})

type signupDataType = z.infer<typeof signupSchema>

export { signupSchema }

export type { signupDataType }