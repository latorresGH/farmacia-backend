import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

describe('Turnos (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let accessToken: string;
  let empleadoToken: string;
  let tipoTurnoId: number;
  const uniqueId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const adminEmail = `admin-turnos-${uniqueId}@test.com`;
  const empleadoEmail = `empleado-turnos-${uniqueId}@test.com`;
  const tipoPrefijo = `TT${uniqueId.replace(/[^a-zA-Z0-9]/g, '')}`;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    prisma = app.get(PrismaService);

    await prisma.usuario.deleteMany({
      where: { email: { contains: '@test.com' } },
    });

    await app.init();

    const hashedPassword = await bcrypt.hash('password123', 10);
    await prisma.usuario.createMany({
      data: [
        {
          nombre: 'Admin Turnos',
          email: adminEmail,
          password: hashedPassword,
          rol: 'ADMIN',
        },
        {
          nombre: 'Empleado Turnos',
          email: empleadoEmail,
          password: hashedPassword,
          rol: 'EMPLEADO',
        },
      ],
    });

    const adminLogin = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: adminEmail, password: 'password123' });

    if (!adminLogin.body.access_token) {
      console.error('Admin login failed:', adminLogin.status, adminLogin.body);
    }
    accessToken = adminLogin.body.access_token;

    const empleadoLogin = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: empleadoEmail, password: 'password123' });

    if (!empleadoLogin.body.access_token) {
      console.error(
        'Empleado login failed:',
        empleadoLogin.status,
        empleadoLogin.body,
      );
    }
    empleadoToken = empleadoLogin.body.access_token;

    const tipoResponse = await request(app.getHttpServer())
      .post('/tipos-turno')
      .send({
        nombre: 'Test Tipo',
        prefijo: tipoPrefijo,
        duracionMin: 10,
      });
    tipoTurnoId = tipoResponse.body.id;
  });

  afterAll(async () => {
    await prisma.idempotencyKey.deleteMany();
    await prisma.contadorTurno.deleteMany();
    await prisma.turno.deleteMany();
    await prisma.tipoTurno.deleteMany();
    await prisma.usuario.deleteMany({
      where: { email: { contains: '@test.com' } },
    });
    await app.close();
  });

  describe('/turnos (POST)', () => {
    it('should create a new turno successfully', async () => {
      const response = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-1`)
        .send({
          tipoTurnoId: tipoTurnoId,
        })
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('codigo');
      expect(response.body.codigo).toBe(`${tipoPrefijo}001`);
      expect(response.body.numero).toBe(1);
      expect(response.body.estado).toBe('PENDIENTE');
    });

    it('should return same turno with same idempotency key', async () => {
      const response1 = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-2`)
        .send({ tipoTurnoId: tipoTurnoId });

      const response2 = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-2`)
        .send({ tipoTurnoId: tipoTurnoId });

      expect(response1.body.id).toBe(response2.body.id);
      expect(response1.body.codigo).toBe(response2.body.codigo);
    });

    it('should fail without idempotency-key header', async () => {
      await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ tipoTurnoId: tipoTurnoId })
        .expect(400);
    });

    it('should fail without authentication', async () => {
      await request(app.getHttpServer())
        .post('/turnos')
        .set('idempotency-key', `${tipoPrefijo}-key-4`)
        .send({ tipoTurnoId: tipoTurnoId })
        .expect(401);
    });
  });

  describe('/turnos/hoy (GET)', () => {
    it('should return turnos from today', async () => {
      const response = await request(app.getHttpServer())
        .get('/turnos/hoy')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('/turnos (GET)', () => {
    it('should return all turnos with filters', async () => {
      const response = await request(app.getHttpServer())
        .get('/turnos')
        .query({ estado: 'PENDIENTE' })
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      response.body.forEach((t: any) => {
        expect(t.estado).toBe('PENDIENTE');
      });
    });

    it('should filter by tipoTurnoId', async () => {
      const response = await request(app.getHttpServer())
        .get('/turnos')
        .query({ tipoTurnoId: tipoTurnoId })
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('/turnos/:id/llamar (PATCH)', () => {
    let turnoId: number;

    beforeAll(async () => {
      const turnoResponse = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-llamar`)
        .send({ tipoTurnoId: tipoTurnoId });
      turnoId = turnoResponse.body.id;
    });

    it('should call a turno (ADMIN)', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/llamar`)
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(response.body.estado).toBe('LLAMADO');
      expect(response.body).toHaveProperty('horaLlamado');
    });

    it('should call a turno (EMPLEADO)', async () => {
      const newTurnoResponse = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-empleado`)
        .send({ tipoTurnoId: tipoTurnoId });

      const response = await request(app.getHttpServer())
        .patch(`/turnos/${newTurnoResponse.body.id}/llamar`)
        .set('Authorization', `Bearer ${empleadoToken}`)
        .expect(200);

      expect(response.body.estado).toBe('LLAMADO');
    });
  });

  describe('/turnos/:id/finalizar (PATCH)', () => {
    let turnoId: number;

    beforeAll(async () => {
      const turnoResponse = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-finalizar`)
        .send({ tipoTurnoId: tipoTurnoId });

      await request(app.getHttpServer())
        .patch(`/turnos/${turnoResponse.body.id}/llamar`)
        .set('Authorization', `Bearer ${accessToken}`);

      await request(app.getHttpServer())
        .patch(`/turnos/${turnoResponse.body.id}/iniciar`)
        .set('Authorization', `Bearer ${accessToken}`);

      turnoId = turnoResponse.body.id;
    });

    it('should finalize a turno', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/finalizar`)
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(response.body.estado).toBe('ATENDIDO');
    });
  });

  describe('/turnos/:id/cancelar (PATCH)', () => {
    let turnoId: number;

    beforeAll(async () => {
      const turnoResponse = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-cancelar`)
        .send({ tipoTurnoId: tipoTurnoId });
      turnoId = turnoResponse.body.id;
    });

    it('should cancel a turno (ADMIN only)', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/cancelar`)
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(response.body.estado).toBe('CANCELADO');
    });

    it('should forbid EMPLEADO from canceling', async () => {
      const turnoResponse = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-cancelar2`)
        .send({ tipoTurnoId: tipoTurnoId });

      await request(app.getHttpServer())
        .patch(`/turnos/${turnoResponse.body.id}/cancelar`)
        .set('Authorization', `Bearer ${empleadoToken}`)
        .expect(403);
    });
  });

  describe('/turnos/actual (GET)', () => {
    it('should return current called turno', async () => {
      const turnoResponse = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-actual`)
        .send({ tipoTurnoId: tipoTurnoId });

      await request(app.getHttpServer())
        .patch(`/turnos/${turnoResponse.body.id}/llamar`)
        .set('Authorization', `Bearer ${accessToken}`);

      const response = await request(app.getHttpServer())
        .get('/turnos/actual')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body.estado).toBe('LLAMADO');
    });
  });

  describe('/turnos/siguiente (POST)', () => {
    it('should call next pending turno', async () => {
      const turnoResponse = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${accessToken}`)
        .set('idempotency-key', `${tipoPrefijo}-key-siguiente`)
        .send({ tipoTurnoId: tipoTurnoId });

      const response = await request(app.getHttpServer())
        .post('/turnos/siguiente')
        .set('Authorization', `Bearer ${empleadoToken}`)
        .send({ tipoTurnoId: tipoTurnoId })
        .expect(201);

      expect(response.body.estado).toBe('LLAMADO');
    });

    it('should return 404 when no pending turnos of that type', async () => {
      const uniqueTipo = await request(app.getHttpServer())
        .post('/tipos-turno')
        .send({
          nombre: 'Tipo Unico',
          prefijo: `TU${Date.now()}`,
          duracionMin: 10,
        });

      await request(app.getHttpServer())
        .post('/turnos/siguiente')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ tipoTurnoId: uniqueTipo.body.id })
        .expect(404);
    });
  });
});

describe('Turnos Public (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let tipoTurnoId: number;
  const tipoPrefijo = `PT${Date.now()}`;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    prisma = app.get(PrismaService);
    await app.init();

    const tipo = await prisma.tipoTurno.create({
      data: {
        nombre: 'Public Tipo',
        prefijo: tipoPrefijo,
        duracionMin: 10,
      },
    });
    tipoTurnoId = tipo.id;
  });

  afterAll(async () => {
    await prisma.idempotencyKey.deleteMany();
    await prisma.contadorTurno.deleteMany();
    await prisma.turno.deleteMany();
    await prisma.tipoTurno.deleteMany();
    await app.close();
  });

  describe('/turnos/public (POST)', () => {
    it('should create turno without authentication', async () => {
      const response = await request(app.getHttpServer())
        .post('/turnos/public')
        .set('idempotency-key', `${tipoPrefijo}-public-1`)
        .send({ tipoTurnoId: tipoTurnoId })
        .expect(201);

      expect(response.body).toHaveProperty('codigo');
      expect(response.body.codigo).toBe(`${tipoPrefijo}001`);
    });

    it('should fail with invalid tipoTurnoId', async () => {
      await new Promise((resolve) => setTimeout(resolve, 2100));
      await request(app.getHttpServer())
        .post('/turnos/public')
        .set('idempotency-key', `${tipoPrefijo}-public-2`)
        .send({ tipoTurnoId: 99999 })
        .expect(400);
    });
  });
});
