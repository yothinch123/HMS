import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service';
import { MedicalRecord } from './medical-record.entity';

@Controller('medical-record')
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post()
  async create(@Body() medicalRecordData: Partial<MedicalRecord>) {
    return this.medicalRecordService.create(medicalRecordData);
  }

  @Get()
  async findAll() {
    return this.medicalRecordService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.medicalRecordService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() medicalRecordData: Partial<MedicalRecord>) {
    return this.medicalRecordService.update(id, medicalRecordData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.medicalRecordService.remove(id);
  }
}
