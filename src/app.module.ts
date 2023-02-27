import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaServiceMS } from './database/prisma-ms.service';
import { PrismaServiceSP } from './database/prisma-sp.service';
import { PrismaService } from './repository/Generic-prismaService/Prisma.service';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaServiceMS, PrismaServiceSP, PrismaService, UserRepository],
})
export class AppModule {}
