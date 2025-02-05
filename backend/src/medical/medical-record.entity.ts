import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patients } from '../patient/patient.entity';
import { User } from '../user/user.entity';

@Entity()
export class MedicalRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patients, patient => patient.medicalRecords)
  @JoinColumn({ name: "patient_id" })
  patient: Patients;

  @Column('text', { nullable: true })
  diagnosis: string;

  @Column('text', { nullable: true })
  treatment: string;

  @Column('text', { nullable: true })
  prescription: string;

  @ManyToOne(() => User, user => user.medicalRecords, { nullable: true })
  @JoinColumn({ name: "doctor_id" })
  doctor: User;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  record_date: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
