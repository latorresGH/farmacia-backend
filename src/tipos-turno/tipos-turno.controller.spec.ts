import { Test, TestingModule } from '@nestjs/testing';
import { TiposTurnoController } from './tipos-turno.controller';

describe('TiposTurnoController', () => {
  let controller: TiposTurnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposTurnoController],
    }).compile();

    controller = module.get<TiposTurnoController>(TiposTurnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
