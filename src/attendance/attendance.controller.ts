import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('/:role/all')
  getAllAttendance(@Param('role') role: string) {
    return this.attendanceService.findAll(role);
  }

  @Get('/:role')
  getAttendance(@Param('role') role: string, @Query('uid') uid: string) {
    return this.attendanceService.findOne(role, uid);
  }

  @Post('/:role')
  checkAttendance(@Param('role') role: string, @Body() body: any) {
    return this.attendanceService.checkAttendance(role, body.uid);
  }
}
