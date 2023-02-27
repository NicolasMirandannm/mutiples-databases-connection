import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaServiceMS } from 'src/database/prisma-ms.service';
import { PrismaServiceSP } from 'src/database/prisma-sp.service';

@Injectable()
export class PrismaService {
  constructor(
    private readonly prismaMS: PrismaServiceMS,
    private readonly prismaSP: PrismaServiceSP,
  ) {};

  public getClient(client: string) {
    if(client === 'sp') {
      return this.prismaSP;
    } else if (client === 'ms') {
      return this.prismaMS;
    }
    else throw new BadRequestException(`o schema ${client} não existe`)
  }

}
