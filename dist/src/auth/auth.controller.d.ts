import { AuthService } from './auth.service';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    register(body: any): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    login(body: any): Promise<{
        access_token: string;
    }>;
}
