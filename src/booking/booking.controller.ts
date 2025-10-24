import { Controller , Post } from '@nestjs/common';
import { BookingService } from './booking.service';


@Controller('booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService) {}

@Post('/reserve')
  postReserve() {
    return this.bookingService.postReserve();
  }
}
