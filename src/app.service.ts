import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi World!';
  }

  PostUsers(value: number): string {
    return `this is the age ${value} years old`;
  }
}
