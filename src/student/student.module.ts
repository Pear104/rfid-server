import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentRepository } from './student.repository';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [UtilsModule],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
