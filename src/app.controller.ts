import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

export type Userr = {name: string, location: string}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('user')
  async addUser(@Body() user: Userr) {
    return await this.appService.createUser(user.location, user.name)
  }

  @Get('user/:location')
  async getUserr(@Param('location') location: string) {
    return await this.appService.getAllUsers(location);
  }

}
