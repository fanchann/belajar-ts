import type {UsersHandler} from "../../handler/interfaces.ts";
import {Hono} from "hono";

export function UserRouter(h: Hono,userHandler: UsersHandler) {

    // Define the route for searching a user by username
    h.get('/', (ctx) => userHandler.GetAllUsersWithRelations (ctx));
    h.get('/:username', (ctx) => userHandler.GetUserInclueShopByUsername(ctx));
    // h.get('/search', (ctx) => userHandler.SearchUserIncludeShopByUsername(ctx));

    return h;

}