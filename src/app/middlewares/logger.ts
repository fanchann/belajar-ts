import type {Context} from "hono";

export class LoggerMiddleware {
    public logRequest(ctx: Context, next: () => Promise<Response>): Promise<Response> {
        const method = ctx.req.method;
        const url = ctx.req.url;

        console.log(`[${new Date().toISOString()}] ${method} ${url}`);
        return next().then(response => {
            return response;
        });
    }
}