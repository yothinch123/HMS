import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prescription } from './prescription.entity';
import { format } from 'date-fns';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectRepository(Prescription)
    private prescriptionRepository: Repository<Prescription>,
  ) {}

  async create(prescriptionData: Partial<Prescription>): Promise<Prescription> {
    const prescription = this.prescriptionRepository.create(prescriptionData);
    return await this.prescriptionRepository.save(prescription);
  }

  async findAll(): Promise<Prescription[]> {
    return this.prescriptionRepository.find();
  }

  async findOne(id: number): Promise<Prescription> {
    const prescription = await this.prescriptionRepository.findOne({ where: { id } });
    if (!prescription) {
      throw new NotFoundException(`Prescription with ID ${id} not found`);
    }
    return prescription
  }

  async update(id: number, prescriptionData: Partial<Prescription>): Promise<Prescription> {
    await this.prescriptionRepository.update(id, prescriptionData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const prescription = await this.prescriptionRepository.findOne({ where: { id } });
    if (!prescription) {
      throw new NotFoundException(`Prescription with ID ${id} not found`);
    } else {
      const res = await this.prescriptionRepository.delete(id);
    }
  }
}
