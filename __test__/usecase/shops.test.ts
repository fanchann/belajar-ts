import {PrismaClient, shop} from "@prisma/client";
import {describe, it} from "@jest/globals";
import {ShopRepositoryImpl} from "../../src/repo/shops.ts";
import {ShopsUsecaseImpl} from "../../src/usecase/shops.ts";



describe("set product by name", () => {
    const prisma = new PrismaClient();
    const shopRepo = new ShopRepositoryImpl(prisma);
    const shopUsecase = new ShopsUsecaseImpl(shopRepo);

    it("get products by name",async () => {
        try {
            const {products,ttl} = await shopUsecase.SearchProductsByName("Keyboard");
            console.log(products,ttl);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    })
})

describe("get shop by id", () => {
    const prisma = new PrismaClient();
    const shopRepo = new ShopRepositoryImpl(prisma);
    const shopUsecase = new ShopsUsecaseImpl(shopRepo);

    it("should return shop with products", async () => {
        const shop = await shopUsecase.GetShopById(30);

        if (shop) {
            const { shopId, shopName, products } = shop;
            console.log(shopId, shopName);
            products.forEach(product => {
                console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
            });
        } else {
            console.log("Shop not found");
        }
    });
});