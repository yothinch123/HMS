import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from './payment.entity';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async create(@Body() paymentData: Partial<Payment>) {
    return this.paymentService.create(paymentData);
  }

  @Get()
  async findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.paymentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() paymentData: Partial<Payment>) {
    return this.paymentService.update(id, paymentData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.paymentService.remove(id);
  }
}
