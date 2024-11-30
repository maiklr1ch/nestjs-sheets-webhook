import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RowsModule } from './rows/rows.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PrismaModule, RowsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
