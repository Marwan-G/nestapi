import { Body, Controller, Get, Param, Post, Query, Res,Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request as ExpressRequest } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

 @Post('/users')
  PostUsers( @Body('age')  Age: number ): string {
 return this.appService.PostUsers(Age);
  
 }
}