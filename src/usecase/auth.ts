import type {AuthUsecase} from "./interfaces.ts";
import {RefreshTokenRequest, type UserLoginRequest} from "../dto/requests.ts";
import {UserLoginResponse} from "../dto/responses.ts";
import  {type UsersRepositoryImpl} from "../repo/users.ts";
import bcrypt from 'bcryptjs';
import {TokenService} from "../services/token.ts";
import type {RefreshTokenRepository} from "../repo/interfaces.ts";
import  {type RefreshTokenRepoImpl} from "../repo/refresh_tokens.ts";
import * as console from "node:console";
import * as console from "node:console";
import * as console from "node:console";
import {undefined} from "zod";

export class AuthUsecaseImpl implements AuthUsecase{
    private repo: UsersRepositoryImpl;
    private tokenService: TokenService;
    private refreshTokenRepo: RefreshTokenRepoImpl

    constructor(repo: UsersRepositoryImpl, tokenService: TokenService, refreshTokenRepo: RefreshTokenRepository) {
        this.repo = repo;
        this.tokenService = tokenService;
        this.refreshTokenRepo = refreshTokenRepo;
    }

    async Login(req: UserLoginRequest): Promise<UserLoginResponse | null> {
        // Find user by username or email
        const user = await this.repo.GetUserByUsernameOrEmail(req.getUsername(), req.getEmail());

        if (!user || !user.password) {
            return null;
        }

        // Validate password (assuming password in DB is already hashed)
        const isValidPassword = await bcrypt.compare(req.getPassword() || '', user.password);

        if (!isValidPassword) {
            return null;
        }

        // Generate tokens
        const accessToken = this.tokenService.generateAccessToken(user);
        const refreshToken = this.tokenService.generateRefreshToken(user);

        console.log(refreshToken)
        console.log(user)

        await this.refreshTokenRepo.SaveRefreshToken(user.id, refreshToken);


        return new UserLoginResponse(
            user.id.toString(),
            user.username || '',
            accessToken,
            refreshToken,
            15 * 60 // 15 minutes in seconds
        );
    }

    async RefreshToken(refreshTokenReq: RefreshTokenRequest): Promise<UserLoginResponse | null> {
        try {
            const tokenStr = refreshTokenReq.getRefreshToken();

            // Ambil token dari DB
            const storedToken = await this.refreshTokenRepo.FindRefreshToken(tokenStr);
            if (!storedToken || storedToken.revoked || storedToken.expiresAt < new Date()) {
                return null; // Token tidak valid
            }

            // Verifikasi payload dari token
            const payload = this.tokenService.verifyRefreshToken(tokenStr);
            const userId = parseInt(payload.sub);
            const username = payload.username;

            // Ambil user dari DB
            const user = await this.repo.GetUserByUsernameOrEmail(username);
            if (!user || user.id !== userId) {
                return null; // Token valid tapi tidak cocok dengan user
            }

            // Generate access token baru
            const newAccessToken = this.tokenService.generateAccessToken(user);

            // Hitung waktu kedaluwarsa
            const timeToExpiry = storedToken.expiresAt.getTime() - Date.now();

            let newRefreshToken: string;

            if (timeToExpiry < 24 * 60 * 60 * 1000) {
                // Kalau sisa waktu < 1 hari, buat token baru
                newRefreshToken = this.tokenService.generateRefreshToken(user);
                await this.refreshTokenRepo.UpdateRefreshToken(userId, tokenStr, newRefreshToken);
            } else {
                // Kalau belum mepet expired, tetap pakai yang lama
                newRefreshToken = storedToken.token;
            }

            return new UserLoginResponse(
                user.id.toString(),
                user.username || '',
                newAccessToken,
                newRefreshToken,
                15 * 60 // 15 menit
            );
        } catch (error) {
            console.error("Error during refresh token:", error);
            return null;
        }
    }

    CreateNewUser(req: any): Promise<any> | null {
        return undefined;
    }


}