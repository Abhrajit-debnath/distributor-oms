import { prisma } from "../../lib/prisma";
import type { signupDataType } from "../../schema/auth/auth.schema";
import { hashPassword } from "../../helpers/auth/hashing.helper"
import { AppError } from "../../utils/AppError";

const signupService = async (userData: signupDataType) => {
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        })

        if (existingUser) {
            throw new AppError("User already exists",409)
        }


        const newUser = await prisma.user.create({
            data: {
                email: userData.email,
                role: 'SHOPKEEPER',
                password: await hashPassword(userData.password),
            },
            omit: {
                password: true
            }
        })
        


        if (!newUser) {
            throw new AppError("Unable to create user",500)
        }

        const shopkeeperAccount = await prisma.shopkeeper.create({
            data: {
                userId: newUser.id,
                shopName : userData.shopName
            }
        })

        return newUser

    } catch (error) {

        throw error


    }

}

export default signupService