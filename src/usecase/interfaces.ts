import {type UserLoginResponse, UserWithShopResponse} from "../dto/responses.ts";
import {RefreshTokenRequest, type UserLoginRequest} from "../dto/requests.ts";

export interface AuthUsecase {
    Login(req: UserLoginRequest): Promise<UserLoginResponse | null>;
    RefreshToken(refreshToken: RefreshTokenRequest): Promise<UserLoginResponse | null>
}

export interface UserUsecaase{
    SearchUserIncludeShopByUsername(username: string): Promise<{UserWithShopResponsems: UserWithShopResponse[]; ttl: number}>;
    GetUserIncludeShopByUsername(username: string): Promise<UserWithShopResponse | null>;
    GetAllUsersWithRelations(page: number, limit: number): Promise<{ users: UserWithShopResponse[]; total: number }>;
}