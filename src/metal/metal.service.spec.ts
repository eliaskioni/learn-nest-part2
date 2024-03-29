import { Test, TestingModule } from '@nestjs/testing';
import { MetalService } from './metal.service';

describe('MetalService', () => {
  let service: MetalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetalService],
    }).compile();

    service = module.get<MetalService>(MetalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should be defined on service', () => {
    expect(service.create).toBeDefined();
  })
});
