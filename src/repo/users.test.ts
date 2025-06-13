import {PrismaClient} from "@prisma/client";
import {UsersRepositoryImpl} from "./users";
import {describe, it} from "@jest/globals";



describe("get shop user by username user", () => {
    const prisma = new PrismaClient();
    const usersRepo = new UsersRepositoryImpl(prisma);
    it("fetch by username",async () => {
        try {
            const user = await usersRepo.GetShopByUsernameUser("admin");
            console.log(user);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    })
})