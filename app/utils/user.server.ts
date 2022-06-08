import bcrypt from "bcryptjs";
import { RegisterForm } from "./types.server";
import { prisma } from "./prisma.server";

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    },
  });
  return { id: newUser.id, email: user.email };
};

export const getOtherUsers = async (userId: string) => {
  //grab all other users from db
  let usersFromDb = await prisma.user.findMany({
    where: {
      id: {not: userId},
    },
    orderBy: {
      profile: {
        firstName: 'asc',
      }
    }
  })
//delete hashed password from user object
  return usersFromDb.map((user) => {
    // @ts-ignore
    delete user.password
    return user
  })
}
