import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './patient/patient.entity';
import { Appointment } from './appointment/appointment.entity';
import { MedicalRecord } from './medical-record/medical-record.entity';
import { User } from './user/user.entity';
import { Prescription } from './prescription/prescription.entity';
import { Payment } from './payment/payment.entity';

import { PatientService } from './patient/patient.service';
import { PatientController } from './patient/patient.controller';

import { AppointmentService } from './appointment/appointment.service';
import { AppointmentController } from './appointment/appointment.controller';

import { MedicalRecordService } from './medical-record/medical-record.service';
import { MedicalRecordController } from './medical-record/medical-record.controller';

import { PaymentService } from './payment/payment.service';
import { PaymentController } from './payment/payment.controller';

import { PrescriptionService } from './prescription/prescription.service';
import { PrescriptionController } from './prescription/prescription.controller';

import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
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
  controllers: [
    PatientController, 
    AppointmentController,
    MedicalRecordController,
    PaymentController,
    PrescriptionController,
    UserController,
  ],
  providers: [
    PatientService, 
    AppointmentService,
    MedicalRecordService,
    PaymentService,
    PrescriptionService,
    UserService,
  ],
  exports: [UserService]
})
export class AppModule {}
