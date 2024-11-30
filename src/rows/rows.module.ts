import { Module } from '@nestjs/common';
import { RowsService } from './rows.service';
import { RowsGateway } from './rows.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RowsController } from './rows.controller';

@Module({
  providers: [RowsGateway, RowsService],
  controllers: [RowsController],
  imports: [PrismaModule]
})
export class RowsModule {}
