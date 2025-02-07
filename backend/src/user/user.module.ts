import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // ✅ ตรวจสอบว่า path นี้ถูกต้อง
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ เพิ่ม TypeOrmModule
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // ✅ Export UserService ให้ใช้ใน AuthModule
})
export class UserModule {}
