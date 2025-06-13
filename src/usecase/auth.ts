import type {AuthUsecase} from "./interfaces.ts";
import type {UserLoginRequest} from "../dto/requests.ts";
import {UserLoginResponse} from "../dto/responses.ts";
import type {UsersRepositoryImpl} from "../repo/users.ts";
import bcrypt from 'bcryptjs';
import {TokenService} from "../services/token.ts";
import type {RefreshTokenRepository} from "../repo/interfaces.ts";
import type {RefreshTokenRepoImpl} from "../repo/refresh_tokens.ts";

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

    async RefreshToken(refreshToken: string): Promise<UserLoginResponse | null> {
        try {
            const storedToken = await this.refreshTokenRepo.FindRefreshToken(refreshToken);
            if (!storedToken || storedToken.revoked || storedToken.expiresAt < new Date()) {
                return null; // Token tidak sah / sudah dicabut / kadaluarsa
            }

            // Verify refresh token
            const payload = this.tokenService.verifyRefreshToken(refreshToken);

            // Get user from database
            const userId = parseInt(payload.sub);
            const user = await this.repo.GetUserById(userId);
            if (!user) {
                return null;
            }

            // Generate new tokens
            const newAccessToken = this.tokenService.generateAccessToken(user);
            const newRefreshToken = this.tokenService.generateRefreshToken(user);

            // Optional: Save new refresh token and invalidate old one
            await this.refreshTokenRepo.UpdateRefreshToken(userId, refreshToken, newRefreshToken);

            return new UserLoginResponse(
                user.id.toString(),
                user.username || '',
                newAccessToken,
                newRefreshToken,
                15 * 60 // 15 minutes in seconds
            );
        } catch (error) {
            return null;
        }
    }

}