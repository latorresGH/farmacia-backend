import { Test, TestingModule } from '@nestjs/testing';
import { TiposTurnoService } from './tipos-turno.service';

describe('TiposTurnoService', () => {
  let service: TiposTurnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposTurnoService],
    }).compile();

    service = module.get<TiposTurnoService>(TiposTurnoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
