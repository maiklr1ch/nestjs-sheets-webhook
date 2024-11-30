import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RowsModule } from './rows/rows.module';
import { HttpModule } from '@nestjs/axios';
import { EmailModule } from './email/email.module';

@Module({
  imports: [PrismaModule, RowsModule, HttpModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
