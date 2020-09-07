export class LoginRequest {
    
    private email: string;
    private password: string;

    constructor(loginData: any) {
        this.email = loginData.email;
        this.password = loginData["current-password"];
    }
}

export class LoginResponse {
    constructor(private accessToken: string) {
    }
}