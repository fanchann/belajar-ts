import {Context} from "hono";

export interface HealthCheckHandler {
    HealthCheck(ctx: Context): Promise<Response>;
}

export interface AuthHandler {
    Login(ctx: Context): Promise<Response>;
    RefreshToken(ctx: Context): Promise<Response>;
}

export interface UsersHandler {
    SearchUserIncludeShopByUsername(ctx: Context): Promise<Response>;
    GetAllUsersWithRelations(ctx: Context): Promise<Response>;
    GetUserInclueShopByUsername(ctx: Context): Promise<Response>;
}

