import {PrismaClient} from "@prisma/client";
import {describe, it} from "@jest/globals";
import {ShopRepositoryImpl} from "../../src/repo/shops.ts";



describe("search product", () => {
    const prisma = new PrismaClient();
    const shopRepo = new ShopRepositoryImpl(prisma);

    it("valid product",async () => {
        try {
            const {products,ttl} = await shopRepo.SearchProductsByName("Tuna");
            console.log(products, ttl);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    })
})
