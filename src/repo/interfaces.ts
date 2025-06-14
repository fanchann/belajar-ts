import type {users,refresh_tokens} from "@prisma/client";

export interface UsersRepository {
    CreateNewUser(data : users):Promise<users>;
    GetUserByUsernameOrEmail(username?:string, email?:string):Promise<users | null>;
    SearchUserIncludeShopByUsername(username: string): Promise<{users: users[]; ttl: number}>;


    // get all users with relations & pagination
    GetAllUsersWithRelations(page: number, limit: number): Promise<{ users: users[]; total: number }>;
    // relations
    GetShopByUsernameUser(username: string):Promise<users|null>;
}

export interface RefreshTokenRepository {
    SaveRefreshToken(userId: number, refreshToken: string): Promise<refresh_tokens | null>;
    UpdateRefreshToken(userId: number, oldToken: string, newToken: string): Promise<refresh_tokens | null>;
    FindRefreshToken(refreshToken: string): Promise<refresh_tokens | null>;
}