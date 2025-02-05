import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patients } from './patient.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patients, patient => patient.payments)
  patient_id: Patients;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  payment_date: Date;

  @Column({ nullable: true })
  method: string;

  @Column({ default: 'Completed' })
  status: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
