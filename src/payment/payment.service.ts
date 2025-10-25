import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payment) private paymentsRepo: Repository<Payment> ){}

   async create(createPaymentDto: CreatePaymentDto) {
    try{
    const res =   await  this.paymentsRepo.save(createPaymentDto)
    return {message: "object added", res};
    }catch (error){
      return {message: "Failed to create payment", error: error.message}
    }
  
  }

  async getAllPayments() {
    const payment = await this.paymentsRepo.find()
    return payment;
  }

  async findOne(id: number) {
    const existingPayment = await this.paymentsRepo.findOne({ where: { id } });
    
    if (!existingPayment) {
      throw new NotFoundException(`Payment with id ${id} not found`);
    }
    
    return existingPayment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const result = await this.paymentsRepo.update(id, updatePaymentDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Payment with id ${id} not found`);
    }
    
    return this.paymentsRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    const result = await this.paymentsRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Payment with id ${id} not found`);
    }
    
    return { message: `Payment with id ${id} has been deleted successfully` };
  }
}
