import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    register(data: any): Promise<{
        nombre: string;
        email: string;
        password: string;
        rol: import("@prisma/client").$Enums.Rol;
        createdAt: Date;
        id: number;
        farmaciaId: number;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
