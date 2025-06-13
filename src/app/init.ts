import {PrismaClient} from "@prisma/client";
import {UsersRepositoryImpl} from "../repo/users.ts";
import {AuthUsecaseImpl} from "../usecase/auth.ts";
import {AuthHandlerImpl} from "../handler/auth.ts";
import {type Context, Hono} from "hono";
import {AuthRouter} from "./routers/auth.ts";
import {TokenService} from "../services/token.ts";
import {LoggerMiddleware} from "./middlewares/logger.ts";
import { AuthMiddleware } from "./middlewares/auth.ts";
import { ProfileRouter } from "./routers/profile.ts";
import {RefreshTokenRepoImpl} from "../repo/refresh_tokens.ts";

export function InitApp(){
    const prisma = new PrismaClient();

    // middleware
    const logMiddleware = new LoggerMiddleware();
    const authMiddleware = new AuthMiddleware();

    // token
    const tokenService = new TokenService();

    const userRepo = new UsersRepositoryImpl(prisma);
    const refreshTokenRepo = new RefreshTokenRepoImpl(prisma);

    const userUsecase = new AuthUsecaseImpl(userRepo, tokenService, refreshTokenRepo);
    const authHandler = new AuthHandlerImpl(userUsecase);
    

    const app = new Hono();

    app.use('*', (ctx: Context, next: () => Promise<any>) => logMiddleware.logRequest(ctx, next),);
    app.route('/auth',AuthRouter(authHandler));


    // protected routes
    app.use('/profile/*', (ctx: Context, next: () => Promise<any>) => authMiddleware.verifyToken(ctx, next));
    app.route('/profile', ProfileRouter());


    return app;
}