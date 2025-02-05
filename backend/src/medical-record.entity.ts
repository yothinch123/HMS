import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patients } from './patient.entity';
import { User } from './user.entity';

@Entity()
export class MedicalRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patients, patient => patient.medicalRecords)
  patient: Patients;

  @Column('text', { nullable: true })
  diagnosis: string;

  @Column('text', { nullable: true })
  treatment: string;

  @Column('text', { nullable: true })
  prescription: string;

  @ManyToOne(() => User, user => user.medicalRecords, { nullable: true })
  doctor: User;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  record_date: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
