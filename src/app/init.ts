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
import {UsersHandlerImpl} from "../handler/users.ts";
import {UserUsecaseImpl} from "../usecase/users.ts";
import {UserRouter} from "./routers/users.ts";
import {HealthCheckHandlerImpl} from "../handler/health_check.ts";
import {HealthCheckRouter} from "./routers/health_check.ts";

export function InitApp(){
    const prisma = new PrismaClient(
        {log: ['query', 'info', 'warn', 'error']}
    );

    // middleware
    const logMiddleware = new LoggerMiddleware();
    const authMiddleware = new AuthMiddleware();

    // token
    const tokenService = new TokenService();

    const userRepo = new UsersRepositoryImpl(prisma);
    const refreshTokenRepo = new RefreshTokenRepoImpl(prisma);

    const authUsecase = new AuthUsecaseImpl(userRepo, tokenService, refreshTokenRepo);
    const userUsecase = new UserUsecaseImpl(userRepo);

    const authHandler = new AuthHandlerImpl(authUsecase);
    const userHandler = new UsersHandlerImpl(userUsecase);
    const healthCheckHandler = new HealthCheckHandlerImpl()

    const app = new Hono();


    app.use('*', (ctx: Context, next: () => Promise<any>) => logMiddleware.logRequest(ctx, next));
    
    app.route('/auth',AuthRouter(app,authHandler));
    app.route('/health', HealthCheckRouter(app, healthCheckHandler));
    app.route('/users', UserRouter(app,userHandler));


    // protected routes
    app.use('/profile/*', (ctx: Context, next: () => Promise<any>) => authMiddleware.verifyToken(ctx, next));
    app.route('/profile', ProfileRouter(app));


    return app;
}