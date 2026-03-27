import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) {}

    async register(data: any) {
        const hashed = await bcrypt.hash(data.password, 10);

        const user = await this.prisma.usuario.create({
            data: {
                nombre: data.nombre,
                email: data.email,
                password: hashed,
                farmaciaId: data.farmaciaId,
                rol: 'ADMIN',
            },
        });
        return user;
    }

    async login(email: string, password:string) {
        const user = await this.prisma.usuario.findUnique({
            where: { email },
        });

        if (!user) throw new UnauthorizedException('Credenciales inválidas');

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) throw new UnauthorizedException('Credenciales inválidas');

        const token = this.jwt.sign({
            userId: user.id,
            farmaciaId: user.farmaciaId,
            rol: user.rol,
        });

        return { access_token: token };
    }
}
