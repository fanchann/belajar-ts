import {type UserLoginResponse, UserWithShopResponse} from "../dto/responses.ts";
import {RefreshTokenRequest, type UserLoginRequest} from "../dto/requests.ts";

export interface AuthUsecase {
    CreateNewUser(req: any):Promise<any>|null;
    Login(req: UserLoginRequest): Promise<UserLoginResponse | null>;
    RefreshToken(refreshToken: RefreshTokenRequest): Promise<UserLoginResponse | null>
}

export interface UserUsecaase{
    SearchUserIncludeShopByUsername(username: string): Promise<{UserWithShopResponsems: UserWithShopResponse[]; ttl: number}>;
    GetUserIncludeShopByUsername(username: string): Promise<UserWithShopResponse | null>;
    GetAllUsersWithRelations(page: number, limit: number): Promise<{ users: UserWithShopResponse[]; total: number }>;
}

export interface ShopUsecase {
    GetShopById(shopId: number): Promise<{ shopId: number; shopName: string; products: { id: number; name: string; price: number }[] } | null>;
    SearchProductsByName(nameProduct: string): Promise<{ products: { id: number; name: string; price: number }[]; ttl: number }>;
}