export class UserLoginResponse{
    constructor(
        public userId: string,
        public username: string,
        public token: string,
        public refreshToken: string,
        public expiresIn: number
    ) {}

    public toJson(){
        return {
            userId: this.userId,
            username: this.username,
            token: this.token,
            refreshToken: this.refreshToken,
            expiresIn: this.expiresIn
        };
    }
}