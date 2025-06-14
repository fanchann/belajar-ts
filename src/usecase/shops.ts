import type {ShopUsecase} from "./interfaces.ts";
import type {ShopRepository} from "../repo/interfaces.ts";

export class ShopsUsecaseImpl implements ShopUsecase{
    private shopRepository: ShopRepository;

    constructor(shopRepository: ShopRepository) {
        this.shopRepository = shopRepository;
    }

    async GetShopById(shopId: number): Promise<{ shopId: number; shopName: string; products: { id: number; name: string; price: number }[] } | null> {
        const shop = await this.shopRepository.GetShopById(shopId);
        if (!shop) return null;

        return {
            shopId: shop.id,
            shopName: shop.nama || "Unknown Shop",
            products: (shop.products || []).map((p) => ({
                id: p.id,
                name: p.name || "Unknown Product",
                price: p.price || 0,
            }))
        };
    }

    async SearchProductsByName(nameProduct: string): Promise<{ products: { id: number; name: string; price: number }[]; ttl: number }> {
        const result = await this.shopRepository.SearchProductsByName(nameProduct);
        return {
            products: result.products.map(product => ({
                id: product.id,
                name: product.nama,
                price: product.harga
            })),
            ttl: result.ttl
        };
    }
}