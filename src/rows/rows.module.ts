import { Module } from '@nestjs/common';
import { RowsService } from './rows.service';
import { RowsGateway } from './rows.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RowsController } from './rows.controller';
import { EmailModule } from 'src/email/email.module';

@Module({
  providers: [RowsGateway, RowsService],
  controllers: [RowsController],
  imports: [PrismaModule, EmailModule]
})
export class RowsModule {}
