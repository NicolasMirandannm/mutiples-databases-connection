import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../prisma-ms/generated/client1';

@Injectable()
export class PrismaServiceMS extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}