import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patients } from './patient.entity';
import { format } from 'date-fns';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patients)
    private patientRepository: Repository<Patients>,
  ) {}

  async create(patientData: Partial<Patients>): Promise<Patients> {
    const patient = this.patientRepository.create(patientData);
    return await this.patientRepository.save(patient);
  }

  async findAll(): Promise<Patients[]> {
    return this.patientRepository.find();
  }

  async findOne(id: number): Promise<Patients> {
    const patient = await this.patientRepository.findOne({ where: { id } });
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return {
        ...patient,
        date_of_birth: format(patient.date_of_birth, 'dd-MM-yyyy')
      };
  }

  async update(id: number, patientData: Partial<Patients>): Promise<Patients> {
    await this.patientRepository.update(id, patientData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const patient = await this.patientRepository.findOne({ where: { id } });
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    } else {
      const res = await this.patientRepository.delete(id);
    }
  }
}
