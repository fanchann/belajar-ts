import {PrismaClient} from "@prisma/client";
import {describe, it} from "@jest/globals";
import {UsersRepositoryImpl} from "../../src/repo/users.ts";
import {UserUsecaseImpl} from "../../src/usecase/users.ts";



describe("get shop user by username user", () => {
    const prisma = new PrismaClient();
    const usersRepo = new UsersRepositoryImpl(prisma);
    const UserUsecase = new UserUsecaseImpl(usersRepo);

    it("get shop user by username",async () => {
        try {
            const user = await UserUsecase.SearchUserIncludeShopByUsername("xpGTsjY");
            console.log(user?.toJson());
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    })
})