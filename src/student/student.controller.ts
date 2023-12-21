import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentCreateDto } from './dtos/student-create.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('all')
  async getAllStudent() {
    return this.studentService.findAll();
  }

  @Get()
  async getOneStudent(@Query('id') id) {
    return this.studentService.findOne(id);
  }

  @Post('create')
  async postCreateStudent(@Body() body: StudentCreateDto) {
    return this.studentService.create(body);
  }
}
