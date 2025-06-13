import type {AuthHandler} from "./interfaces.ts";
import type {Context} from "hono";
import type {AuthUsecase} from "../usecase/interfaces.ts";
import type {UserLoginResponse} from "../dto/responses.ts";
import {UserLoginRequest} from "../dto/requests.ts";
import * as console from "node:console";
import {undefined} from "zod";

export class AuthHandlerImpl implements AuthHandler{
    private authUsecase: AuthUsecase
    constructor(authUsecase: AuthUsecase) {
        this.authUsecase = authUsecase;
    }

    async Login(ctx: Context): Promise<Response> {
        try {
            const req = ctx.req;
            const body = await req.json();
            // console.log("Login request body:", body);

            const userLoginRequest = new UserLoginRequest(
                body.username,
                body.email,
                body.password
            );

            const response = await this.authUsecase.Login(userLoginRequest);

            if (!response) {
                return ctx.json({error: "Invalid credentials"}, 401);
            }

            return ctx.json(response.toJson());
        } catch (error) {
            console.error("Login error:", error);
            return ctx.json({error: "Invalid request format"}, 400);
        }
    }

    async RefreshToken(ctx: Context): Promise<Response> {
        try {
            const req = ctx.req;
            const body = await req.json();

            if (!body.refreshToken) {
                return ctx.json({error: "Refresh token is required"}, 400);
            }

            const response = await this.authUsecase.RefreshToken(body.refreshToken);

            if (!response) {
                return ctx.json({error: "Invalid refresh token"}, 401);
            }

            return ctx.json(response.toJson());
        } catch (error) {
            console.error("Refresh token error:", error);
            return ctx.json({error: "Invalid request"}, 400);
        }
    }

}