import {PrismaClient} from "@prisma/client";
import {describe, it} from "@jest/globals";
import {UsersRepositoryImpl} from "../../src/repo/users.ts";



describe("get shop user by username user", () => {
    const prisma = new PrismaClient();
    const usersRepo = new UsersRepositoryImpl(prisma);

    it("fetch by username",async () => {
        try {
            const user = await usersRepo.GetShopByUsernameUser("xpGTsjY");
            console.log(user);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    })
})

describe("get all users with relations", () => {
    const prisma = new PrismaClient();
    const usersRepo = new UsersRepositoryImpl(prisma);

    it("fetch all users with relations", async () => {
        try {
            const {users, total} = await usersRepo.GetAllUsersWithRelations(1, 10);
            console.log(users, total);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    });
});