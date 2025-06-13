import type {RefreshTokenRepository} from "./interfaces.ts";
import {refresh_tokens} from "@prisma/client";

export class RefreshTokenRepoImpl implements RefreshTokenRepository{
    private prisma: any;

    constructor(prisma: any) {
        this.prisma = prisma;
    }
    async SaveRefreshToken(userId: number, refreshToken: string): Promise<refresh_tokens | null> {
        await this.prisma.refresh_tokens.updateMany({
            where: {
                userId: userId,
                revoked: false,
                expiresAt: { gt: new Date() }
            },
            data: { revoked: true }
        });

        // Save the new token
        return await this.prisma.refresh_tokens.create({
            data: {
                userId,
                token: refreshToken,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 hari
            }
        });
    }


    async UpdateRefreshToken(userId: number, oldToken: string,newToken: string): Promise<refresh_tokens | null> {
        await this.prisma.refresh_tokens.updateMany({
            where: { userId, token: oldToken },
            data: { revoked: true }
        });

        await this.SaveRefreshToken(userId, newToken);
    }

    async FindRefreshToken(refreshToken: string): Promise<refresh_tokens | null> {
        return await this.prisma.refresh_tokens.findFirst({
            where: { token: refreshToken, revoked: false },
        });
    }
}