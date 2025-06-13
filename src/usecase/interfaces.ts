import type {UserLoginResponse} from "../dto/responses.ts";
import type {UserLoginRequest} from "../dto/requests.ts";

export interface AuthUsecase {
    Login(req: UserLoginRequest): Promise<UserLoginResponse | null>;
    RefreshToken(refreshToken: string): Promise<UserLoginResponse | null>
}