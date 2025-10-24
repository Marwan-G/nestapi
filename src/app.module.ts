import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment/entities/payment.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BookingModule, 
    PaymentModule, 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest-test',
    entities: [Payment],
    synchronize: process.env.NODE_ENV !== 'production', // Only true in development
    logging: process.env.NODE_ENV === 'development',
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
