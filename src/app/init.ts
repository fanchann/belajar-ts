import { Hono } from 'hono';
import { Context } from 'hono';

import { createContainer } from './container';
import {AuthRouter} from "./routers/auth.ts";
import {HealthCheckRouter} from "./routers/health_check.ts";
import {UserRouter} from "./routers/users.ts";
import {ProfileRouter} from "./routers/profile.ts";


export function InitApp() {
    const container = createContainer();
    const app = new Hono();

    // Global middleware
    app.use('*', container.loggerMiddleware.logRequest.bind(container.loggerMiddleware));

    // Public routes
    app.route('/auth', AuthRouter(app, container.authHandler));
    app.route('/health', HealthCheckRouter(app, container.healthCheckHandler));
    app.route('/users', UserRouter(app, container.userHandler));

    // Protected routes
    app.use('/profile/*', container.authMiddleware.verifyToken.bind(container.authMiddleware));
    app.route('/profile', ProfileRouter(app));

    return app;
}
