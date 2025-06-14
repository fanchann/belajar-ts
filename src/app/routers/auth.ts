import type {AuthHandler} from "../../handler/interfaces.ts";
import {type Context, Hono} from "hono";

export function AuthRouter(h: Hono,authHandler: AuthHandler){

    h.post('/login', (ctx: Context) => authHandler.Login(ctx));
    h.post('/refresh', (ctx: Context) => authHandler.RefreshToken(ctx));

    return h
}