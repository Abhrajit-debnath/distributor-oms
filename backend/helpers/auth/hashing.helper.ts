import bcrypt from "bcrypt"


const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10)
}

const verifyPassword = async (password: string, hashedPassword: string): Promise<Boolean> => {
    return await bcrypt.compare(password, hashedPassword)
}


export { hashPassword, verifyPassword }