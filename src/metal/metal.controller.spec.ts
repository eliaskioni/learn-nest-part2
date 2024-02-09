import { Test, TestingModule } from '@nestjs/testing';
import { MetalController } from './metal.controller';
import { MetalDTO } from './metalDto';
import { MetalService } from './metal.service';

describe('MetalController', () => {
  let controller: MetalController;
  let metalService: MetalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetalController],
      providers: [
        {
          provide: MetalService,
          useValue: {
            create: (metalDto: MetalDTO)=>{metalDto},
            list: (metalDto: MetalDTO) => {[metalDto]}
          }
        }
      ]
    }).compile();

    controller = module.get<MetalController>(MetalController);
    metalService = module.get<MetalService>(MetalService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create should be defined', () => {
    expect(controller.create).toBeDefined();
  });

  it('create should invoke create on the service', () => {
    const metalDto: MetalDTO = {
      type: "Ore",
      metal: "Copper"
    }
    const metalServiceSpy = jest.spyOn(metalService, 'create');
    controller.create(metalDto);
    expect(metalServiceSpy).toHaveBeenCalledTimes(1);
  })

  it('create should invoke list on the service', () => {
    const metalDto: MetalDTO = {
      type: "Ore",
      metal: "Copper"
    }
    const metalServiceSpy = jest.spyOn(metalService, 'list');
    controller.create(metalDto);
    expect(metalServiceSpy).toHaveBeenCalledTimes(1);
  })

  it('list should be defined', () => {
    expect(controller.list).toBeDefined();
  })
});
