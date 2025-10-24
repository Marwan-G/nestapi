import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingService {
  postReserve(): string {
    return "test this constructor ";
  }
}
