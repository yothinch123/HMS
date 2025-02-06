import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MedicalRecord } from '../medical-record/medical-record.entity';

@Entity()
export class Prescription {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MedicalRecord, medicalRecord => medicalRecord.prescription)
  @JoinColumn({ name: "record_id" })
  medicalRecord: MedicalRecord;

  @Column()
  medication_name: string;

  @Column()
  dosage: string;

  @Column('text')
  instructions: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
