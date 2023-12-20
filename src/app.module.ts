import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceModule } from './attendance/attendance.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [AttendanceModule, LecturerModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
