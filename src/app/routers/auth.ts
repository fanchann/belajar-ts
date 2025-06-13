import type {AuthHandler} from "../../handler/interfaces.ts";
import {type Context, Hono} from "hono";

export function AuthRouter(authHandler: AuthHandler){
    const router = new Hono();

    router.post('/login', (ctx: Context) => authHandler.Login(ctx));
    router.post('/refresh', (ctx: Context) => authHandler.RefreshToken(ctx));

    return router
}