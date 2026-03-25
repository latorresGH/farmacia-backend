import { RateLimitMiddleware } from 'src/middleware/rate-limit.middleware';
import { TurnosService } from './turnos.service';
import { TurnosController } from './turnos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TurnosGateway } from './turnos.gateway';
import { JwtModule } from '@nestjs/jwt';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TurnosPublicController } from './turnos-public.controller';
import { RequestMethod } from '@nestjs/common';

@Module({
  imports: [PrismaModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
  }),
],
providers: [TurnosService, TurnosGateway],
controllers: [TurnosController, TurnosPublicController],
})
export class TurnosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RateLimitMiddleware)
      .forRoutes({
  path: 'turnos/public',
  method: RequestMethod.POST,
});
  }
}