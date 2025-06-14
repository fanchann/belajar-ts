import type {HealthCheckHandler} from "./interfaces.ts";
import type {Context} from "hono";
import {date} from "zod";

export class HealthCheckHandlerImpl implements HealthCheckHandler{
    async HealthCheck(ctx: Context): Promise<Response> {
        try {
            // Perform any necessary health checks here
            // For example, checking database connection, etc.
            return ctx.json({status: 'ok',message:"service is running ", timestamp: new Date().toISOString()}, 200);
        } catch (error) {
            console.error("Health check failed:", error);
            return ctx.json({status: 'error', message: 'Health check failed'}, 500);
        }
    }
}