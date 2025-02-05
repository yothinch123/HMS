import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patients } from './patient.entity';
import { User } from './user.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patients, patient => patient.appointments)
  patient: Patients;

  @ManyToOne(() => User, user => user.appointments, { nullable: true })
  doctor: User;

  @Column('timestamp')
  appointment_date: Date;

  @Column('text', { nullable: true })
  reason_for_visit: string;

  @Column({ default: 'Scheduled' })
  status: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
