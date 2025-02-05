import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment.entity';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async create(@Body() appointmentData: Partial<Appointment>) {
    return this.appointmentService.create(appointmentData);
  }

  @Get()
  async findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.appointmentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() appointmentData: Partial<Appointment>) {
    return this.appointmentService.update(id, appointmentData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.appointmentService.remove(id);
  }
}
