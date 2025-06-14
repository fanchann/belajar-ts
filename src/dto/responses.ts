export class UserLoginResponse{
    constructor(
        public userId: string,
        public username: string,
        public token: string,
        public refreshToken: string,
        public expiresIn: number
    ) {}

    public toJson(){
        return {
            userId: this.userId,
            username: this.username,
            token: this.token,
            refreshToken: this.refreshToken,
            expiresIn: this.expiresIn
        };
    }
}

export class UserWithShopResponse {
    constructor(
        public userId: number,
        public username: string,
        public email: string,
        public shopName?: string,
        public shopId?: string
    ) {}

    public toJson() {
        return {
            userId: this.userId,
            username: this.username,
            email: this.email,
            shopName: this.shopName,
            shopId: this.shopId
        };
    }
}

export class ShopWithProductsResponse {
    constructor(
        public shopId: number,
        public shopName: string,
        public products: { id: number; name: string; price: number }[]
    ) {}

    public toJson() {
        return {
            shopId: this.shopId,
            shopName: this.shopName,
            products: this.products
        };
    }
}