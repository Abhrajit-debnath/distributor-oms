import { prisma } from "../../lib/prisma";
import type { signupDataType } from "../../schema/auth/auth.schema";
import { hashPassword } from "../../../helpers/auth/hashing.helper"

const signupService = async (userData: signupDataType) => {
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        })

        if (existingUser) {
            throw new Error("User already exists")
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
            throw new Error("Unable to create user")
        }

        const shopkeeperAccount = await prisma.shopkeeper.create({
            data: {
                userId: newUser.id,
            }
        })

        return newUser

    } catch (error) {

        throw error


    }

}

export default signupService