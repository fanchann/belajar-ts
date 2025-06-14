import type {ShopRepository} from "./interfaces.ts";
import {PrismaClient, products, shop} from "@prisma/client";

export class ShopRepositoryImpl implements ShopRepository {
    private prisma: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prisma = prismaClient;
    }

    async GetShopById(shopId: number): Promise<shop | null> {
        // Implementation to get shop by ID
        return this.prisma.shop.findUnique({
            where: { id: shopId },
            include:{products: true}
        })
    }

    async SearchProductsByName(nameProduct: string): Promise<{ products: products[]; ttl: number }> {
        // Implementation to search products by name
        const products = await this.prisma.products.findMany({
            where: {
                nama: {
                    contains: nameProduct,
                }
            }
        });
        const ttlProductFound = products.length;

        return { products, ttl: ttlProductFound };
    }
}