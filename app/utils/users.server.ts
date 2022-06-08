import bcrypt from 'bcryptjs'
import type { RegisterForm } from './types.server'
import { prisma } from './prisma.server'

//hash user password
//enter new user data to prisma => mongo
export const createUser = async (user: RegisterForm) => {
    const passwordHash = await bcrypt.hash(user.password, 10)
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            password: passwordHash,
            profile: {
                firstName: user.firstName,
                lastName: user.lastName,
            }
        }
    })
    return { id: newUser.id, email: user.email}
}