import jwt from 'jsonwebtoken';
import type {users} from "@prisma/client";

// Should be in environment variables in a real application
const ACCESS_TOKEN_SECRET = 'super_secret';
const REFRESH_TOKEN_SECRET = 'another_super_secret';

export class TokenService {
    generateAccessToken(user: users): string {
        return jwt.sign(
            {
                sub: user.id.toString(),
                username: user.username
            },
            ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' } // 15 minutes
        );
    }

    generateRefreshToken(user: users): string {
        return jwt.sign(
            {
                sub: user.id.toString(),
                type: 'refresh'
            },
            REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' } // 7 days
        );
    }

   verifyAccessToken(token: string): any {
        try {
            return jwt.verify(token, ACCESS_TOKEN_SECRET);
        } catch (error) {
            throw new Error('Invalid access token');
        }
    }

    verifyRefreshToken(token: string): any {
        try {
            return jwt.verify(token, REFRESH_TOKEN_SECRET);
        } catch (error) {
            throw new Error('Invalid refresh token');
        }
    }
}