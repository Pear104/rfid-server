import { Module } from '@nestjs/common';
import { LecturerService } from './lecturer.service';
import { LecturerController } from './lecturer.controller';
import { LecturerRepository } from './lecturer.repository';

@Module({
  controllers: [LecturerController],
  providers: [LecturerService, LecturerRepository],
})
export class LecturerModule {}
