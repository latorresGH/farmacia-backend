import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

describe('TiposTurno (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let accessToken: string;
  const uniqueId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const uniqueEmail = `admin-tipos-${uniqueId}@test.com`;

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
        nombre: 'Admin User',
        email: uniqueEmail,
        password: hashedPassword,
        rol: 'ADMIN',
      },
    });

    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: uniqueEmail, password: 'password123' });

    accessToken = loginResponse.body.access_token;
  });

  afterAll(async () => {
    await prisma.tipoTurno.deleteMany();
    await prisma.usuario.deleteMany({
      where: { email: { contains: '@test.com' } },
    });
    await app.close();
  });

  describe('/tipos-turno (POST)', () => {
    it('should create a new tipo turno', async () => {
      const response = await request(app.getHttpServer())
        .post('/tipos-turno')
        .send({
          nombre: 'Consulta General',
          prefijo: 'CG',
          duracionMin: 15,
        })
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.nombre).toBe('Consulta General');
      expect(response.body.prefijo).toBe('CG');
      expect(response.body.duracionMin).toBe(15);
      expect(response.body.activo).toBe(true);
    });

    it('should fail to create tipo turno with duplicate prefix', async () => {
      await request(app.getHttpServer())
        .post('/tipos-turno')
        .send({
          nombre: 'Otro Tipo',
          prefijo: 'CG',
          duracionMin: 10,
        })
        .expect(400);
    });
  });

  describe('/tipos-turno (GET)', () => {
    it('should return all active tipos turno', async () => {
      const response = await request(app.getHttpServer())
        .get('/tipos-turno')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('nombre');
      expect(response.body[0]).toHaveProperty('prefijo');
    });
  });

  describe('/tipos-turno/detalle/:id (GET)', () => {
    let tipoId: number;

    beforeAll(async () => {
      const tipo = await prisma.tipoTurno.findFirst({
        where: { prefijo: 'CG' },
      });
      tipoId = tipo!.id;
    });

    it('should return a specific tipo turno', async () => {
      const response = await request(app.getHttpServer())
        .get(`/tipos-turno/detalle/${tipoId}`)
        .expect(200);

      expect(response.body.id).toBe(tipoId);
      expect(response.body.nombre).toBe('Consulta General');
    });

    it('should return 404 for non-existent tipo', async () => {
      await request(app.getHttpServer())
        .get('/tipos-turno/detalle/99999')
        .expect(404);
    });
  });

  describe('/tipos-turno/:id (PATCH)', () => {
    let tipoId: number;

    beforeAll(async () => {
      const tipo = await prisma.tipoTurno.findFirst({
        where: { prefijo: 'CG' },
      });
      tipoId = tipo!.id;
    });

    it('should update a tipo turno', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/tipos-turno/${tipoId}`)
        .send({
          nombre: 'Consulta Actualizada',
          duracionMin: 20,
        })
        .expect(200);

      expect(response.body.nombre).toBe('Consulta Actualizada');
      expect(response.body.duracionMin).toBe(20);
    });
  });

  describe('/tipos-turno/:id (DELETE)', () => {
    let tipoId: number;

    beforeAll(async () => {
      const tipo = await prisma.tipoTurno.findFirst({
        where: { prefijo: 'CG' },
      });
      tipoId = tipo!.id;
    });

    it('should soft delete a tipo turno', async () => {
      const response = await request(app.getHttpServer())
        .delete(`/tipos-turno/${tipoId}`)
        .expect(200);

      expect(response.body.activo).toBe(false);
    });
  });
});
