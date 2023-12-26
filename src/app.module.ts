import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceModule } from './attendance/attendance.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { StudentModule } from './student/student.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [AttendanceModule, LecturerModule, StudentModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
