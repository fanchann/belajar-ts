import { Context } from "hono";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET!;

export class AuthMiddleware {
  public async verifyToken(ctx: Context, next: () => Promise<Response>): Promise<Response> {
    const authHeader = ctx.req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return ctx.json({ error: "No token provided" }, 401);
    }

    const token = authHeader.split(" ")[1];

    try {        
      const payload = jwt.verify(token, ACCESS_TOKEN_SECRET);
      
      // Simpan payload user agar bisa diakses handler (optional)
      ctx.set("user", payload);

      return await next();
    } catch (err: any) {
      if (err.name === "TokenExpiredError") {
        return ctx.json({ error: "Access token expired. Please refresh your token." }, 401);
      }

      return ctx.json({ error: "Invalid access token" }, 401);
    }
  }
}
