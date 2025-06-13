import {GetUserByEmailOrUsernameSchema, RefreshTokenSchema} from "../schemas/validation.ts";

export class UserLoginRequest {
  username?: string;
  email?: string;
  password?: string;

  constructor(username?: string, email?: string, password?: string) {
    const validated = GetUserByEmailOrUsernameSchema.parse({username, email});

    this.email = validated.email;
    this.username = validated.username;
    this.password = password;
  }

  public getUsername(): string | undefined {
    return this.username;
  }

  public getEmail(): string | undefined {
    return this.email;
  }

  public getPassword(): string | undefined {
    return this.password;
  }
}

export class RefreshTokenRequest {
  refreshToken: string;

  constructor(refreshToken: string) {
    const validated = RefreshTokenSchema.parse({refreshToken});
    this.refreshToken = validated.refreshToken;

  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }
}