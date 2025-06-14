import type {UserUsecaase} from "./interfaces.ts";
import {UserWithShopResponse} from "../dto/responses.ts";
import type {UsersRepository} from "../repo/interfaces.ts";

export class UserUsecaseImpl implements UserUsecaase{
    private UserRepo: UsersRepository;
    constructor(UserRepo: UsersRepository) {
        this.UserRepo = UserRepo;
    }

    async GetAllUsersWithRelations(page: number, limit: number): Promise<{ users: UserWithShopResponse[]; total: number }> {
        console.log("GetAllUsersWithRelations called with page:", page, "and limit:", limit);
        try {
            const {users, total} = await this.UserRepo.GetAllUsersWithRelations(page, limit);
            const userResponses = users.map(user => new UserWithShopResponse(
                user.id,
                user.username || '',
                user.email || '',
                user.shop?.nama || undefined,
                user.shop?.id || undefined,
            ));
            return {users: userResponses, total};
        } catch (error) {
            console.error("Error in GetAllUsersWithRelations:", error);
            throw error;
        }
    }

async SearchUserIncludeShopByUsername(username: string): Promise<UserWithShopResponse[] | null> {
    try {
        const result = await this.UserRepo.SearchUserIncludeShopByUsername(username);
        if (!result || result.users.length === 0) {
            return null;
        }

        const userResponses = result.users.map(u => new UserWithShopResponse(
            u.id,
            u.username || '',
            u.email || '',
            u.shop?.nama || undefined,
            u.shop?.id || undefined,
        ));

        return userResponses;
    } catch (error) {
        console.error("Error in SearchUserIncludeShopByUsername:", error);
        throw error; // Re-throw untuk handling di handler
    }
}

    async GetUserIncludeShopByUsername(username: string): Promise<UserWithShopResponse | null> {

        try {
            const user = await this.UserRepo.GetShopByUsernameUser(username);
            // If user not found, return null
            if (!user) {
                return null;
            }

            const userResponse = new UserWithShopResponse(
                user.id,
                user.username || '',
                user.email || '',
                user.shop?.nama || undefined,
                user.shop?.id || undefined,
            );

            return userResponse
        }catch (error) {
            console.error("Error in SearchUserIncludeShopByUsername:", error);
            return null;
        }
    }



}