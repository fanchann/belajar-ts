import type {UsersHandler} from "../../handler/interfaces.ts";
import {Hono} from "hono";

export function UserRouter(h: Hono,userHandler: UsersHandler) {
    h.get('/lists', (ctx) => { return userHandler.GetAllUsersWithRelations(ctx);
    });
    h.get('/search', (ctx) => userHandler.SearchUserIncludeShopByUsername(ctx));
    h.get('/:username', (ctx) => userHandler.GetUserInclueShopByUsername(ctx));

    return h;
}