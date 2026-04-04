import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    register(data: any): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
