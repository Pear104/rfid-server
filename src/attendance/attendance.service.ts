import { Injectable } from '@nestjs/common';
import { AttendanceRepository } from './attendance.repository';

@Injectable()
export class AttendanceService {
  constructor(public attendanceRepo: AttendanceRepository) {}
  async findOne(role, uid) {
    try {
      return {
        message: 'Found',
        err: 0,
        data: await this.attendanceRepo.findOne(role, 'uid', uid),
      };
    } catch (error) {
      return {
        message: 'Not found',
        err: 1,
      };
    }
  }

  async findAll(role) {
    return this.attendanceRepo.findAll(role);
  }

  async checkAttendance(role, uid) {
    const exist: any = await this.findOne(role, uid);
    const d = new Date().toLocaleString('en-GB', {
      timeZone: 'Asia/Ho_Chi_Minh',
    });
    // > Get date, time
    let date = `${d.slice(0, 2)}/${d.slice(3, 5)}/${d.slice(6, 10)}`;
    let time = `${d.slice(12, 14)}:${d.slice(15, 17)}:${d.slice(18, 20)}`;
    let data;

    if (exist.err == 0) {
      if (!exist.data.attendance) {
        // > Check if user haven't attend
        data = {
          ...exist.data,
          attendance: {
            [date]: [time],
          },
        };
      } else {
        //> Check if user already attend
        if (exist.data.attendance[date]) {
          // > Check if user already attend today
          exist.data.attendance[date].push(time);
          data = {
            ...exist.data,
          };
        } else {
          // > Check if user haven't attend today
          data = {
            ...exist.data,
            attendance: {
              ...exist.data.attendance,
              [date]: [time],
            },
          };
        }
      }
      try {
        await this.attendanceRepo.checkAttendance(role, exist.data.dbId, data);
        return {
          err: 0,
          message: 'attend successfully',
        };
      } catch (error) {
        return {
          err: 3,
          message: error,
        };
      }
    } else {
      return {
        err: 1,
        message: 'Not found',
      };
    }
  }
}
