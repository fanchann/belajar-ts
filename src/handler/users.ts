import type {UsersHandler} from "./interfaces.ts";
import type {UserUsecaase} from "../usecase/interfaces.ts";
import type {Context} from "hono";

export class UsersHandlerImpl implements UsersHandler{
    private userUsecas: UserUsecaase;
    constructor(userUsecas: UserUsecaase) {
        this.userUsecas = userUsecas;
    }

    async GetAllUsersWithRelations(ctx: Context): Promise<Response> {
        const page = parseInt(ctx.req.query('page') || "1") || 1;
        const limit = parseInt(ctx.req.query('limit') || "10") || 10;
        // query parameter example: /?page=1&limit=10
        console.log("GetAllUsersWithRelations called with page:", page, "and limit:", limit);

        if (page < 1 || limit < 1) {
            return ctx.json({error: 'Page and limit must be greater than 0'}, 400);
        }
        try {
            const {users, total} = await this.userUsecas.GetAllUsersWithRelations(page, limit);
            return ctx.json({users, total}, 200);
        } catch (error) {
            console.error("Error in GetAllUsersWithRelations:", error);
            return ctx.json({error: 'Internal server error'}, 500);
        }
    }

    async SearchUserIncludeShopByUsername(ctx: Context): Promise<Response> {
       // Get the username from the query parameters
        const username = ctx.req.query('username');
        // query parameter example: /search?username=johndoe
        if (!username) {
            return ctx.json({error: 'Username is required'}, 400);
        }

        try {
            const user = await this.userUsecas.SearchUserIncludeShopByUsername(username);
            if (!user) {
                return ctx.json({error: 'User not found'}, 404);
            }

            return ctx.json(user, 200);
        } catch (error) {
            console.error("Error in SearchUserIncludeShopByUsername:", error);
            return ctx.json({error: 'Internal server error'}, 500);
        }
    }

    async GetUserInclueShopByUsername(ctx: Context): Promise<Response> {
        // Get the username from the query parameters
        const username = ctx.req.param('username');
        if (!username) {
            return ctx.json({error: 'Username is required'}, 400);
        }

        try {
            const user = await this.userUsecas.GetUserIncludeShopByUsername(username);
            if (!user) {
                return ctx.json({error: 'User not found'}, 404);
            }
            return ctx.json(user, 200);
        } catch (error) {
            console.error("Error in GetUserInclueShopByUsername:", error);
            return ctx.json({error: 'Internal server error'}, 500);
        }
    }
}