import { Injectable } from "@nestjs/common";
import { PrismaService } from "./Generic-prismaService/Prisma.service";

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async createUser(location:string, name: string) {
    const clientDb = this.prisma.getClient(location);
    return await clientDb.user.create({
      data: {
        name,
        location
      }
    })
  }

  public async getUsers(location:string) {
    const clientDb = this.prisma.getClient(location); 

    return await clientDb.user.findMany();
  }

}