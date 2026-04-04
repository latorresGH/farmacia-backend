import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

describe('Caja (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let accessToken: string;
  const uniqueId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const adminEmail = `admin-caja-${uniqueId}@test.com`;

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
    await prisma.usuario.create({
      data: {
        nombre: 'Admin Caja',
        email: adminEmail,
        password: hashedPassword,
        rol: 'ADMIN',
      },
    });

    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: adminEmail, password: 'password123' });

    accessToken = loginResponse.body.access_token;
  });

  afterAll(async () => {
    await prisma.usuario.deleteMany({
      where: { email: { contains: '@test.com' } },
    });
    await prisma.caja.deleteMany();
    await app.close();
  });

  describe('/cajas (POST)', () => {
    it('should create a new caja', async () => {
      const response = await request(app.getHttpServer())
        .post('/cajas')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ nombre: 'Caja 1' })
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.nombre).toBe('Caja 1');
      expect(response.body.activo).toBe(true);
    });

    it('should fail without authentication', async () => {
      await request(app.getHttpServer())
        .post('/cajas')
        .send({ nombre: 'Caja 2' })
        .expect(401);
    });
  });

  describe('/cajas (GET)', () => {
    it('should return all cajas', async () => {
      const response = await request(app.getHttpServer())
        .get('/cajas')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('/cajas/:id (GET)', () => {
    let cajaId: number;

    beforeAll(async () => {
      const caja = await prisma.caja.findFirst();
      cajaId = caja!.id;
    });

    it('should return a specific caja', async () => {
      const response = await request(app.getHttpServer())
        .get(`/cajas/${cajaId}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      expect(response.body.id).toBe(cajaId);
    });

    it('should return 404 for non-existent caja', async () => {
      await request(app.getHttpServer())
        .get('/cajas/99999')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(404);
    });
  });

  describe('/cajas/:cajaId/asignar/:usuarioId (POST)', () => {
    let cajaId: number;
    let usuarioId: number;

    beforeAll(async () => {
      const caja = await prisma.caja.findFirst();
      cajaId = caja!.id;

      const usuario = await prisma.usuario.findFirst({
        where: { email: adminEmail },
      });
      usuarioId = usuario!.id;
    });

    it('should assign user to caja', async () => {
      const response = await request(app.getHttpServer())
        .post(`/cajas/${cajaId}/asignar/${usuarioId}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(201);

      expect(response.body.cajaId).toBe(cajaId);
    });
  });
});

describe('Turnos con Caja y Empleado (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let adminToken: string;
  let empleadoToken: string;
  let tipoTurnoId: number;
  let cajaId: number;
  let empleadoId: number;

  const uniqueId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const adminEmail = `admin-turnos-caja-${uniqueId}@test.com`;
  const empleadoEmail = `empleado-turnos-caja-${uniqueId}@test.com`;
  const tipoPrefijo = `TC${uniqueId.replace(/[^a-zA-Z0-9]/g, '')}`;

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

    const admin = await prisma.usuario.create({
      data: {
        nombre: 'Admin Turnos Caja',
        email: adminEmail,
        password: hashedPassword,
        rol: 'ADMIN',
      },
    });

    const empleado = await prisma.usuario.create({
      data: {
        nombre: 'Empleado Turnos Caja',
        email: empleadoEmail,
        password: hashedPassword,
        rol: 'EMPLEADO',
      },
    });
    empleadoId = empleado.id;

    const caja = await prisma.caja.create({
      data: { nombre: 'Caja Test' },
    });
    cajaId = caja.id;

    await prisma.usuario.update({
      where: { id: empleadoId },
      data: { cajaId },
    });

    const tipo = await prisma.tipoTurno.create({
      data: {
        nombre: 'Tipo Test Caja',
        prefijo: tipoPrefijo,
        duracionMin: 15,
      },
    });
    tipoTurnoId = tipo.id;

    const adminLogin = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: adminEmail, password: 'password123' });
    adminToken = adminLogin.body.access_token;

    const empleadoLogin = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: empleadoEmail, password: 'password123' });
    empleadoToken = empleadoLogin.body.access_token;
  });

  afterAll(async () => {
    await prisma.idempotencyKey.deleteMany();
    await prisma.contadorTurno.deleteMany();
    await prisma.turno.deleteMany();
    await prisma.tipoTurno.deleteMany();
    await prisma.usuario.deleteMany({
      where: { email: { contains: '@test.com' } },
    });
    await prisma.caja.deleteMany();
    await app.close();
  });

  describe('Flujo completo de turno', () => {
    let turnoId: number;

    it('should create a turno with duracionEstimada', async () => {
      const response = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${adminToken}`)
        .set('idempotency-key', `${tipoPrefijo}-full-flow`)
        .send({ tipoTurnoId })
        .expect(201);

      expect(response.body).toHaveProperty('duracionEstimada');
      expect(response.body.duracionEstimada).toBe(15);
      turnoId = response.body.id;
    });

    it('should call turno and assign empleado', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/llamar`)
        .set('Authorization', `Bearer ${empleadoToken}`)
        .expect(200);

      expect(response.body.estado).toBe('LLAMADO');
    });

    it('should derivar turno to another employee', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/derivar`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ empleadoId })
        .expect(200);

      expect(response.body.empleadoId).toBe(empleadoId);
    });

    it('should iniciar atencion', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/iniciar`)
        .set('Authorization', `Bearer ${empleadoToken}`)
        .expect(200);

      expect(response.body.estado).toBe('EN_ATENCION');
      expect(response.body).toHaveProperty('horaInicioAtencion');
    });

    it('should finalizar turno', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/finalizar`)
        .set('Authorization', `Bearer ${empleadoToken}`)
        .expect(200);

      expect(response.body.estado).toBe('ATENDIDO');
      expect(response.body).toHaveProperty('horaFinAtencion');
    });

    it('should get turno statistics', async () => {
      const response = await request(app.getHttpServer())
        .get(`/turnos/${turnoId}/estadisticas`)
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('tiempoEsperaMinutos');
      expect(response.body).toHaveProperty('tiempoAtencionMinutos');
    });
  });

  describe('Validaciones de estado', () => {
    let turnoId: number;

    beforeAll(async () => {
      const response = await request(app.getHttpServer())
        .post('/turnos')
        .set('Authorization', `Bearer ${adminToken}`)
        .set('idempotency-key', `${tipoPrefijo}-validation`)
        .send({ tipoTurnoId });
      turnoId = response.body.id;
    });

    it('should fail to finalizar without iniciar', async () => {
      await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/finalizar`)
        .set('Authorization', `Bearer ${empleadoToken}`)
        .expect(400);
    });

    it('should fail to derivar cancelled turno', async () => {
      await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/cancelar`)
        .set('Authorization', `Bearer ${adminToken}`);

      await request(app.getHttpServer())
        .patch(`/turnos/${turnoId}/derivar`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ empleadoId })
        .expect(400);
    });
  });
});
