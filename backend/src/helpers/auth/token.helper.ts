import JWT from "jsonwebtoken"
import { Role } from "../../types/custom/user.types"

type payloadType = {
    id: string,
    role: Role
}

const generateToken = (payload: payloadType) => {
    return JWT.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: '7D'
    })
}

export { generateToken }