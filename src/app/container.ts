import { PrismaClient } from '@prisma/client';
import { LoggerMiddleware } from './middlewares/logger';
import { AuthMiddleware } from './middlewares/auth';

import { TokenService } from '../services/token';

import { UsersRepositoryImpl } from '../repo/users';
import { RefreshTokenRepoImpl } from '../repo/refresh_tokens';

import { AuthUsecaseImpl } from '../usecase/auth';
import { UserUsecaseImpl } from '../usecase/users';

import { AuthHandlerImpl } from '../handler/auth';
import { UsersHandlerImpl } from '../handler/users';
import { HealthCheckHandlerImpl } from '../handler/health_check';

export function createContainer() {
    const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

    // Middlewares
    const loggerMiddleware = new LoggerMiddleware();
    const authMiddleware = new AuthMiddleware();

    // Services
    const tokenService = new TokenService();

    // Repositories
    const userRepo = new UsersRepositoryImpl(prisma);
    const refreshTokenRepo = new RefreshTokenRepoImpl(prisma);

    // Usecases
    const authUsecase = new AuthUsecaseImpl(userRepo, tokenService, refreshTokenRepo);
    const userUsecase = new UserUsecaseImpl(userRepo);

    // Handlers
    const authHandler = new AuthHandlerImpl(authUsecase);
    const userHandler = new UsersHandlerImpl(userUsecase);
    const healthCheckHandler = new HealthCheckHandlerImpl();

    return {
        prisma,
        loggerMiddleware,
        authMiddleware,
        authHandler,
        userHandler,
        healthCheckHandler,
    };
}

export type AppContainer = ReturnType<typeof createContainer>;
