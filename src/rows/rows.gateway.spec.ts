import { Test, TestingModule } from '@nestjs/testing';
import { RowsGateway } from './rows.gateway';
import { RowsService } from './rows.service';

describe('RowsGateway', () => {
  let gateway: RowsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RowsGateway, RowsService],
    }).compile();

    gateway = module.get<RowsGateway>(RowsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
