import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';

@Injectable()
export class MedicalRecordService {
  constructor(
    @InjectRepository(MedicalRecord)
    private medicalRecordRepository: Repository<MedicalRecord>,
  ) {}

  async create(medicalRecordData: Partial<MedicalRecord>): Promise<MedicalRecord> {
    const medicalRecord = this.medicalRecordRepository.create(medicalRecordData);
    return await this.medicalRecordRepository.save(medicalRecord);
  }

  async findAll(): Promise<MedicalRecord[]> {
    return this.medicalRecordRepository.find();
  }

  async findOne(id: number): Promise<MedicalRecord> {
    const medicalRecord = await this.medicalRecordRepository.findOne({ where: { id } });
    if (!medicalRecord) {
      throw new NotFoundException(`MedicalRecord with ID ${id} not found`);
    }
    return {
        ...medicalRecord,
        // medicalRecord_date: format(medicalRecord.medicalRecord_date, 'dd-MM-yyyy')
      };
  }

  async update(id: number, medicalRecordData: Partial<MedicalRecord>): Promise<MedicalRecord> {
    await this.medicalRecordRepository.update(id, medicalRecordData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const medicalRecord = await this.medicalRecordRepository.findOne({ where: { id } });
    if (!medicalRecord) {
      throw new NotFoundException(`MedicalRecord with ID ${id} not found`);
    } else {
      await this.medicalRecordRepository.delete(id);
    }
  }
}
