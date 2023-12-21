import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { LecturerService } from './lecturer.service';
import { LecturerCreateDto } from './dtos/lecturer-create.dto';

@Controller('lecturer')
export class LecturerController {
  constructor(private readonly lecturerService: LecturerService) {}

  @Get('all')
  async getAllLecturer() {
    return this.lecturerService.findAll();
  }

  @Get()
  async getOneLecturer(@Query('id') id) {
    return this.lecturerService.findOne(id);
  }

  @Post('create')
  async postCreateLecturer(@Body() body: LecturerCreateDto) {
    return this.lecturerService.create(body);
  }
}
