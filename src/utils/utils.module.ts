import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { UtilsController } from './utils.controller';
import { UtilsRepository } from './utils.repository';

@Module({
  controllers: [UtilsController],
  providers: [UtilsService, UtilsRepository],
  exports: [UtilsRepository],
})
export class UtilsModule {}
