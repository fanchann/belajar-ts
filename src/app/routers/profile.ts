import { Hono } from "hono";
import type { Context } from "hono";

export function ProfileRouter() {
  const router = new Hono();

  router.get("/me", async (ctx: Context) => {
    const user = ctx.get("user"); // Di-set oleh middleware auth
    console.log("User from context:", user);
    return ctx.json({ message: "Hello from protected route", user });
  });

  return router;
}
