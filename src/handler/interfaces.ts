import {Context} from "hono";

export interface AuthHandler {
    Login(ctx: Context): Promise<Response>;
    RefreshToken(ctx: Context): Promise<Response>;
}