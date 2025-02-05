import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patients } from './patient.entity';
import { Appointment } from './appointment.entity';
import { MedicalRecord } from './medical-record.entity';
import { User } from './user.entity';
import { Prescription } from './prescription.entity';
import { Payment } from './payment.entity';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';

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
  controllers: [PatientController],
  providers: [PatientService],
})
export class AppModule {}
