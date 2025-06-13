import type {PrismaClient, users} from "@prisma/client";
import type {UsersRepository} from "./interfaces.ts";

export class UsersRepositoryImpl implements UsersRepository{
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async CreateNewUser(data: users): Promise<users> {
        return await this.prisma.users.create({data});
    }

    async GetShopByUsernameUser(username: string): Promise<users | null> {
        return await this.prisma.users.findFirst({where:{username: username},include:{shop:true}});
    }

    async GetUserByUsernameOrEmail(username?: string, email?: string): Promise<users | null> {
        return await this.prisma.users.findFirst({where:{username: username, email: email}});
    }


}