import { prisma } from "../../lib/prisma";
import type { signinDataType, roleEnum } from "../../schema/auth/auth.schema";
import { verifyPassword } from "../../helpers/auth/hashing.helper"
import { AppError } from "../../utils/AppError";

const signinService = async (userData: signinDataType) => {

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        })

        const isValidPassword = user ? await verifyPassword(userData.password, user.password) : false


        if (!user || !isValidPassword || user.role !== userData.role) {
            throw new AppError("Invalid credentials", 401);
        }

        const { password, ...safeUser } = user

        return safeUser

    } catch (error) {
        throw error
    }

}

export default signinService