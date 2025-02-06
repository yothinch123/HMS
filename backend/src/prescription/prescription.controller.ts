import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { Prescription } from './prescription.entity';

@Controller('prescription')
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Post()
  async create(@Body() prescriptionData: Partial<Prescription>) {
    return this.prescriptionService.create(prescriptionData);
  }

  @Get()
  async findAll() {
    return this.prescriptionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.prescriptionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() prescriptionData: Partial<Prescription>) {
    return this.prescriptionService.update(id, prescriptionData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.prescriptionService.remove(id);
  }
}
