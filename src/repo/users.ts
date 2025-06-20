import type {PrismaClient, users} from "@prisma/client";
import type {UsersRepository} from "./interfaces.ts";

export class UsersRepositoryImpl implements UsersRepository{
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async SearchUserIncludeShopByUsername(username: string): Promise<{users: users[]; ttl: number}> {
    // find user like username
    const user = await this.prisma.users.findMany({
        where: {
            username: {
                contains: username,
            }
        },
        include: {
            shop: true // Include related shop data
        }
    });
    
    return {
        users: user, 
        ttl: user.length // Return count of users found
    }; 
    }

    async GetAllUsersWithRelations(page: number, limit: number): Promise<{ users: users[]; total: number }> {
        const [users, total] = await this.prisma.$transaction([
            this.prisma.users.findMany({
                skip: (page - 1) * limit,
                take: limit,
                include: { shop: true }
            }),
            this.prisma.users.count()
        ]);
        if (!users || users.length === 0) {
            return { users: [], total: 0 };
        }
        return { users, total };
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