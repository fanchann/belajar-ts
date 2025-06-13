import type {users} from "@prisma/client";

export interface UsersRepository {
    CreateNewUser(data : users):Promise<users>;
    GetUserByUsernameOrEmail(username?:string, email?:string):Promise<users | null>;


    // relations
    GetShopByUsernameUser(username: string):Promise<users|null>;
}