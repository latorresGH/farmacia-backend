import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';

describe('Authentication (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let uniqueEmail: string;

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

    uniqueEmail = `test-${Date.now()}-${Math.random().toString(36).slice(2)}@test.com`;
    await app.init();
  });

  afterAll(async () => {
    await prisma.usuario.deleteMany({
      where: { email: { contains: '@test.com' } },
    });
    await app.close();
  });

  describe('/auth/register (POST)', () => {
    it('should register a new user successfully', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          nombre: 'Test User',
          email: uniqueEmail,
          password: 'password123',
        });

      console.log('Register response:', response.status, response.body);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.email).toBe(uniqueEmail);
      expect(response.body.nombre).toBe('Test User');
      expect(response.body.rol).toBe('ADMIN');
      expect(response.body).not.toHaveProperty('password');
    });

    it('should fail to register with existing email', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          nombre: 'Test User 2',
          email: uniqueEmail,
          password: 'password123',
        });

      expect(response.status).toBeGreaterThanOrEqual(400);
    });
  });

  describe('/auth/login (POST)', () => {
    it('should login successfully with valid credentials', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: uniqueEmail,
          password: 'password123',
        });

      console.log('Login response:', response.status, response.body);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('access_token');
      expect(typeof response.body.access_token).toBe('string');
    });

    it('should fail login with wrong password', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: uniqueEmail,
          password: 'wrongpassword',
        })
        .expect(401);
    });

    it('should fail login with non-existent email', async () => {
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'nonexistent@test.com',
          password: 'password123',
        })
        .expect(401);
    });
  });
});
