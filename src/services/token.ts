import jwt from 'jsonwebtoken';
import type {users} from "@prisma/client";

// Should be in environment variables in a real application
const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET;
const ACCESS_TOKEN_EXPIRATION = process.env.JWT_EXPIRES_IN || '15m'; // Default to 15 minutes
const REFRESH_TOKEN_EXPIRATION = process.env.JWT_REFRESH_EXPIRES_IN || '7d'; // Default to 7 days



export class TokenService {
    generateAccessToken(user: users): string {
        return jwt.sign(
            {
                sub: user.id.toString(),
                username: user.username
            },
            ACCESS_TOKEN_SECRET,
            { expiresIn: ACCESS_TOKEN_EXPIRATION } // 15 minutes
        );
    }

    generateRefreshToken(user: users): string {
        return jwt.sign(
            {
                sub: user.id.toString(),
                type: 'refresh'
            },
            REFRESH_TOKEN_SECRET,
            { expiresIn:  REFRESH_TOKEN_EXPIRATION } // 7 days
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