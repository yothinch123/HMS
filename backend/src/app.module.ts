import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './patient/patient.entity';
import { Appointment } from './appointment/appointment.entity';
import { MedicalRecord } from './medical/medical-record.entity';
import { User } from './user/user.entity';
import { Prescription } from './prescription/prescription.entity';
import { Payment } from './payment/payment.entity';

import { PatientService } from './patient/patient.service';
import { PatientController } from './patient/patient.controller';

import { AppointmentService } from './appointment/appointment.service';
import { AppointmentController } from './appointment/appointment.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [Patients, Appointment, MedicalRecord, User, Prescription, Payment],
      synchronize: true, // ใช้เฉพาะในระหว่างการพัฒนา
    }),
    TypeOrmModule.forFeature([Patients, Appointment, MedicalRecord, User, Prescription, Payment]),
  ],
  controllers: [PatientController, AppointmentController],
  providers: [PatientService, AppointmentService],
})
export class AppModule {}
