import type {AuthHandler} from "./interfaces.ts";
import type {Context} from "hono";
import type {AuthUsecase} from "../usecase/interfaces.ts";
import type {UserLoginResponse} from "../dto/responses.ts";
import {RefreshTokenRequest, UserLoginRequest} from "../dto/requests.ts";
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
            if (error instanceof Error) {
                const formattedErrors = error.errors.map(e => ({
                    field: e.path.join("."),
                    message: e.message
                }));
                return ctx.json({error: "Invalid request", details: formattedErrors}, 400);
            }
            return ctx.json({error: "Invalid request format"}, 400);
        }
    }

    async RefreshToken(ctx: Context): Promise<Response> {
        try {
            const req = ctx.req;
            const body = await req.json();

            const refreshTokenRequest = new RefreshTokenRequest(
                body.refreshToken.toString(),
            )

            const response = await this.authUsecase.RefreshToken(refreshTokenRequest);

            if (!response) {
                return ctx.json({error: "Invalid refresh token"}, 401);
            }

            return ctx.json(response.toJson());
        } catch (error) {
            if (error instanceof Error) {
                const formattedErrors = error.errors.map(e => ({
                    field: e.path.join("."),
                    message: e.message
                }));
                return ctx.json({error: "Invalid request", details: formattedErrors}, 400);
            }
            return ctx.json({error: "Invalid request"}, 400);
        }
    }

}