import type {HealthCheckHandler} from "../../handler/interfaces.ts";
import {type Context, Hono} from "hono";

export function HealthCheckRouter(h: Hono,healthCheckHandler: HealthCheckHandler) {

    // Define the health check route
    h.get('/', (ctx: Context) => healthCheckHandler.HealthCheck(ctx));

    return h;
}