export class RegistrationRequest {

    private signed: boolean;
    private fullName: string;
    private email: string;
    private mobile: string;
    private password: string;

    constructor(registrationData: any) {
        this.signed = registrationData.terms,
        this.fullName = registrationData.fullName,
        this.email = registrationData.email,
        this.mobile = registrationData.mobile,
        this.password = registrationData["current-password"]
    }
}

enum RegistrationStatus{
    Success = 0, Failed = 1
}

export class RegistrationResponse {
    constructor(private _status: RegistrationStatus, private _email: string) {}
    
    public get email() : string {
        return this._email;
    }
    
}