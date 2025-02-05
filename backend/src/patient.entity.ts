import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Appointment } from './appointment.entity';
import { MedicalRecord } from './medical-record.entity';
import { Payment } from './payment.entity';

@Entity()
export class Patients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  gender: string;

  @Column('date', { nullable: true })
  date_of_birth: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  email: string;

  @Column('text', { nullable: true })
  address: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => Appointment, appointment => appointment.patient)
  appointments: Appointment[];

  @OneToMany(() => MedicalRecord, medicalRecord => medicalRecord.patient)
  medicalRecords: MedicalRecord[];

  @OneToMany(() => Payment, payment => payment.patient_id)
  payments: Payment[];
}
