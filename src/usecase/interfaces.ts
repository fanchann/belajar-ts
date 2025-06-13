import type {UserLoginResponse} from "../dto/responses.ts";
import {RefreshTokenRequest, type UserLoginRequest} from "../dto/requests.ts";

export interface AuthUsecase {
    Login(req: UserLoginRequest): Promise<UserLoginResponse | null>;
    RefreshToken(refreshToken: RefreshTokenRequest): Promise<UserLoginResponse | null>
}