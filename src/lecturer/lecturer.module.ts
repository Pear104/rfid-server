import { Module } from '@nestjs/common';
import { LecturerService } from './lecturer.service';
import { LecturerController } from './lecturer.controller';
import { LecturerRepository } from './lecturer.repository';
import { UtilsModule } from 'src/utils/utils.module';

@Module({
  imports: [UtilsModule],
  controllers: [LecturerController],
  providers: [LecturerService, LecturerRepository],
})
export class LecturerModule {}
