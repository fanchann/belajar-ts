import type {users,refresh_tokens} from "@prisma/client";

export interface UsersRepository {
    CreateNewUser(data : users):Promise<users>;
    GetUserByUsernameOrEmail(username?:string, email?:string):Promise<users | null>;


    // relations
    GetShopByUsernameUser(username: string):Promise<users|null>;
}

export interface RefreshTokenRepository {
    SaveRefreshToken(userId: number, refreshToken: string): Promise<refresh_tokens | null>;
    UpdateRefreshToken(userId: number, oldToken: string, newToken: string): Promise<refresh_tokens | null>;
    FindRefreshToken(refreshToken: string): Promise<refresh_tokens | null>;
}