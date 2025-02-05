import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patients } from './patient.entity';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async create(@Body() patientData: Partial<Patients>) {
    return this.patientService.create(patientData);
  }

  @Get()
  async findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.patientService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() patientData: Partial<Patients>) {
    return this.patientService.update(id, patientData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.patientService.remove(id);
  }
}
