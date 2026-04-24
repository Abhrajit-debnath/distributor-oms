import JWT from "jsonwebtoken"

type payloadType = {
    id: string,
    role: string
}

const generateToken = (payload: payloadType) => {
    JWT.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: '7D'
    })
}

export { generateToken }